import { useState } from "react";
import { authPages } from "../data/siteData";
import AuthCard from "../components/AuthCard";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function LoginPage() {
  const copy = authPages.login;
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field) {
    return (event) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  function handleSubmit(event) {
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
    setSubmitted(true);
  }

  return (
    <AuthCard
      heading={copy.heading}
      subtext={copy.subtext}
      switchPrompt={copy.switchPrompt}
      switchLinkLabel={copy.switchLinkLabel}
      switchTo={copy.switchTo}
    >
      {submitted ? (
        <p className="auth-card__success">
          You're logged in! This is a front-end demo, so no account was
          actually created.
        </p>
      ) : (
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

          <button type="submit" className="auth-card__submit">
            {copy.submitLabel}
          </button>
        </form>
      )}
    </AuthCard>
  );
}

export default LoginPage;
