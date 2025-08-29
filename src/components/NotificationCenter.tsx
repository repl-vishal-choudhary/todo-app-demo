import React, { useState, useEffect } from 'react';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  timestamp: Date;
}

export const NotificationCenter: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [settings, setSettings] = useState<any>({  // Issue: any type (comment only)
    soundEnabled: true,
    popupEnabled: false
  });
  
  // Issue: missing cleanup - memory leak (needs suggestion)
  useEffect(() => {
    const websocket = new WebSocket('ws://localhost:3000');
    websocket.onmessage = (event) => {
      const notification = JSON.parse(event.data);
      addNotification(notification);
    };
    // Missing: return () => websocket.close();
  }, []);
  
  // Issue: function recreated every render (needs suggestion)
  const addNotification = (notification: Notification) => {
    setNotifications(prev => [...prev, notification]);
    if (settings.soundEnabled) {
      playSound();
    }
  };
  
  // Issue: console.log (comment only)
  const playSound = () => {
    console.log('Playing notification sound');
    // Audio implementation here
  };
  
  // Issue: hardcoded limit (comment only - could be config)
  const MAX_NOTIFICATIONS = 50;
  
  const clearOldNotifications = () => {
    if (notifications.length > MAX_NOTIFICATIONS) {
      setNotifications(prev => prev.slice(-MAX_NOTIFICATIONS));
    }
  };
  
  // Issue: inline styles (comment only)
  return (
    <div style={{ position: 'fixed', top: 0, right: 0, width: '300px' }}>
      <h3>Notifications</h3>
      {notifications.map(notif => (
        <div key={notif.id} className={`notification-${notif.type}`}>
          <h4>{notif.title}</h4>
          <p>{notif.message}</p>
        </div>
      ))}
    </div>
  );
};