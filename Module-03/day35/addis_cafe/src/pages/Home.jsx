import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "../ui/Spinner";
import ErrorMessage from "../ui/ErrorMessage";
import "./Home.css";

function Home() {
  const { data, loading, error } = useFetch("/dishes.json");

  // first 3 spicy dishes, or first 3 overall
  const specials = data
    ? (data.filter((d) => d.spicy).slice(0, 3).length >= 3
        ? data.filter((d) => d.spicy).slice(0, 3)
        : data.slice(0, 3))
    : [];

  return (
    <div className="home">
      <section className="hero">
        <h1>Authentic Ethiopian flavours</h1>
        <p className="hero-sub">
          Order your favourite dishes from Addis Ababa – fresh, spicy, and delivered
          with care.
        </p>
        <Link to="/menu" className="cta-btn">
          Browse the menu →
        </Link>
      </section>

      <section className="specials">
        <h2>Today&apos;s specials</h2>

        {loading && <Spinner message="Loading specials..." />}

        {error && (
          <ErrorMessage title="Could not load specials" message={error} />
        )}

        {!loading && !error && specials.length > 0 && (
          <div className="specials-grid">
            {specials.map((dish) => (
              <Link
                key={dish.id}
                to={`/menu/${dish.id}`}
                className="special-card"
              >
                <h3>{dish.name}</h3>
                <p className="special-price">{dish.price} ETB</p>
                {dish.spicy && <span className="special-spicy">🌶️ Spicy</span>}
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
