import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CategoryBar from "../menu/CategoryBar";
import DishCard from "../menu/DishCard";
import Spinner from "../ui/Spinner";
import ErrorMessage from "../ui/ErrorMessage";
import "./Menu.css";

/**
 fetches dishes, filters by category from the URL, and shows loading / empty / error states.
 */
function Menu() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "All";

  const { data, loading, error } = useFetch("/dishes.json");

  // Filter client-side so we only fetch once; category lives in the URL
  const dishes = data
    ? category === "All"
      ? data
      : data.filter((d) => d.category === category)
    : [];

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      <p className="menu-intro">
        Browse Ethiopian classics. Filter by category or open any dish for details.
      </p>

      <CategoryBar />

      {/* Loading state – never a blank screen */}
      {loading && <Spinner message="Loading dishes..." />}

      {/* Error state – useful message */}
      {error && (
        <ErrorMessage
          title="Could not load the menu"
          message={error}
        />
      )}

      {/* Empty state – friendly note, not an error */}
      {!loading && !error && dishes.length === 0 && (
        <div className="empty-state">
          <p>No dishes found in this category.</p>
          <p className="empty-hint">Try selecting a different filter.</p>
        </div>
      )}

      {/* Success – dish list */}
      {!loading && !error && dishes.length > 0 && (
        <div className="dish-grid">
          {dishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
