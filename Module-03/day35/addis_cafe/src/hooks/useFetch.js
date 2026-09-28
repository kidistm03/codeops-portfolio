import { useEffect, useState } from "react";

/**
 Custom hook that fetches data with loading, error and cleanup. Used on the Menu and Dish pages.
 */
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Skip if no url
    if (!url) {
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to load data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        // Ignore abort errors (component unmounted)
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    }

    load();

    // Cleanup: cancel the request when the component unmounts
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
