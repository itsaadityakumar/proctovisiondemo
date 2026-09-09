import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getSession, setSession, clearSession } from '../services/authService';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getSession());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const s = getSession();
    if (s) setUser(s);
  }, []);

  const loginUser = useCallback((userData) => {
    setSession(userData);
    setUser(userData);
  }, []);

  const logoutUser = useCallback(() => {
    clearSession();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setLoading, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
