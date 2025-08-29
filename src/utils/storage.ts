// Utility for localStorage operations
export const storage = {
  // Bad: No error handling
  saveTodos: (todos: any[]) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },
  
  // Bad: Returns undefined on error
  getTodos: () => {
    const data = localStorage.getItem('todos');
    return JSON.parse(data); // Bad: Will crash if data is null
  },
  
  // Bad: Hardcoded key
  clearAll: () => {
    localStorage.removeItem('todos');
    localStorage.removeItem('user'); // Bad: Clearing unrelated data
  }
};

// Bad: Global variable
let todoCount = 0;

// Bad: Duplicate function (similar to existing logic)
export function addTodoToList(list: any[], text: string) {
  todoCount++; // Bad: Mutating global state
  return [...list, { id: todoCount, text, completed: false }];
}