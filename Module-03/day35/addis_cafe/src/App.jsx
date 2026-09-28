import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import ErrorBoundary from "./components/ErrorBoundary";
import RequireAuth from "./auth/RequireAuth";
import Spinner from "./ui/Spinner";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import DishDetail from "./pages/DishDetail";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";

/**
 * Lazy-loaded routes  these files are only downloaded when the user navigates to them.
 */
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="menu/:id" element={<DishDetail />} />
          <Route path="signin" element={<SignIn />} />

          {/* Lazy-loaded cart */}
          <Route
            path="cart"
            element={
              <Suspense fallback={<Spinner message="Loading cart..." />}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path="checkout"
            element={
              <RequireAuth>
                <ErrorBoundary>
                  <Suspense fallback={<Spinner message="Loading checkout..." />}>
                    <Checkout />
                  </Suspense>
                </ErrorBoundary>
              </RequireAuth>
            }
          />

          {/* Catch-all  any unknown path */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
