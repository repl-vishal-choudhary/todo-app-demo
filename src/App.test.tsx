import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todo app header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Todo App Demo/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders initial todos', () => {
  render(<App />);
  const learnReactTodo = screen.getByText(/Learn React/i);
  expect(learnReactTodo).toBeInTheDocument();
});