import PropTypes from "prop-types";
import "./categorybar.css";

function CategoryBar({
  categories,
  selectedCategory,
  onSelect
}) {
  return (
    <div className="category-bar">

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={
            selectedCategory === category
              ? "selected"
              : ""
          }
        >
          {category}
        </button>
      ))}

    </div>
  );
}

CategoryBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default CategoryBar;