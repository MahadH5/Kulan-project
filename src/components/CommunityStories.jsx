import { communityStories } from "../data/siteData";
import "./CommunityStories.css";

function CommunityStories() {
  return (
    <section className="stories section">
      <div className="container">
        <h2 className="stories__heading">{communityStories.heading}</h2>
        <div className="stories__grid">
          {communityStories.stories.map((story) => (
            <blockquote className="stories__card" key={story.id}>
              <p className="stories__quote">"{story.quote}"</p>
              <footer className="stories__footer">
                <img
                  src={story.image}
                  alt={story.name}
                  className="stories__avatar"
                />
                <div>
                  <p className="stories__name">{story.name}</p>
                  <p className="stories__group">{story.group}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunityStories;
