export async function loadDishes(category, signal) {
  let url = "/dishes.json";

  if (category !== "All") {
    url += `?category=${category}`;
  }

  const response = await fetch(url, {
    signal
  });

  if (!response.ok) {
    throw new Error("Failed to load dishes");
  }

  const data = await response.json();

  if (category === "All") {
    return data;
  }

  return data.filter(
    (dish) => dish.category === category
  );
}