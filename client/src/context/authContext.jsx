import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const getAuthHeaders = (token) => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hydrateUser = async () => {
      const storedUser = localStorage.getItem('user');

      if (!storedUser) {
        setLoading(false);
        return;
      }

      try {
        const parsedUser = JSON.parse(storedUser);

        if (!parsedUser?.token) {
          localStorage.removeItem('user');
          setLoading(false);
          return;
        }

        const res = await fetch('/api/auth/me', {
          headers: getAuthHeaders(parsedUser.token),
        });

        if (!res.ok) {
          localStorage.removeItem('user');
          setUser(null);
          setLoading(false);
          return;
        }

        const profile = await res.json();
        const normalizedUser = {
          ...profile,
          token: parsedUser.token,
        };

        localStorage.setItem('user', JSON.stringify(normalizedUser));
        setUser(normalizedUser);
      } catch {
        localStorage.removeItem('user');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    hydrateUser();
  }, []);

  const register = async (userData) => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Registration failed');

      localStorage.setItem('user', JSON.stringify(data));
      setUser(data);
      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const login = async (email, password) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');

      localStorage.setItem('user', JSON.stringify(data));
      setUser(data);
      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
