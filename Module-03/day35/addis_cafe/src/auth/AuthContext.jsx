import { createContext, useContext, useState, useMemo } from "react";

const AuthContext = createContext(null);

/**
 * Simple sign-in context.
   Here we just store a name so the checkout guard works.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function signIn(name) {
    setUser({ name: name.trim() });
  }

  function signOut() {
    setUser(null);
  }

  const value = useMemo(
    () => ({ user, isSignedIn: Boolean(user), signIn, signOut }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}

export default AuthProvider;
