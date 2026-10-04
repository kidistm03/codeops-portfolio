import Link from "next/link";

export default function DishList() {
  const dishes = [
    { id: "1", name: "Doro Wot" },
    { id: "2", name: "Tibs" },
    { id: "3", name: "Kitfo" },
  ];

  return (
    <div>
      {dishes.map((dish) => (
        <div key={dish.id}>
          <h2>{dish.name}</h2>

          <Link href={`/menu/${dish.id}`}>
            View Dish
          </Link>
        </div>
      ))}
    </div>
  );
}