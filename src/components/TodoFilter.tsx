import React from 'react';
import { Todo } from '../types/Todo';

interface TodoFilterProps {
  todos: any[];  // Bad: using 'any' type
  filter: string;
  onFilterChange: (filter: string) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ todos, filter, onFilterChange }) => {
  // Bad: Not using useCallback
  const handleFilterChange = (newFilter: string) => {
    console.log('Filter changed to:', newFilter);  // Bad: console.log in production
    onFilterChange(newFilter);
  };

  // Bad: Inefficient filtering - runs on every render
  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  // Bad: Direct DOM manipulation
  const clearCompleted = () => {
    document.querySelectorAll('.completed').forEach(el => el.remove());
    // Bad: Should update state instead
  };

  return (
    <div className="todo-filter">
      <div className="filter-stats">
        {/* Bad: Missing accessibility attributes */}
        <span>{activeTodos.length} active</span>
        <span>{completedTodos.length} completed</span>
      </div>
      
      <div className="filter-buttons">
        {/* Bad: Hardcoded strings without constants */}
        <button 
          onClick={() => handleFilterChange('all')}
          className={filter === 'all' ? 'active' : ''}
        >
          All
        </button>
        <button 
          onClick={() => handleFilterChange('active')}
          className={filter === 'active' ? 'active' : ''}
        >
          Active
        </button>
        <button 
          onClick={() => handleFilterChange('completed')}
          className={filter === 'completed' ? 'active' : ''}
        >
          Completed
        </button>
        {/* Bad: Dangerous operation without confirmation */}
        <button onClick={clearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoFilter;