import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ITEMS_URL } from "../api/items";
import PageHeader from "../components/PageHeader";
import "./ItemsPage.css";

function ItemsPage() {
  const [status, setStatus] = useState("loading");
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(ITEMS_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setItems(data.products);
        setStatus("success");
      })
      .catch((err) => {
        setError(err.message);
        setStatus("error");
      });
  }, []);

  return (
    <div className="items-page">
      <PageHeader heading="Items" subtext="Products loaded from DummyJSON" />

      <div className="container">
        {status === "loading" && (
          <p className="items-page__state">Loading...</p>
        )}

        {status === "error" && (
          <p className="items-page__state items-page__state--error">
            {error}
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
