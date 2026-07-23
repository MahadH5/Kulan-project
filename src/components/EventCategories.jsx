import { Link } from "react-router-dom";
import { eventCategories } from "../data/siteData";
import "./EventCategories.css";

function EventCategories() {
  return (
    <section className="categories section">
      <div className="container">
        <h2 className="categories__heading">{eventCategories.heading}</h2>
        <div className="categories__grid">
          {eventCategories.categories.map((cat) => (
            <Link to="/categories" key={cat.id} className="categories__item">
              <span className="categories__emoji" aria-hidden="true">
                {cat.emoji}
              </span>
              <span className="categories__label">{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventCategories;
