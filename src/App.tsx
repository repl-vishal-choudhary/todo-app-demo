import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { Todo } from './types/Todo';

function App() {
  // Bad: Unnecessary useEffect that runs on every render
  useEffect(() => {
    document.title = 'Todo App';
  });
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Test Claude Auto Review', completed: false },
  ]);

  // Bad: Not using useCallback - will cause child re-renders
  const addTodo = (text: string) => {
    console.log('Adding todo:', text); // Bad: console.log in production
    const newTodo: Todo = {
      id: Date.now(), // Bad: Date.now() can have collisions
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: any) => { // Bad: using 'any' type
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App Demo</h1>
        <div onClick={() => window.location.reload()}>Refresh</div> {/* Bad: Direct DOM manipulation */}
        <p>A simple todo app for testing Claude auto review</p>
      </header>
      <main className="App-main">
        <AddTodo onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </main>
    </div>
  );
}

export default App;