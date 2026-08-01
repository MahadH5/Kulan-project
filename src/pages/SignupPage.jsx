import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "@convex-dev/auth/react";
import { ConvexError } from "convex/values";
import { authPages } from "../data/siteData";
import AuthCard from "../components/AuthCard";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function SignupPage() {
  const copy = authPages.signup;
  const { signIn } = useAuthActions();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(field) {
    return (event) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("Please fill in every field.");
      return;
    }

    if (!EMAIL_PATTERN.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setError(null);
    setSubmitting(true);

    try {
      await signIn("password", {
        name: form.name,
        email: form.email,
        password: form.password,
        flow: "signUp",
      });
      navigate("/dashboard");
    } catch (err) {
      console.error("Signup failed:", err);
      const message =
        err instanceof ConvexError
          ? err.data
          : err?.message ||
            "We couldn't create your account. Please try again.";
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
          <label className="auth-card__label" htmlFor="signup-name">
            {copy.nameLabel}
          </label>
          <input
            id="signup-name"
            type="text"
            className="auth-card__input"
            value={form.name}
            onChange={handleChange("name")}
            autoComplete="name"
          />
        </div>

        <div className="auth-card__field">
          <label className="auth-card__label" htmlFor="signup-email">
            {copy.emailLabel}
          </label>
          <input
            id="signup-email"
            type="email"
            className="auth-card__input"
            value={form.email}
            onChange={handleChange("email")}
            autoComplete="email"
          />
        </div>

        <div className="auth-card__field">
          <label className="auth-card__label" htmlFor="signup-password">
            {copy.passwordLabel}
          </label>
          <input
            id="signup-password"
            type="password"
            className="auth-card__input"
            value={form.password}
            onChange={handleChange("password")}
            autoComplete="new-password"
          />
        </div>

        {error && <p className="auth-card__error">{error}</p>}

        <button
          type="submit"
          className="auth-card__submit"
          disabled={submitting}
        >
          {submitting ? "Creating account…" : copy.submitLabel}
        </button>
      </form>
    </AuthCard>
  );
}

export default SignupPage;
