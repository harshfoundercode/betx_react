import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('betx_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    // Static login - no API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // For demo purposes, accept any username/password
        if (username && password) {
          const userData = {
            id: '1',
            username: username,
            name: username,
            email: `${username}@betx.com`,
            balance: 25000,
            isVIP: false
          };
          setUser(userData);
          localStorage.setItem('betx_user', JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const register = (username, password) => {
    // Static registration - no API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username && password) {
          const userData = {
            id: Date.now().toString(),
            username: username,
            name: username,
            email: `${username}@betx.com`,
            balance: 1000,
            isVIP: false
          };
          setUser(userData);
          localStorage.setItem('betx_user', JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error('Registration failed'));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('betx_user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};