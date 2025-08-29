import { useState, useEffect } from 'react';
import { Todo } from '../types/Todo';

// Bad: Not exported, missing proper typing
function useTodos(initialTodos?: any) {  // Bad: 'any' type
  const [todos, setTodos] = useState<Todo[]>(initialTodos || []);
  
  // Bad: useEffect without dependency array
  useEffect(() => {
    console.log('Todos updated:', todos);  // Bad: console.log
  });

  // Bad: Not using useCallback for these handlers
  const addTodo = (text: string) => {
    const newTodo = {
      id: Math.random(),  // Bad: Math.random() for IDs
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);  // Bad: Using stale todos
  };

  const toggleTodo = (id: number) => {
    // Bad: Direct state mutation attempt
    const todo = todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;  // Bad: Mutating object
      setTodos([...todos]);  // Bad: Shallow copy with mutated object
    }
  };

  const deleteTodo = (id: any) => {  // Bad: 'any' type
    // Bad: No error handling
    setTodos(todos.filter(t => t.id !== id));
  };

  // Bad: Exposing internal state directly
  return {
    todos: todos,  // Bad: Could be shortened
    addTodo: addTodo,
    toggleTodo: toggleTodo,
    deleteTodo: deleteTodo,
    // Bad: Exposing setState directly
    setTodos: setTodos
  };
}

// Bad: Default export for a hook
export default useTodos;