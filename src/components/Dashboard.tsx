import React, { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

// Good typing here
export const Dashboard: React.FC<{ userId: string }> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);
  const [stats, setStats] = useState<any>(null); // Issue: any type when structure is obvious
  const [loading, setLoading] = useState(true);
  
  // Issue: console.log (should be comment only)
  console.log('Dashboard mounted');
  
  // Issue: missing dependency array item
  useEffect(() => {
    loadUserData();
    loadStats();
  }, [userId]);
  
  // Issue: function recreated on every render - needs useCallback
  const loadUserData = async () => {
    try {
      const response = await fetch(`/api/users/${userId}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Failed to load user:', error);
    }
  };
  
  // Another function that needs useCallback
  const loadStats = async () => {
    const response = await fetch(`/api/stats/${userId}`);
    const data = await response.json();
    setStats(data);
    setLoading(false);
  };
  
  // Issue: hardcoded value that should be constant
  const refreshData = () => {
    if (stats?.count > 100) {
      alert('Too many items!');
    }
    loadUserData();
    loadStats();
  };
  
  // Issue: inline styles (comment only, multiple ways to fix)
  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h1>User Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="user-info">
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </div>
          <div className="stats">
            <p>Total Items: {stats?.count}</p>
            <p>Active: {stats?.active}</p>
          </div>
          <button onClick={refreshData}>Refresh</button>
        </>
      )}
    </div>
  );
};