import { useEffect, useRef, useState } from "react";
import CategoryBar from "./CategoryBar/categorybar";
import Dish from "./Dish/dish";
import { loadDishes } from "../../../api";
import "./menu.css";

function Menu() {
  const [category, setCategory] = useState("All");

  const [dishes, setDishes] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [total, setTotal] = useState(0);

  const searchRef = useRef(null);

  const categories = [
    "All",
    "Main",
    "Vegetarian"
  ];

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchDishes() {
      try {
        setLoading(true);
        setError("");

        const data = await loadDishes(
          category,
          controller.signal
        );

        setDishes(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchDishes();

    return () => {
      controller.abort();
    };
  }, [category]);

  function addToOrder(price) {
    setTotal(total + price);
  }

  function removeFromOrder(price) {
    setTotal(total - price);
  }

  if (loading) {
    return <p className="status">Loading dishes...</p>;
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

      <h3>
        Order Total: {total} ETB
      </h3>

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
            onAdd={addToOrder}
            onRemove={removeFromOrder}
          />
        ))}

      </div>

    </section>
  );
}

export default Menu;