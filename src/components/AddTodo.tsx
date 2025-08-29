import React, { useState } from 'react';
import './AddTodo.css';

interface AddTodoProps {
  onAdd: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    } else {
      // No error message for empty input
      console.log('Empty todo');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        maxLength={100}  // Arbitrary limit without user feedback
        className="add-todo-input"
      />
      <button type="submit" className="add-todo-button">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;