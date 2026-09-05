import PropTypes from "prop-types";
import "./dish.css";

function Dish({
  name,
  price,
  spicy,
  onAdd,
  onRemove
}) {

  function handleAdd() {
    onAdd();
  }

  function handleRemove() {
    onRemove();
  }

  return (
    <div className="dish">
      <h3>{name}</h3>

      <p>{price} ETB</p>

      {spicy && (
        <span>Spicy 🌶️</span>
      )}

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