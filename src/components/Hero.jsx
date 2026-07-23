import { Link } from "react-router-dom";
import { hero } from "../data/siteData";
import ProgressiveImage from "./ProgressiveImage";
import "./Hero.css";

function Hero() {
  const { images } = hero;

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__visual hero__visual--left">
          <div className="hero__blob hero__blob--purple" aria-hidden="true" />
          <svg
            className="hero__squiggle hero__squiggle--near-you"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 10 Q14 4 24 10"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M2 18 Q12 12 22 18"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <figure className="hero__card hero__card--near-you">
            <ProgressiveImage src={images.nearYou.src} alt={images.nearYou.alt} />
            <figcaption className="hero__tag hero__tag--pink">
              {images.nearYou.tag}
            </figcaption>
          </figure>

          <figure className="hero__card hero__card--dance">
            <ProgressiveImage
              src={images.danceClass.src}
              alt={images.danceClass.alt}
            />
            <figcaption className="hero__tag hero__tag--dark-pink">
              {images.danceClass.tag}
            </figcaption>
            <span className="hero__note" aria-hidden="true">
              ♫
            </span>
          </figure>
        </div>

        <div className="hero__content">
          <h1 className="hero__heading">
            The 🧑 people platform.
            <br />
            Where 🌻 interests
            <br />
            become 💕 friendships.
          </h1>
          <p className="hero__subtext">{hero.subtext}</p>
          <Link to="/signup" className="hero__cta">
            {hero.ctaLabel}
          </Link>
        </div>

        <div className="hero__visual hero__visual--right">
          <svg
            className="hero__squiggle hero__squiggle--speaking"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 8 Q14 2 24 8"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M2 16 Q12 10 22 16"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <figure className="hero__card hero__card--speaking">
            <ProgressiveImage
              src={images.speakingClub.src}
              alt={images.speakingClub.alt}
            />
            <figcaption className="hero__tag hero__tag--pink">
              {images.speakingClub.tag}
            </figcaption>
            <span className="hero__spark" aria-hidden="true">
              ✦
            </span>
          </figure>

          <figure className="hero__card hero__card--thursday">
            <ProgressiveImage
              src={images.everyThursday.src}
              alt={images.everyThursday.alt}
            />
            <figcaption className="hero__tag hero__tag--yellow">
              📅 {images.everyThursday.tag}
            </figcaption>
          </figure>
          <div className="hero__blob hero__blob--outline" aria-hidden="true" />
          <svg
            className="hero__squiggle hero__squiggle--swirl"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 20c0-8 6-14 14-14s12 8 6 12-14-2-10-8 10-6 14 0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
