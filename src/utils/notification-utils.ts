// Utility functions for notifications

// Issue: hardcoded values (comment only)
const NOTIFICATION_TYPES = {
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success'
};

// Good implementation
export function formatNotificationTime(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  
  if (diff < 60000) return 'Just now';
  if (diff < 3600000) return `${Math.floor(diff / 60000)} minutes ago`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)} hours ago`;
  return date.toLocaleDateString();
}

// Issue: console.error (comment only)
export function logNotificationError(error: Error, context: string) {
  console.error(`[Notification Error - ${context}]:`, error);
  // Should send to error tracking service
}

// Issue: any types (comment only)
export function filterNotifications(
  notifications: any[],
  filter: any
): any[] {
  return notifications.filter(n => {
    if (filter.type && n.type !== filter.type) return false;
    if (filter.unread && n.read) return false;
    return true;
  });
}

// Issue: magic numbers (comment only)
export function getNotificationPriority(type: string): number {
  switch (type) {
    case 'error': return 100;
    case 'warning': return 75;
    case 'info': return 50;
    case 'success': return 25;
    default: return 0;
  }
}

// Issue: complex logic without documentation (comment only)
export function groupNotificationsByTime(notifications: any[]): any {
  return notifications.reduce((groups, notif) => {
    const hour = new Date(notif.timestamp).getHours();
    const key = hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening';
    groups[key] = groups[key] || [];
    groups[key].push(notif);
    return groups;
  }, {});
}