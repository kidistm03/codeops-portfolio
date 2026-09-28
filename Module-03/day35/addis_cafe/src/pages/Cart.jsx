import { Link } from "react-router-dom";
import { useCart } from "../cart/CartContext";
import "./Cart.css";

function Cart() {
  const { items, total, dispatch } = useCart();

  function updateQty(id, quantity) {
    dispatch({ type: "UPDATE_QTY", payload: { id, quantity } });
  }

  function removeItem(id) {
    dispatch({ type: "REMOVE", payload: id });
  }

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <h1>Your order</h1>
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <Link to="/menu" className="cart-cta">
            Browse the menu →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your order</h1>

      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p className="cart-item-price">{item.price} ETB each</p>
            </div>

            <div className="cart-item-controls">
              <button
                type="button"
                className="qty-btn"
                onClick={() => updateQty(item.id, item.quantity - 1)}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="qty-value">{item.quantity}</span>
              <button
                type="button"
                className="qty-btn"
                onClick={() => updateQty(item.id, item.quantity + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>

            <p className="cart-item-subtotal">
              {item.price * item.quantity} ETB
            </p>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        <p className="cart-total">
          Total: <strong>{total} ETB</strong>
        </p>
        <Link to="/checkout" className="checkout-btn">
          Proceed to checkout →
        </Link>
      </div>
    </div>
  );
}

export default Cart;
