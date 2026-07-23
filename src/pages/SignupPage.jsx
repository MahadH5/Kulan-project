import { useState } from "react";
import { authPages } from "../data/siteData";
import AuthCard from "../components/AuthCard";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function SignupPage() {
  const copy = authPages.signup;
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field) {
    return (event) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  function handleSubmit(event) {
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
          Welcome to Kulan, {form.name.split(" ")[0]}! This is a front-end
          demo, so no account was actually created.
        </p>
      ) : (
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

          <button type="submit" className="auth-card__submit">
            {copy.submitLabel}
          </button>
        </form>
      )}
    </AuthCard>
  );
}

export default SignupPage;
