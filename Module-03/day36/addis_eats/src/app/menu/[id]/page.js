import Link from "next/link";
import { notFound } from "next/navigation";

export default async function DishPage({ params }) {
  const { id } = await params;

  const dishes = [
    { id: "1", name: "Doro Wot" },
    { id: "2", name: "Tibs" },
    { id: "3", name: "Kitfo" },
  ];

  const dish = dishes.find((dish) => dish.id === id);

  if (!dish) {
    notFound();
  }

  return (
    <main>
      <h1>{dish.name}</h1>

      <p>Dish ID: {dish.id}</p>

      <Link href="/menu">Back to Menu</Link>
    </main>
  );
}