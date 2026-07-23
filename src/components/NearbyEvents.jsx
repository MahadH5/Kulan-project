import { Link } from "react-router-dom";
import { nearbyEventsSection } from "../data/siteData";
import EventCard from "./EventCard";
import "./EventsSection.css";

function NearbyEvents() {
  return (
    <section className="events-section section">
      <div className="container">
        <div className="events-section__header">
          <h2 className="events-section__heading">
            {nearbyEventsSection.heading}{" "}
            <span className="events-section__location">
              {nearbyEventsSection.location}
            </span>
            <svg
              className="events-section__edit-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
          </h2>
          <Link to="/events" className="events-section__see-all">
            {nearbyEventsSection.seeAllLabel}
          </Link>
        </div>

        <div className="events-section__grid">
          {nearbyEventsSection.events.map((event) => (
            <EventCard
              key={event.id}
              image={event.image}
              alt={event.title}
              meta={event.date}
              title={event.title}
              subtitle={event.group}
              footnote={`${event.attendees} people going`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NearbyEvents;
