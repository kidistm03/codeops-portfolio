import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../cart/CartContext";
import { useAuth } from "../../auth/AuthContext";
import "./Header.css";

function Header() {
  const { itemCount } = useCart();
  const { isSignedIn, user, signOut } = useAuth();

  return (
    <header className="header">
      <div className="header-top">
        <Link to="/" className="logo">
          <span className="logo-icon"></span>
          <span className="logo-text">Addis Eats</span>
        </Link>

        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Home
          </NavLink>
          <NavLink to="/menu" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Menu
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Cart
            {itemCount > 0 && <span className="badge">{itemCount}</span>}
          </NavLink>
          <NavLink to="/checkout" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Checkout
          </NavLink>
        </nav>

        <div className="header-auth">
          {isSignedIn ? (
            <>
              <span className="user-name">Hi, {user.name}</span>
              <button type="button" className="auth-btn" onClick={signOut}>
                Sign out
              </button>
            </>
          ) : (
            <Link to="/signin" className="auth-btn">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
