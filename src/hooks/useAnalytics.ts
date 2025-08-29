import { useState, useEffect, useMemo } from 'react';

interface AnalyticsHookReturn {
  trackPage: (page: string) => void;
  trackEvent: (name: string, value?: number) => void;
  metrics: any; // Issue: any type (comment only)
}

export function useAnalytics(userId: string): AnalyticsHookReturn {
  const [metrics, setMetrics] = useState<any>(null);
  
  // Issue: missing dependency (needs suggestion - obvious what's missing)
  useEffect(() => {
    loadUserMetrics();
  }, []); // Missing userId dependency
  
  // Issue: function recreated on render (needs suggestion - obvious useCallback)
  const loadUserMetrics = async () => {
    const response = await fetch(`/api/metrics/${userId}`);
    const data = await response.json();
    setMetrics(data);
  };
  
  // Issue: function recreated on render (needs suggestion - obvious useCallback)
  const trackPage = (page: string) => {
    // Issue: console.log (comment only)
    console.log(`Page view: ${page}`);
    fetch('/api/track/page', {
      method: 'POST',
      body: JSON.stringify({ page, userId })
    });
  };
  
  const trackEvent = (name: string, value?: number) => {
    fetch('/api/track/event', {
      method: 'POST', 
      body: JSON.stringify({ name, value, userId })
    });
  };
  
  // Issue: missing dependencies in useMemo (needs suggestion - obvious)
  const summary = useMemo(() => {
    if (!metrics) return null;
    return {
      total: metrics.pageViews + metrics.events,
      average: metrics.totalDuration / metrics.sessions
    };
  }, []); // Missing metrics dependency
  
  return {
    trackPage,
    trackEvent,
    metrics
  };
}