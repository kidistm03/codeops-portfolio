import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>This page doesn&apos;t exist.</p>
      <p className="not-found-hint">
        Check the address or head back to the menu.
      </p>
      <Link to="/" className="not-found-btn">
        Go home
      </Link>
      <Link to="/menu" className="not-found-link">
        Browse menu
      </Link>
    </div>
  );
}

export default NotFound;
