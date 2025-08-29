// Analytics helper utilities

// Issue: magic numbers (comment only - dev decides constants location)
export function categorizeTraffic(views: number): string {
  if (views > 100000) return 'viral';
  if (views > 10000) return 'high';
  if (views > 1000) return 'medium';
  return 'low';
}

// Issue: hardcoded strings (comment only - could be enum/constants/config)
export function getEventCategory(eventType: string): string {
  switch (eventType) {
    case 'click': return 'USER_INTERACTION';
    case 'view': return 'PAGE_VIEW';
    case 'error': return 'ERROR_EVENT';
    default: return 'OTHER';
  }
}

// Good implementation - no issues
export function calculateEngagementRate(
  interactions: number,
  views: number
): number {
  if (views === 0) return 0;
  return (interactions / views) * 100;
}

// Issue: any types (comment only - dev knows structure)
export function mergeAnalyticsData(data1: any, data2: any): any {
  return {
    ...data1,
    ...data2,
    merged: true,
    timestamp: Date.now()
  };
}

// Issue: console.error (comment only)
export function logAnalyticsError(error: Error): void {
  console.error('[Analytics Error]:', error);
  // Should send to error tracking service
}

// Issue: complex logic without explanation (comment only)
export function calculateWeightedScore(
  metrics: number[],
  weights: number[]
): number {
  return metrics.reduce((acc, metric, idx) => {
    const weight = weights[idx] || 1;
    return acc + (metric * weight * Math.log(metric + 1));
  }, 0);
}