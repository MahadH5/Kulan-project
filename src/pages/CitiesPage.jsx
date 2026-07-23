import { citiesPage, popularCities } from "../data/siteData";
import PageHeader from "../components/PageHeader";
import EventCard from "../components/EventCard";
import "../components/EventsSection.css";
import "./CitiesPage.css";

function CitiesPage() {
  return (
    <div className="cities-page">
      <PageHeader heading={citiesPage.heading} subtext={citiesPage.subtext} />

      <div className="container">
        <div className="events-section__grid events-section__grid--cities cities-page__grid">
          {popularCities.cities.map((city) => (
            <EventCard
              key={city.id}
              image={city.image}
              alt={city.name}
              title={city.name}
              variant="overlay"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CitiesPage;
