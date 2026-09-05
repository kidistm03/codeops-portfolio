import {
  useContext,
  useMemo,
  useRef,
  useEffect,
  useState
} from "react";

import { CartContext } from "../../cart/CartProvider";
import useFetch from "../../hooks/useFetch";

import CategoryBar from "./CategoryBar/categorybar";
import Dish from "./Dish/dish";

import "./menu.css";

function Menu() {
  const [category, setCategory] = useState("All");

  const searchRef = useRef(null);

  const url =
    category === "All"
      ? "/dishes.json"
      : `/dishes.json?category=${category}`;

  const {
    data,
    loading,
    error
  } = useFetch(url);

  const { dispatch } = useContext(CartContext);

  const categories = [
    "All",
    "Main",
    "Vegetarian"
  ];

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  const dishes = useMemo(() => {
    if (category === "All") {
      return data;
    }

    return data.filter(
      (dish) => dish.category === category
    );
  }, [data, category]);

  function addToCart(dish) {
    dispatch({
      type: "ADD",
      payload: dish
    });
  }

  function removeFromCart(dish) {
    dispatch({
      type: "REMOVE",
      payload: dish.id
    });
  }

  if (loading) {
    return (
      <p className="status">
        Loading dishes...
      </p>
    );
  }

  if (error) {
    return (
      <p className="error">
        Error: {error}
      </p>
    );
  }

  return (
    <section className="menu">
      <h2>Our Menu</h2>

      <input
        ref={searchRef}
        type="text"
        placeholder="Search dishes..."
        className="search-input"
      />

      <CategoryBar
        categories={categories}
        selectedCategory={category}
        onSelect={setCategory}
      />

      {dishes.length === 0 && (
        <p>No dishes found.</p>
      )}

      <div className="dish-list">
        {dishes.map((dish) => (
          <Dish
            key={dish.id}
            name={dish.name}
            price={dish.price}
            spicy={dish.spicy}
            onAdd={() => addToCart(dish)}
            onRemove={() => removeFromCart(dish)}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;