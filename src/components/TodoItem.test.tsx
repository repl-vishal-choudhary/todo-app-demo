import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';
import { Todo } from '../types/Todo';

describe('TodoItem', () => {
  const mockTodo: Todo = {
    id: 1,
    text: 'Test todo',
    completed: false,
  };

  const mockOnToggle = jest.fn();
  const mockOnDelete = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders todo item with text', () => {
    render(
      <TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />
    );
    expect(screen.getByText('Test todo')).toBeInTheDocument();
  });

  test('calls onToggle when checkbox is clicked', () => {
    render(
      <TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />
    );
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnToggle).toHaveBeenCalledWith(1);
  });

  test('calls onDelete when delete button is clicked', () => {
    render(
      <TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />
    );
    const deleteButton = screen.getByLabelText('Delete todo');
    fireEvent.click(deleteButton);
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });

  test('applies completed class when todo is completed', () => {
    const completedTodo = { ...mockTodo, completed: true };
    const { container } = render(
      <TodoItem todo={completedTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />
    );
    expect(container.firstChild).toHaveClass('completed');
  });
});