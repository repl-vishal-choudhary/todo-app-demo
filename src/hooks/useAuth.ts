import { useState, useEffect } from 'react';

// Issue: any type for return
export const useAuth = (): any => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  
  // Issue: missing cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      checkAuthStatus();
    }, 5000);
    // No cleanup return
  }, []);
  
  // Issue: no error handling
  const checkAuthStatus = async () => {
    const response = await fetch('/api/auth/status');
    const data = await response.json();
    setIsAuthenticated(data.authenticated);
    setUser(data.user);
  };
  
  // Issue: console.log
  const login = (email: string, password: string) => {
    console.log('Logging in:', email);
    // Issue: hardcoded API endpoint
    return fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
  };
  
  return {
    isAuthenticated,
    user,
    login,
    // Issue: exposing internal state setter
    setUser
  };
};