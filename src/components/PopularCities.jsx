import { popularCities } from "../data/siteData";
import EventCard from "./EventCard";
import "./EventsSection.css";

function PopularCities() {
  return (
    <section className="events-section section">
      <div className="container">
        <div className="events-section__header">
          <h2 className="events-section__heading">{popularCities.heading}</h2>
        </div>

        <div className="events-section__grid events-section__grid--cities">
          {popularCities.cities.map((city) => (
            <EventCard
              key={city.id}
              image={city.image}
              alt={city.name}
              title={city.name}
              variant="overlay"
              to="/cities"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularCities;
