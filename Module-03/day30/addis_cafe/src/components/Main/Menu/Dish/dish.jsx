import { useState } from "react";
import PropTypes from "prop-types";
import "./dish.css";

function Dish({ name, price, spicy, onAdd, onRemove }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
    onAdd(price);
  }

  function handleRemove() {
    if (count > 0) {
      setCount(count - 1);
      onRemove(price);
    }
  }

  return (
    <div className="dish">

      <h3>{name}</h3>

      <p>{price} ETB</p>

      {spicy && (
        <span>Spicy 🌶️</span>
      )}

      <p>Quantity: {count}</p>

      <div className="quantity-buttons">
        <button onClick={handleAdd}>
          Add
        </button>
        <button onClick={handleRemove}>
          −
        </button>

        <button onClick={handleAdd}>
          +
        </button>

      </div>

    </div>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  spicy: PropTypes.bool,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default Dish;