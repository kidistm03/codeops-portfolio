import { Link } from "react-router-dom";
import { useCart } from "../cart/CartContext";
import "./DishCard.css";

function DishCard({ dish }) {
  const { dispatch } = useCart();

  function handleAdd(e) {
    e.preventDefault(); // don't navigate when clicking the button
    dispatch({ type: "ADD", payload: dish });
  }

  return (
    <article className="dish-card">
      <Link to={`/menu/${dish.id}`} className="dish-card-link">
        <div className="dish-card-body">
          <h3>{dish.name}</h3>
          <p className="dish-meta">
            <span className="category-tag">{dish.category}</span>
            {dish.spicy && <span className="spicy-tag">🌶️ Spicy</span>}
          </p>
          <p className="dish-price">{dish.price} ETB</p>
        </div>
      </Link>
      <button type="button" className="add-btn" onClick={handleAdd}>
        + Add to order
      </button>
    </article>
  );
}

export default DishCard;
