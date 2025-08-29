import React from 'react';
import { Todo } from '../types/Todo';
import TodoItem from './TodoItem';
import './TodoList.css';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="todo-list">
      {activeTodos.length > 0 && (
        <div className="todo-section">
          <h3>Active ({activeTodos.length})</h3>
          {activeTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
      
      {completedTodos.length > 0 && (
        <div className="todo-section">
          <h3>Completed ({completedTodos.length})</h3>
          {completedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}

      {todos.length === 0 && (
        <p className="empty-message">No todos yet. Add one above!</p>
      )}
    </div>
  );
};

export default TodoList;