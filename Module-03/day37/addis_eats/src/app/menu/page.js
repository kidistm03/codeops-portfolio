import { Suspense } from "react";
import DishList from "./components/DishList";
import CategoryBar from "./components/CategoryBar";

export const revalidate = 3600;

export default function MenuPage() {
  return (
    <main>
      <h1>Addis Eats Menu</h1>

      <CategoryBar />

      <Suspense fallback={<p>Loading dishes...</p>}>
        <DishList />
      </Suspense>
    </main>
  );
}