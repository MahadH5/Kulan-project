import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getItemUrl } from "../api/items";
import "./ItemDetailPage.css";

function ItemDetailPage() {
  const { id } = useParams();
  const [status, setStatus] = useState("loading");
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus("loading");
    fetch(getItemUrl(id))
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setItem(data);
        setStatus("success");
      })
      .catch((err) => {
        setError(err.message);
        setStatus("error");
      });
  }, [id]);

  if (status === "loading") {
    return (
      <div className="container">
        <p className="item-detail__state">Loading...</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="container">
        <p className="item-detail__state item-detail__state--error">
          {error}
        </p>
        <Link to="/items" className="item-detail__back">
          Back to items
        </Link>
      </div>
    );
  }

  return (
    <div className="container item-detail">
      <Link to="/items" className="item-detail__back">
        Back to items
      </Link>
      <img
        src={item.thumbnail}
        alt={item.title}
        className="item-detail__image"
      />
      <h1 className="item-detail__title">{item.title}</h1>
      <p className="item-detail__price">${item.price}</p>
      <p className="item-detail__description">{item.description}</p>
    </div>
  );
}

export default ItemDetailPage;
