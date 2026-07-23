import { howItWorks } from "../data/siteData";
import "./HowKulanWorks.css";

function HowKulanWorks() {
  return (
    <section className="how-it-works section">
      <div className="container">
        <h2 className="how-it-works__heading">{howItWorks.heading}</h2>
        <div className="how-it-works__grid">
          {howItWorks.steps.map((step) => (
            <div className="how-it-works__step" key={step.id}>
              <span className="how-it-works__emoji" aria-hidden="true">
                {step.emoji}
              </span>
              <h3 className="how-it-works__step-title">{step.title}</h3>
              <p className="how-it-works__step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowKulanWorks;
