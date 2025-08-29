import { useState, useEffect } from 'react';

// Bad: any return type
export function useTimer(initialTime: number): any {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  
  // Bad: missing cleanup
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime(t => t - 1);
      }, 1000);
      // Missing: return () => clearInterval(interval);
    }
  }, [isRunning]);
  
  // Bad: console.log
  const startTimer = () => {
    console.log('Timer started');
    setIsRunning(true);
  };
  
  const stopTimer = () => {
    console.log('Timer stopped');
    setIsRunning(false);
  };
  
  // Bad: exposing internal state setters
  return {
    time,
    setTime,  // Should not expose this
    startTimer,
    stopTimer,
    isRunning
  };
}