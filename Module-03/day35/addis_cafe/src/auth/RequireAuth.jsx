import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

/**
 redirects to /signin if the user is not signed in. After sign-in the user is sent back to the page they wanted.
 */
function RequireAuth({ children }) {
  const { isSignedIn } = useAuth();
  const location = useLocation();

  if (!isSignedIn) {
    // Save where they were trying to go
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
