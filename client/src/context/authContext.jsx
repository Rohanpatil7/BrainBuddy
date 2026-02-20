import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

const getApiUrl = (path) => `${API_BASE_URL}${path}`;

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

        const res = await fetch(getApiUrl('/api/auth/me'), {
          headers: getAuthHeaders(parsedUser.token),
        });

        if (!res.ok) {
          // Only clear saved auth when the token is actually invalid.
          // For temporary backend/network issues, keep the local session.
          if (res.status === 401 || res.status === 403) {
            localStorage.removeItem('user');
            setUser(null);
          } else {
            setUser(parsedUser);
          }
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
        // Keep existing local session if connectivity check fails.
        setUser(JSON.parse(storedUser));
      } finally {
        setLoading(false);
      }
    };

    hydrateUser();
  }, []);

  const register = async (userData) => {
    try {
      const res = await fetch(getApiUrl('/api/auth/register'), {
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
      const res = await fetch(getApiUrl('/api/auth/login'), {
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
