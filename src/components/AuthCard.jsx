import { Link } from "react-router-dom";
import "./AuthCard.css";

function AuthCard({
  heading,
  subtext,
  children,
  switchPrompt,
  switchLinkLabel,
  switchTo,
}) {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-card__heading">{heading}</h1>
        {subtext && <p className="auth-card__subtext">{subtext}</p>}
        {children}
        <p className="auth-card__switch">
          {switchPrompt}{" "}
          <Link to={switchTo} className="auth-card__switch-link">
            {switchLinkLabel}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AuthCard;
