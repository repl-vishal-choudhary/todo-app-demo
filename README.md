# Todo App Demo

A simple React TypeScript todo application created for testing Claude auto review GitHub workflow.

## Features

- Add new todos
- Mark todos as complete/incomplete
- Delete todos
- Separate active and completed todos sections
- Clean, responsive UI

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run linter
npm run lint
```

## Project Structure

```
todo-app-demo/
├── .github/
│   └── workflows/
│       └── claude-auto-review.yml  # Claude auto review workflow
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AddTodo.tsx           # Add todo form component
│   │   ├── TodoItem.tsx          # Individual todo item
│   │   └── TodoList.tsx          # Todo list container
│   ├── types/
│   │   └── Todo.ts               # TypeScript interfaces
│   ├── App.tsx                   # Main app component
│   └── index.tsx                 # Entry point
├── package.json
└── tsconfig.json
```

## GitHub Workflow

This project includes a Claude auto review workflow that:
- Automatically reviews PRs using Claude AI
- Adds inline comments on specific code lines
- Checks for code quality, security, and best practices
- Runs on PR open, synchronize, and ready for review events

### Setting up the workflow

1. Add your Anthropic API key as a GitHub secret: `ANTHROPIC_API_KEY`
2. The workflow will automatically run on new PRs
3. Claude will add inline review comments directly on the changed lines

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Claude will automatically review your PR and provide feedback!

## License

MIT# Test
