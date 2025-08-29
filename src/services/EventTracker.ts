// Event tracking service

// Issue: hardcoded values (comment only - could be env/config/constants)
const TRACKING_ID = 'UA-123456789-1';
const API_SECRET = 'secret_key_12345';

interface TrackingEvent {
  name: string;
  category: string;
  value?: number;
}

// Issue: eval usage (needs suggestion - security issue with one fix)
export function parseEventExpression(expr: string): any {
  try {
    // Dangerous eval usage!
    return eval(`(${expr})`);
  } catch (e) {
    console.error('Failed to parse:', e);
    return null;
  }
}

// Issue: any parameter (comment only - dev knows types better)
export function trackEvent(event: any): void {
  // Issue: console.log (comment only)
  console.log('Tracking event:', event);
  
  // Send to analytics service
  fetch(`https://analytics.example.com/track`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_SECRET}`
    },
    body: JSON.stringify(event)
  });
}

// Issue: missing dependency in useEffect hook equivalent
export class EventListener {
  private callback: () => void;
  private interval: NodeJS.Timeout | null = null;
  
  constructor(callback: () => void) {
    this.callback = callback;
  }
  
  // Issue: no cleanup method (comment only - class design choice)
  start(intervalMs: number) {
    this.interval = setInterval(this.callback, intervalMs);
  }
  
  stop() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}

// Issue: commented out code (comment only)
// export function oldTrackingMethod(data: any) {
//   return fetch('/old-endpoint', { method: 'POST', body: data });
// }