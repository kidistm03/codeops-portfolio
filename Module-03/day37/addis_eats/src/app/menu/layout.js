import Link from "next/link";

export default function MenuLayout({ children }) {
  return (
    <div className="menu">
      <aside>
        <h2>Categories</h2>

        <ul>
          <li>
            <Link href="/menu">All Dishes</Link>
          </li>

          <li>
            <Link href="/menu">Traditional Food</Link>
          </li>

          <li>
            <Link href="/menu">Tibs</Link>
          </li>

          <li>
            <Link href="/menu">Kitfo</Link>
          </li>
        </ul>
      </aside>

      <section>
        {children}
      </section>
    </div>
  );
}