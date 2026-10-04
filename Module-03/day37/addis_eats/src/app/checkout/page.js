import Link from "next/link";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

// Checkout reads the user's session cookie,
// so this page should always be rendered dynamically.

export default async function CheckoutPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");

  return (
    <main>
      <h1>Checkout</h1>

      {session ? (
        <p>Your session is active.</p>
      ) : (
        <p>No session found.</p>
      )}

      <p>Complete your order here.</p>

      <Link href="/cart">Back to Cart</Link>
    </main>
  );
}