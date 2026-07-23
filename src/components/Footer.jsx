import { Link } from "react-router-dom";
import { footer, nav } from "../data/siteData";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-icon">m</span>
            <span className="footer__logo-text">{nav.logoText}</span>
          </Link>
          <p className="footer__tagline">
            The people platform. Where interests become friendships.
          </p>
          <div className="footer__socials">
            {footer.socials.map((social) => (
              <button type="button" key={social} className="footer__social">
                {social}
              </button>
            ))}
          </div>
        </div>

        {footer.columns.map((col) => (
          <div className="footer__column" key={col.id}>
            <h3 className="footer__column-heading">{col.heading}</h3>
            <ul className="footer__links">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer__bottom">
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
