# Contributing to Gourmet Haven

Thank you for your interest in contributing to Gourmet Haven! We appreciate your help in making this restaurant management system better.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Pull Request Process](#pull-request-process)
- [Style Guides](#style-guides)
- [Project Structure](#project-structure)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [your-email@example.com](mailto:your-email@example.com).

## How Can I Contribute?

### Reporting Bugs
- Ensure the bug was not already reported by searching on GitHub under Issues
- If you're unable to find an open issue addressing the problem, open a new one
- Be sure to include a title and clear description, as much relevant information as possible
- Provide steps to reproduce the issue

### Suggesting Enhancements
- Open a new issue with a clear title and detailed description
- Explain why this enhancement would be useful
- Provide examples if possible

### Pull Requests
- Fill in the required template
- Do not include issue numbers in the PR title
- Follow the style guides
- Update any documentation affected by your changes

## Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/gourmet-haven.git
   ```
3. Navigate to the project directory:
   ```bash
   cd gourmet-haven
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Set up environment variables (copy `.env.example` to `.env` and fill in values)
6. Start the development server:
   ```bash
   npm run dev
   ```

## Coding Standards

### TypeScript/React Best Practices
- Use TypeScript for all new code
- Follow functional component patterns with hooks
- Use React Context for global state management
- Write reusable components
- Use TypeScript interfaces for props and state
- Follow the principle of single responsibility for components

### Naming Conventions
- Use PascalCase for React components
- Use camelCase for functions, variables, and hooks
- Use UPPER_SNAKE_CASE for constants
- Use descriptive names that clearly indicate purpose

### File Organization
- Place components in the `src/components` directory
- Put context providers in `src/contexts`
- Store utility functions in `src/lib`
- Keep styles in `src/index.css` or component-specific CSS modules

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Increase the version numbers in any examples files and the README.md to the new version
3. Ensure all tests pass (when we add them)
4. Create the pull request with a clear description of changes
5. Wait for review and address feedback

## Style Guides

### Git Commit Messages
- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

### JavaScript/TypeScript Style Guide
- Use 2 spaces for indentation
- Use semicolons
- Use single quotes for strings
- Follow the airbnb JavaScript style guide with TypeScript adaptations
- All code should pass ESLint and TypeScript checks

### React Style Guide
- Use functional components and hooks
- Use React Context for global state management
- Avoid deeply nested components
- Use TypeScript interfaces for type safety
- Write reusable and modular components

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AdminDashboard.tsx
│   ├── AdminLogin.tsx
│   ├── CustomerMenu.tsx
│   ├── MenuManagement.tsx
│   └── TableBooking.tsx
├── contexts/            # React Context providers
│   └── AuthContext.tsx
├── lib/                 # Utility functions and clients
│   └── supabase.ts
├── types/               # TypeScript type definitions
├── hooks/               # Custom React hooks (to be added)
├── utils/               # Utility functions (to be added)
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## Testing

When we implement testing, please:
- Write unit tests for utility functions
- Write integration tests for components
- Aim for high test coverage
- Test both happy path and error scenarios

## Questions?

If you have any questions about contributing, feel free to reach out to [your-email@example.com](mailto:your-email@example.com) or open an issue with the "question" tag.