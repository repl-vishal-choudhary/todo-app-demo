import { useState, useEffect } from 'react';

// Bad: missing dependencies in useEffect
export function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    // Bad: no cleanup for timeout
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
  }, [value]); // Missing delay dependency
  
  return debouncedValue;
}

// Bad: commented out code
// export function useOldDebounce(value: any) {
//   return value;
// }