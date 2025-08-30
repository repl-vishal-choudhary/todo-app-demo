import React, { useState, useEffect } from 'react';

// Bad: any type
export function TaskManager(props: any) {
  // Bad: console.log
  console.log('TaskManager rendering');
  
  // Bad: untyped state
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  
  // Bad: missing dependencies
  useEffect(() => {
    loadTasks();
  }, []);
  
  // Bad: no error handling
  async function loadTasks() {
    const response = await fetch('/api/tasks');
    const data = await response.json();
    setTasks(data);
  }
  
  // Bad: hardcoded number
  const maxTasks = 100;
  
  // Bad: eval usage - security issue
  function evaluateFilter(filterExpression: string) {
    return eval(filterExpression);
  }
  
  // Bad: missing alt text
  return (
    <div>
      <img src="/logo.png" />
      <h1>Task Manager</h1>
      {/* Bad: inline styles */}
      <div style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
        {tasks.map((task: any) => (
          <div key={task.id}>{task.name}</div>
        ))}
      </div>
    </div>
  );
}