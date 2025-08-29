// Notification service for managing alerts

// Issue: hardcoded config (comment only - could be env/config)
const WS_URL = 'ws://notifications.example.com';
const RETRY_DELAY = 5000;

// Issue: eval usage - security vulnerability (needs suggestion)
export function parseNotificationRule(rule: string): any {
  try {
    // This is extremely dangerous!
    return eval(rule);
  } catch (error) {
    return null;
  }
}

export class NotificationManager {
  private socket: WebSocket | null = null;
  private reconnectTimer: NodeJS.Timeout | null = null;
  
  // Issue: missing cleanup method for timer (needs suggestion for memory leak)
  connect() {
    this.socket = new WebSocket(WS_URL);
    
    this.socket.onerror = () => {
      // Issue: missing cleanup before reconnect
      this.reconnectTimer = setTimeout(() => {
        this.connect();
      }, RETRY_DELAY);
      // Should clear timer in disconnect method
    };
  }
  
  disconnect() {
    if (this.socket) {
      this.socket.close();
    }
    // Missing: if (this.reconnectTimer) clearTimeout(this.reconnectTimer);
  }
  
  // Issue: any parameter (comment only)
  sendNotification(data: any) {
    // Issue: console.log (comment only)
    console.log('Sending notification:', data);
    
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(data));
    }
  }
}

// Issue: magic numbers (comment only)
export function prioritizeNotifications(notifications: any[]): any[] {
  return notifications.sort((a, b) => {
    if (a.priority > 100) return -1;
    if (b.priority > 100) return 1;
    return b.timestamp - a.timestamp;
  });
}