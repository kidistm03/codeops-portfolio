import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "./SignIn.css";

function SignIn() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Where to send the user after sign-in
  const from = location.state?.from?.pathname || "/";

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    signIn(name);
    navigate(from, { replace: true });
  }

  return (
    <div className="signin-page">
      <h1>Sign in</h1>
      <p className="signin-intro">
        Sign in to place an order. Just enter your name – no password needed for
        this demo.
      </p>

      <form className="signin-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="signin-name">Your name</label>
          <input
            id="signin-name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
            placeholder="e.g. Abebe"
            autoFocus
          />
          {error && <span className="field-error">{error}</span>}
        </div>

        <button type="submit" className="signin-btn">
          Sign in
        </button>
      </form>

      <p className="signin-back">
        <Link to="/">← Back to home</Link>
      </p>
    </div>
  );
}

export default SignIn;
