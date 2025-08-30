import React, { useState, useEffect } from 'react';

// Issue: any type instead of proper interface
const UserProfile = (props: any) => {
  // Issue: console.log in production
  console.log('UserProfile rendered', props);
  
  // Issue: useState without proper typing
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Issue: useEffect missing dependencies
  useEffect(() => {
    fetchUser();
  }, []);
  
  // Issue: no error handling
  const fetchUser = async () => {
    const response = await fetch(`/api/users/${props.userId}`);
    const data = await response.json();
    setUser(data);
    setLoading(false);
  };
  
  // Issue: hardcoded values
  const MAX_NAME_LENGTH = 50;
  
  // Issue: missing accessibility attributes
  if (loading) return <div>Loading...</div>;
  
  return (
    <div className="profile">
      <img src={user?.avatar} />
      <h2>{user?.name}</h2>
      {/* Issue: inline styles */}
      <p style={{color: 'gray', fontSize: '14px'}}>{user?.email}</p>
    </div>
  );
};

export default UserProfile;