import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "@convex-dev/auth/react";
import { ConvexError } from "convex/values";
import { authPages } from "../data/siteData";
import AuthCard from "../components/AuthCard";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function LoginPage() {
  const copy = authPages.login;
  const { signIn } = useAuthActions();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(field) {
    return (event) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!form.email || !form.password) {
      setError("Please fill in both fields.");
      return;
    }

    if (!EMAIL_PATTERN.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null);
    setSubmitting(true);

    try {
      await signIn("password", {
        email: form.email,
        password: form.password,
        flow: "signIn",
      });
      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      const message =
        err instanceof ConvexError
          ? err.data
          : err?.message ||
            "We couldn't log you in — check your email and password and try again.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AuthCard
      heading={copy.heading}
      subtext={copy.subtext}
      switchPrompt={copy.switchPrompt}
      switchLinkLabel={copy.switchLinkLabel}
      switchTo={copy.switchTo}
    >
      <form onSubmit={handleSubmit} noValidate>
        <div className="auth-card__field">
          <label className="auth-card__label" htmlFor="login-email">
            {copy.emailLabel}
          </label>
          <input
            id="login-email"
            type="email"
            className="auth-card__input"
            value={form.email}
            onChange={handleChange("email")}
            autoComplete="email"
          />
        </div>

        <div className="auth-card__field">
          <label className="auth-card__label" htmlFor="login-password">
            {copy.passwordLabel}
          </label>
          <input
            id="login-password"
            type="password"
            className="auth-card__input"
            value={form.password}
            onChange={handleChange("password")}
            autoComplete="current-password"
          />
        </div>

        {error && <p className="auth-card__error">{error}</p>}

        <button
          type="submit"
          className="auth-card__submit"
          disabled={submitting}
        >
          {submitting ? "Logging in…" : copy.submitLabel}
        </button>
      </form>
    </AuthCard>
  );
}

export default LoginPage;
