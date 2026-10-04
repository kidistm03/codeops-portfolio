"use client";

export default function ErrorPage({ reset }) {
  return (
    <main>
      <h1>Something went wrong</h1>

      <p>We could not load the menu.</p>

      <button onClick={() => reset()}>
        Try Again
      </button>
    </main>
  );
}