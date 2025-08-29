// Bad: hardcoded API key
const API_KEY = 'sk-prod-12345-secret-key';

// Bad: hardcoded URL
const API_BASE = 'http://localhost:3000/api';

// Bad: any parameters
export async function makeRequest(endpoint: any, options: any) {
  // Bad: no validation
  return fetch(API_BASE + endpoint, {
    ...options,
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      ...options?.headers
    }
  });
}

// Bad: no error handling
export async function getUser(id: string) {
  const response = await makeRequest(`/users/${id}`, { method: 'GET' });
  return response.json();
}

// Bad: commented code
// export function oldFunction() {
//   return 'deprecated';
// }

// Bad: weak password validation
export function validatePassword(password: string) {
  return password.length > 3;
}