import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Addis Eats</h1>

          <nav>
            <Link href="/">Home</Link>{" "}
            <Link href="/menu">Menu</Link>{" "}
            <Link href="/cart">Cart</Link>{" "}
            <Link href="/checkout">Checkout</Link>
          </nav>
        </header>

        {children}

        <footer>
          <p>Addis Eats © 2026</p>
        </footer>
      </body>
    </html>
  );
}