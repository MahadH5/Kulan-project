import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { authPages } from "../data/siteData";
import { useAuthStore } from "../store/useAuthStore";
import AuthCard from "../components/AuthCard";

function LoginPage() {
  const copy = authPages.login;
  const navigate = useNavigate();
  const location = useLocation();
  const login = useAuthStore((s) => s.login);
  const setError = useAuthStore((s) => s.setError);
  const error = useAuthStore((s) => s.error);
  const submitting = useAuthStore((s) => s.status === "loading");
  const [form, setForm] = useState({ username: "", password: "" });

  // The store keeps the last auth error; drop any stale one on the way
  // in and out so it doesn't flash on a fresh visit.
  useEffect(() => {
    const { clearError } = useAuthStore.getState();
    clearError();
    return clearError;
  }, []);

  // Where to send the user after a successful login: back to the page
  // that bounced them here, or the dashboard by default.
  const redirectTo = location.state?.from?.pathname || "/dashboard";

  function handleChange(field) {
    return (event) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!form.username || !form.password) {
      setError("Please fill in both fields.");
      return;
    }

    const ok = await login(form);
    if (ok) {
      navigate(redirectTo, { replace: true });
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
          <label className="auth-card__label" htmlFor="login-username">
            Username
          </label>
          <input
            id="login-username"
            type="text"
            className="auth-card__input"
            value={form.username}
            onChange={handleChange("username")}
            autoComplete="username"
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
