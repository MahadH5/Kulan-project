import { Link } from "react-router-dom";
import { onlineEventsSection } from "../data/siteData";
import EventCard from "./EventCard";
import "./EventsSection.css";

function OnlineEvents() {
  return (
    <section className="events-section section events-section--alt">
      <div className="container">
        <div className="events-section__header">
          <h2 className="events-section__heading">
            {onlineEventsSection.heading}
          </h2>
          <Link to="/events" className="events-section__see-all">
            {onlineEventsSection.seeAllLabel}
          </Link>
        </div>

        <div className="events-section__grid">
          {onlineEventsSection.events.map((event) => (
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

export default OnlineEvents;
