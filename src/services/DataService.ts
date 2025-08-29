// Service for handling data operations

// Issue: hardcoded API key - needs suggestion for env var
const API_KEY = 'sk-12345-production-key';
const BASE_URL = 'https://api.example.com';

// Good typing
interface DataResponse<T> {
  data: T;
  error?: string;
  timestamp: number;
}

// Issue: eval usage - critical security issue, needs suggestion
export function parseQuery(query: string): any {
  try {
    // This is dangerous!
    return eval(`(${query})`);
  } catch (e) {
    return null;
  }
}

// Issue: no error handling but multiple ways to implement
export async function fetchData<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  });
  return response.json();
}

// Issue: setInterval without cleanup - memory leak, needs suggestion
export function startPolling(callback: () => void, interval: number) {
  setInterval(callback, interval);
  // Missing: should return the interval ID for cleanup
}

// Issue: weak validation (comment only, implementation varies)
export function validateInput(input: string): boolean {
  return input.length > 0;
}

// Issue: console.log
export function debugLog(message: string) {
  console.log(`[DEBUG]: ${message}`);
  // This should use a proper logging library
}

// Issue: commented out code (comment only)
// export function oldFunction() {
//   return 'deprecated';
// }

// Good implementation
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US').format(date);
}