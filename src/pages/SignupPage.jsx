import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authPages } from "../data/siteData";
import { useAuthStore } from "../store/useAuthStore";
import AuthCard from "../components/AuthCard";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function SignupPage() {
  const copy = authPages.signup;
  const navigate = useNavigate();
  const signup = useAuthStore((s) => s.signup);
  const setError = useAuthStore((s) => s.setError);
  const error = useAuthStore((s) => s.error);
  const submitting = useAuthStore((s) => s.status === "loading");
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  // Clear any stale auth error on the way in and out.
  useEffect(() => {
    const { clearError } = useAuthStore.getState();
    clearError();
    return clearError;
  }, []);

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

    const ok = await signup(form);
    if (ok) {
      navigate("/dashboard", { replace: true });
    }
    // On failure the store already holds the error message.
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
