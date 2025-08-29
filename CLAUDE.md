# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm start

# Build for production
npm run build

# Run tests
npm test

# Run single test file
npm test -- TodoItem.test.tsx

# Run linting
npm run lint

# Fix linting issues automatically
npm run lint:fix
```

## Project Architecture

This is a React TypeScript todo application built with Create React App. The architecture follows a simple component-based pattern:

### Core Structure
- **App.tsx** (src/App.tsx:7): Main application component that manages global todo state using `useState<Todo[]>`
- **Todo Type** (src/types/Todo.ts:1): Single interface defining todo structure with `id`, `text`, and `completed` properties
- **Component Hierarchy**: App → AddTodo + TodoList → TodoItem

### State Management
- Global state is managed in App.tsx using React hooks
- State flows down via props, actions flow up via callback functions
- Todo operations: `addTodo`, `toggleTodo`, `deleteTodo` all defined in App.tsx

### Component Pattern
All components follow the same TypeScript functional component pattern:
- Explicit interface definitions for props
- CSS modules imported as separate files
- React.FC type annotation for type safety

### Test Setup
- Uses React Testing Library with Jest
- Test files follow `*.test.tsx` naming convention
- setupTests.ts configures testing environment

## GitHub Integration

This project has Claude auto-review configured via `.github/workflows/claude-auto-review.yml` that automatically reviews PRs using Claude AI with inline comments on code quality, security, performance, and React best practices.