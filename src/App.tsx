import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { Todo } from './types/Todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Test Claude Auto Review', completed: false },
  ]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App Demo</h1>
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