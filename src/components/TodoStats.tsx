import React from 'react';

// Bad: using any type
export const TodoStats = ({ todos }: any) => {
  // Bad: console.log left in code
  console.log('Rendering stats');
  
  // Bad: unnecessary re-render on every call
  const completed = todos.filter(t => t.completed).length;
  const pending = todos.filter(t => !t.completed).length;
  
  // Bad: hardcoded magic number
  const isHighLoad = todos.length > 10;
  
  // Bad: missing accessibility
  return (
    <div>
      <span>Completed: {completed}</span>
      <span>Pending: {pending}</span>
      {isHighLoad && <div style={{color: 'red'}}>Too many todos!</div>}
    </div>
  );
};