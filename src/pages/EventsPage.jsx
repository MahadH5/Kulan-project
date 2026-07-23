import { useState } from "react";
import {
  eventsPage,
  nearbyEventsSection,
  onlineEventsSection,
} from "../data/siteData";
import PageHeader from "../components/PageHeader";
import EventCard from "../components/EventCard";
import "../components/EventsSection.css";
import "./EventsPage.css";

function EventsPage() {
  const [activeTab, setActiveTab] = useState(eventsPage.tabs[0].id);

  const events =
    activeTab === "nearby"
      ? nearbyEventsSection.events
      : onlineEventsSection.events;

  return (
    <div className="events-page">
      <PageHeader heading={eventsPage.heading} subtext={eventsPage.subtext} />

      <div className="container">
        <div className="events-page__tabs" role="tablist">
          {eventsPage.tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`events-page__tab ${
                activeTab === tab.id ? "events-page__tab--active" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="events-section__grid events-page__grid">
          {events.map((event) => (
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
    </div>
  );
}

export default EventsPage;
