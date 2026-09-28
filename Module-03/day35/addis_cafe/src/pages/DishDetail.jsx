import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useCart } from "../cart/CartContext";
import Spinner from "../ui/Spinner";
import ErrorMessage from "../ui/ErrorMessage";
import "./DishDetail.css";

function DishDetail() {
  const { id } = useParams();
  const { data, loading, error } = useFetch("/dishes.json");
  const { dispatch } = useCart();

  const dish = data ? data.find((d) => String(d.id) === String(id)) : null;

  function handleAdd() {
    if (dish) {
      dispatch({ type: "ADD", payload: dish });
    }
  }

  if (loading) {
    return <Spinner message="Loading dish..." />;
  }

  if (error) {
    return <ErrorMessage title="Could not load dish" message={error} />;
  }

  if (!dish) {
    return (
      <div className="dish-not-found">
        <h2>Dish not found</h2>
        <p>We couldn&apos;t find a dish with that id.</p>
        <Link to="/menu" className="back-link">
          ← Back to menu
        </Link>
      </div>
    );
  }

  return (
    <div className="dish-detail">
      <Link to="/menu" className="back-link">
        ← Back to menu
      </Link>

      <article className="dish-detail-card">
        <div className="dish-detail-header">
          <h1>{dish.name}</h1>
          <div className="dish-detail-tags">
            <span className="tag">{dish.category}</span>
            {dish.spicy && <span className="tag spicy">🌶️ Spicy</span>}
          </div>
        </div>

        <p className="dish-detail-price">{dish.price} ETB</p>

        <p className="dish-detail-desc">
          A classic Ethiopian dish prepared with traditional spices and care.
          Perfect for sharing or enjoying on your own.
        </p>

        <button type="button" className="add-order-btn" onClick={handleAdd}>
          + Add to order
        </button>
      </article>
    </div>
  );
}

export default DishDetail;
