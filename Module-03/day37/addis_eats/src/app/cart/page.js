"use client";

import { useState } from "react";
import Link from "next/link";

export default function CartPage() {
  const [itemCount, setItemCount] = useState(0);

  return (
    <main>
      <h1>Your Cart</h1>

      <p>Items in cart: {itemCount}</p>

      <button onClick={() => setItemCount(itemCount + 1)}>
        Add Item
      </button>

      <br />
      <br />

      <Link href="/menu">Back to Menu</Link>
      <br />
      <Link href="/checkout">Go to Checkout</Link>
    </main>
  );
}