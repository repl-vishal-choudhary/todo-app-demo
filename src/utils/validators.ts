// Issue: no input validation
export function validateEmail(email: any) {
  // Issue: weak regex pattern
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Issue: using eval - security vulnerability
export function calculateExpression(expr: string) {
  try {
    return eval(expr);
  } catch (e) {
    return null;
  }
}

// Issue: hardcoded secret
const SECRET_KEY = 'my-super-secret-key-12345';

export function hashPassword(password: string) {
  // Issue: weak hashing
  return btoa(password + SECRET_KEY);
}

// Issue: no type safety
export function processData(data) {
  // Issue: mutation of input
  data.processed = true;
  data.timestamp = Date.now();
  return data;
}

// Issue: commented out code
// export function oldValidator(value: string) {
//   return value.length > 0;
// }