import PropTypes from "prop-types";
import Card from "../../../Card/card";
import "./dish.css";

function Dish({ name, price, spicy, currency }) {
  return (
    <Card>
      <div className="dish">
        <h3>{name}</h3>

        <p>
          {price} {currency}
        </p>

        {spicy === true && (
          <span>Spicy 🌶️</span>
        )}
      </div>
    </Card>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  spicy: PropTypes.bool,
  currency: PropTypes.string
};

Dish.defaultProps = {
  currency: "ETB"
};

export default Dish;