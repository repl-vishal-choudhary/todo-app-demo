import React, { useState, useEffect } from 'react';

interface AnalyticsData {
  pageViews: number;
  uniqueUsers: number;
  avgDuration: number;
}

export const Analytics: React.FC = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [filters, setFilters] = useState<any>({}); // Issue: any type (comment only - dev knows structure)
  const [loading, setLoading] = useState(true);
  
  // Issue: console.log (comment only)
  console.log('Analytics component mounted');
  
  // Issue: missing cleanup for interval (needs suggestion - memory leak)
  useEffect(() => {
    const interval = setInterval(() => {
      fetchAnalyticsData();
    }, 30000);
    // Missing: return () => clearInterval(interval);
  }, []);
  
  // Issue: function recreated on every render (needs suggestion - obvious useCallback case)
  const fetchAnalyticsData = async () => {
    try {
      const response = await fetch('/api/analytics');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    } finally {
      setLoading(false);
    }
  };
  
  // Issue: hardcoded API endpoint (comment only - could be config or env)
  const API_ENDPOINT = 'https://analytics.example.com/v1';
  
  // Issue: magic numbers (comment only - dev decides where to put them)
  const isHighTraffic = data && data.pageViews > 10000;
  const isGoodRetention = data && data.avgDuration > 300;
  
  // Issue: inline styles (comment only - multiple solutions)
  return (
    <div style={{ padding: '24px', background: '#ffffff' }}>
      <h2>Analytics Dashboard</h2>
      {loading ? (
        <p>Loading analytics...</p>
      ) : (
        <div>
          <p>Page Views: {data?.pageViews}</p>
          <p>Unique Users: {data?.uniqueUsers}</p>
          <p>Avg Duration: {data?.avgDuration}s</p>
          {isHighTraffic && <span className="badge">High Traffic</span>}
        </div>
      )}
    </div>
  );
};