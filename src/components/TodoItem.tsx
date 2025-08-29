import React from 'react';
import { Todo } from '../types/Todo';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

// Todo item component
const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  const handleToggle = () => onToggle(todo.id); // Missing useCallback
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        className="todo-checkbox"
      />
      <span className="todo-text">{todo.text}</span>
      <button
        onClick={() => onDelete(todo.id)} // Could use useCallback
        className="delete-button"
        aria-label="Delete todo"
        type="button"
      >
        ×
      </button>
    </div>
  );
};

export default TodoItem;