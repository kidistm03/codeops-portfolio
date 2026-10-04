import Link from "next/link";
import DishList from "./components/DishList";
import CategoryBar from "./components/CategoryBar";

export default function MenuPage() {
  return (
    <main>
      <h1>Addis Eats Menu</h1>

      <CategoryBar />

      <DishList />

      <br />

      <Link href="/">Home</Link>
      <br />
      <Link href="/cart">Go to Cart</Link>
    </main>
  );
}