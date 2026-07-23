import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__heading">Page not found</h1>
      <p className="not-found__text">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link to="/" className="not-found__link">
        Back to home
      </Link>
    </div>
  );
}

export default NotFoundPage;
