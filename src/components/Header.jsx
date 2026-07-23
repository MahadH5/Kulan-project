import { Link } from "react-router-dom";
import { nav, search } from "../data/siteData";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo" aria-label="Kulan home">
          <span className="header__logo-icon">m</span>
          <span className="header__logo-text">{nav.logoText}</span>
        </Link>

        <div className="header__search">
          <input
            type="text"
            className="header__search-input"
            placeholder={search.placeholder}
          />
          <span className="header__search-divider" aria-hidden="true" />
          <input
            type="text"
            className="header__search-location"
            defaultValue={search.location}
          />
          <button className="header__search-button" type="button" aria-label="Search">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>

        <nav className="header__actions">
          <button className="header__lang" type="button">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>{nav.language}</span>
          </button>
          <Link to="/login" className="header__login">
            {nav.login}
          </Link>
          <Link to="/signup" className="header__signup">
            {nav.signup}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
