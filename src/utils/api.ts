// Bad: hardcoded API key
const API_KEY = 'sk-1234567890abcdef';

// Bad: no error handling
export async function fetchTodos() {
  const response = await fetch('/api/todos');
  return response.json();
}

// Bad: eval usage
export function parseFilter(filterString: string) {
  // Security vulnerability
  return eval(`(${filterString})`);
}

// Bad: no input validation
export function saveTodo(todo: any) {
  localStorage.setItem('todo', JSON.stringify(todo));
}