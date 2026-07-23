import { Link } from "react-router-dom";
import { membershipCta } from "../data/siteData";
import "./MembershipCTA.css";

function MembershipCTA() {
  return (
    <section className="membership section">
      <div className="container membership__inner">
        <h2 className="membership__heading">{membershipCta.heading}</h2>
        <p className="membership__subtext">{membershipCta.subtext}</p>
        <Link to="/signup" className="membership__cta">
          {membershipCta.ctaLabel}
        </Link>
      </div>
    </section>
  );
}

export default MembershipCTA;
