

export async function fetchDishes(signal) {
  const response = await fetch("/dishes.json", { signal });

  if (!response.ok) {
    throw new Error("Could not load the menu. Please try again.");
  }

  return response.json();
}

export async function fetchDishById(id, signal) {
  const dishes = await fetchDishes(signal);
  const dish = dishes.find((d) => String(d.id) === String(id));

  if (!dish) {
    throw new Error("Dish not found.");
  }

  return dish;
}
