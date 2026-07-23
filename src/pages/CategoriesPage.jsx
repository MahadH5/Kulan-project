import { categoriesPage, eventCategories } from "../data/siteData";
import PageHeader from "../components/PageHeader";
import "../components/EventCategories.css";
import "./CategoriesPage.css";

function CategoriesPage() {
  return (
    <div className="categories-page">
      <PageHeader
        heading={categoriesPage.heading}
        subtext={categoriesPage.subtext}
      />

      <div className="container categories-page__grid">
        {eventCategories.categories.map((cat) => (
          <div className="categories__item categories-page__item" key={cat.id}>
            <span className="categories__emoji" aria-hidden="true">
              {cat.emoji}
            </span>
            <span className="categories__label">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
