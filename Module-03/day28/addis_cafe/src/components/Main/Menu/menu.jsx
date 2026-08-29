import { useState } from "react";
import dishes from "../../../data";
import CategoryBar from "./CategoryBar/categorybar";
import Dish from "./Dish/dish";
import "./menu.css";

function Menu() {
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Main",
    "Vegetarian"
  ];

  const filteredDishes =
    category === "All"
      ? dishes
      : dishes.filter(
          (dish) => dish.category === category
        );

  return (
    <section className="menu">

      <h2>Our Menu</h2>

      <CategoryBar
        categories={categories}
        selectedCategory={category}
        onSelect={setCategory}
      />

      {filteredDishes.length === 0 && (
        <p>No dishes found.</p>
      )}

      <div className="dish-list">

        {filteredDishes.map((dish) => (
          <Dish
            key={dish.id}
            name={dish.name}
            price={dish.price}
            spicy={dish.spicy}
          />
        ))}

      </div>

    </section>
  );
}

export default Menu;