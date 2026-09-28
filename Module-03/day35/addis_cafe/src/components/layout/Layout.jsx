import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ErrorBoundary from "../ErrorBoundary";
import "./Layout.css";

/**
 ErrorBoundary wraps the page content so a crash on one screen
 does not take down the header/footer.
 */
function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
