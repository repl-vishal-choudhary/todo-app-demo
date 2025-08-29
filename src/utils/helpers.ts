// Utility helper functions

// Issue: magic numbers should be constants
export function calculateDiscount(price: number, quantity: number): number {
  if (quantity > 10) {
    return price * 0.9; // 10% discount
  }
  if (quantity > 5) {
    return price * 0.95; // 5% discount
  }
  return price;
}

// Good implementation
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Issue: console.log (comment only)
export function logError(error: Error) {
  console.error('Error occurred:', error);
  // Should integrate with error reporting service
}

// Issue: needs better typing
export function mergeObjects(obj1: any, obj2: any) {
  return { ...obj1, ...obj2 };
}

// Issue: inline complex logic needs explanation
export function complexCalculation(values: number[]): number {
  return values.reduce((acc, val, idx) => {
    const weight = 1 / (idx + 1);
    return acc + (val * weight * Math.log(val + 1));
  }, 0);
}

// Good implementation with proper types
export function filterByRole<T extends { role: string }>(
  items: T[],
  role: string
): T[] {
  return items.filter(item => item.role === role);
}