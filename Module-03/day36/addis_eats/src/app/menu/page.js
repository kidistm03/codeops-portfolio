import Link from "next/link";

export default function MenuPage() {
  return (
    <main>
      <h1>Addis Eats Menu</h1>

      <p>Choose your favorite Ethiopian dish.</p>

      <Link href="/">Home</Link>
      <br />
      <Link href="/cart">Go to Cart</Link>
    </main>
  );
}