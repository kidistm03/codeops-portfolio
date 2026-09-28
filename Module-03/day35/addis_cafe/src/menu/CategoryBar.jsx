import { useSearchParams } from "react-router-dom";
import "./CategoryBar.css";

const CATEGORIES = ["All", "Main", "Vegetarian", "Breakfast", "Side"];

/**
so the filter survives a refresh and can be shared.
 */
function CategoryBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selected = searchParams.get("category") || "All";

  function selectCategory(category) {
    if (category === "All") {
      // Remove the param for a clean URL
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  }

  return (
    <div className="category-bar" role="group" aria-label="Filter by category">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          type="button"
          className={selected === cat ? "cat-btn selected" : "cat-btn"}
          onClick={() => selectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;
