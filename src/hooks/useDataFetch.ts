import { useState, useEffect } from 'react';

// Issue: any in return type when interface would be better
export function useDataFetch(url: string): any {
  const [data, setData] = useState(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Issue: missing cleanup for ongoing fetch
  useEffect(() => {
    let mounted = true;
    
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        // Missing check if component is still mounted
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
    // Missing: return () => { mounted = false; }
  }, [url]);
  
  // Issue: recreated on every render, needs useCallback
  const refetch = () => {
    setLoading(true);
    setError(null);
    // Re-trigger the effect somehow
  };
  
  return { data, error, loading, refetch };
}

// Issue: missing dependency in useMemo
export function useProcessedData(rawData: any[]) {
  const processed = React.useMemo(() => {
    return rawData.map(item => ({
      ...item,
      processed: true,
      timestamp: Date.now()
    }));
  }, []); // Missing rawData dependency
  
  return processed;
}