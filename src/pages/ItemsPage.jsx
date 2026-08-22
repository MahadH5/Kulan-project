import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useItemsStore } from "../store/useItemsStore";
import PageHeader from "../components/PageHeader";
import "./ItemsPage.css";

function ItemsPage() {
  const items = useItemsStore((s) => s.items);
  const status = useItemsStore((s) => s.status);
  const loadItems = useItemsStore((s) => s.loadItems);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  return (
    <div className="items-page">
      <PageHeader heading="Items" subtext="Products loaded from DummyJSON" />

      <div className="container">
        {status === "loading" && (
          <p className="items-page__state">Loading...</p>
        )}

        {status === "error" && (
          <p className="items-page__state items-page__state--error">
            Something went wrong while loading items.
          </p>
        )}

        {status === "success" && (
          <div className="items-page__grid">
            {items.map((item) => (
              <Link
                key={item.id}
                to={`/items/${item.id}`}
                className="items-page__card"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="items-page__image"
                />
                <h3 className="items-page__title">{item.title}</h3>
                <p className="items-page__price">${item.price}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemsPage;
