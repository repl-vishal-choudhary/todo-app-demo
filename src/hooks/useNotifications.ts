import { useState, useEffect, useCallback } from 'react';

interface NotificationOptions {
  duration?: number;
  persist?: boolean;
}

export function useNotifications(userId: string) {
  const [notifications, setNotifications] = useState<any[]>([]); // Issue: any type (comment only)
  const [isConnected, setIsConnected] = useState(false);
  
  // Issue: missing dependency (needs suggestion)
  useEffect(() => {
    connectToNotificationService();
  }, []); // Missing userId
  
  // Issue: function recreated (needs suggestion)
  const connectToNotificationService = async () => {
    try {
      const response = await fetch(`/api/notifications/connect/${userId}`);
      if (response.ok) {
        setIsConnected(true);
      }
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };
  
  // Good - already uses useCallback
  const showNotification = useCallback((message: string, options?: NotificationOptions) => {
    const notification = {
      id: Date.now().toString(),
      message,
      ...options
    };
    setNotifications(prev => [...prev, notification]);
    
    if (!options?.persist) {
      setTimeout(() => {
        dismissNotification(notification.id);
      }, options?.duration || 5000);
    }
  }, []);
  
  // Issue: function recreated (needs suggestion)
  const dismissNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };
  
  // Issue: missing dependencies in useEffect (needs suggestion)
  useEffect(() => {
    if (notifications.length > 10) {
      const oldest = notifications[0];
      dismissNotification(oldest.id);
    }
  }, [notifications]); // Missing dismissNotification
  
  return {
    notifications,
    showNotification,
    dismissNotification,
    isConnected
  };
}