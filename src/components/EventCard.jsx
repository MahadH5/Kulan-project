import { Link } from "react-router-dom";
import ProgressiveImage from "./ProgressiveImage";
import "./EventCard.css";

/**
 * Single card component reused across every card-based section/page
 * (NearbyEvents, OnlineEvents, EventsPage, PopularCities, CitiesPage).
 * Same spacing scale, colors, and type tokens throughout —
 * only `variant` changes layout, and `to` optionally makes it a link.
 *
 * variant="info"    -> image + date/title/group/attendee text below (events)
 * variant="overlay" -> image with title overlaid at the bottom (cities)
 */
function EventCard({
  image,
  alt,
  title,
  meta,
  subtitle,
  footnote,
  variant = "info",
  to,
}) {
  const content =
    variant === "overlay" ? (
      <>
        <ProgressiveImage
          src={image}
          alt={alt}
          className="event-card__image"
        />
        <h3 className="event-card__overlay-title">{title}</h3>
      </>
    ) : (
      <>
        <ProgressiveImage src={image} alt={alt} className="event-card__image" />
        <div className="event-card__body">
          {meta && <p className="event-card__meta">{meta}</p>}
          <h3 className="event-card__title">{title}</h3>
          {subtitle && <p className="event-card__subtitle">{subtitle}</p>}
          {footnote && <p className="event-card__footnote">{footnote}</p>}
        </div>
      </>
    );

  const className = `event-card ${
    variant === "overlay" ? "event-card--overlay" : ""
  }`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }

  return <article className={className}>{content}</article>;
}

export default EventCard;
