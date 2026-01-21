# AGENTS.md - Eye Spy Project

## Build/Lint/Test Commands

### General Commands (Root Directory)
```bash
npm install              # Install dependencies for both client and server
npm start                # Start production server (server.js)
npm run develop          # Start both client (npm start) and server (npm run watch) concurrently
npm run build            # Build client for production
npm run seed             # Seed database via server seeds script
```

### Client-Side Commands (client/)
```bash
npm run test             # Run all Jest tests (watch mode by default)
npm run test -- --watchAll=false  # Run tests once without watch mode
npm run test -- --testPathPattern=path/to/test  # Run specific test file
npm run test -- --coverage  # Generate test coverage report
npm run build            # Build for production using react-scripts
npm run start            # Start React dev server (default: localhost:3000)
npm run dev              # Start webpack dev server (alternative to react-scripts)
npm run serve            # Build and serve production build
```

### Server-Side Commands (server/)
```bash
npm run watch            # Run server with nodemon for auto-restart on file changes
npm run seed             # Seed database with initial data
node server.js           # Start server directly (default: PORT 3001 or process.env.PORT)
```

## Code Style Guidelines

### Imports
- **Client**: Use ES6 import/export syntax (import/export)
- **Server**: Use CommonJS (require/module.exports)
- Import React and React hooks at the top of component files
- Organize imports: external libraries, internal modules, local imports, then styles
- Use relative paths for internal modules (e.g., `./components/Header`)
- Include Bootstrap CSS import at top level for styling

### Formatting
- Use 2-space indentation for JavaScript/JSON/JSX
- No trailing spaces
- Unix line endings (\n)
- Keep lines under 80 characters when possible
- **Client**: Use double quotes for strings and JSX attributes
- **Server**: Use single quotes for strings

### Naming Conventions
- Use camelCase for variable and function names
- Use PascalCase for React components
- Use UPPER_SNAKE_CASE for environment variables/constants
- Use descriptive names (avoid single letter variables except in loops)
- File naming varies: client components use index.js in folders (e.g., `Header/index.js`), server uses descriptive names (e.g., `user-controller.js`, `User.js`)

### Types
- Currently using JavaScript (no TypeScript in project)
- Use JSDoc comments for complex functions where helpful
- Prefer const/let over var
- Server uses Mongoose schemas with strict typing for database models

### Error Handling
- Use async/await with proper error handling
- Validate input parameters before processing
- Use AuthenticationError from apollo-server-express for auth issues
- Return appropriate HTTP status codes in Express responses
- Handle GraphQL errors in Apollo Client queries/mutations

### Component Structure
- React functional components with hooks (no class components)
- Components exported as default and placed in folder with index.js
- Keep components small and focused on single responsibility
- Extract reusable logic into custom hooks
- Use proper JSX syntax with self-closing tags for empty elements

### Testing
- Client uses Jest + React Testing Library (via react-scripts)
- Server currently has no test framework configured
- Run tests with `npm run test` (watch mode enabled by default)
- Use `--testPathPattern` for running specific test files
- Mock external dependencies (Apollo Client, API calls)
- Aim for meaningful test coverage of critical paths

### GraphQL
- Define queries and mutations in separate files (queries.js, mutations.js)
- Export GraphQL operations using `gql` tagged template literal from @apollo/client
- Follow GraphQL naming conventions (camelCase for fields, PascalCase for types)
- Use fragments for reusable field selections where appropriate
- Handle loading, error, and data states from useQuery/useMutation hooks

### Server-Side Patterns
- Express + Apollo Server for GraphQL API
- Mongoose ODM for MongoDB models
- Use middleware for authentication (auth.js, authMiddleware)
- Define Mongoose schemas with virtuals for computed properties
- Use pre-save hooks for password hashing with bcrypt
- Implement resolvers with context for authenticated operations

### Code Organization
- Keep client/ and server/ code completely separate
- Client structure: src/pages/, src/components/, src/utils/
- Server structure: models/, routes/api/, controllers/, schemas/, utils/, config/
- Group related functionality in folders
- Use meaningful commit messages with conventional format: "feat:", "fix:", "docs:", "refactor:"

## Project Architecture

### Overview
Eye Spy is a full-stack application with React frontend and Express/GraphQL backend using MongoDB for data persistence. The app allows users to discover outdoor activities (hiking, camping, biking, etc.), save favorites, and leave comments.

### Key Technologies
- **Frontend**: React 18, React Router v6, Apollo Client, React Bootstrap
- **Backend**: Express, Apollo Server, GraphQL, Mongoose, bcrypt, JWT
- **Database**: MongoDB with Mongoose ODM

### Data Models
- **User**: Authentication, posts, likes/hates, favorites, comments, moderator flag
- **Post**: Outdoor activity listings with title, description, location, comments
- **Comment**: User comments on posts with timestamps
- **File**: File attachment model for posts

### Authentication Flow
- Uses JWT tokens stored in localStorage
- Context middleware checks token on GraphQL requests
- Passwords hashed with bcrypt (10 salt rounds) before saving

## Environment Configuration

### Required Environment Variables
Create a `.env` file in the server directory:
```
MONGODB_URI=mongodb://localhost:27017/eye-spy  # or MongoDB Atlas connection string
JWT_SECRET=your_secret_key_here
NODE_ENV=development  # or 'production'
PORT=3001  # Server port (optional, defaults to 3001)
```

### Database Connection
- Connection config in server/config/connection.js
- Supports both local MongoDB and Atlas connections
- Seeds available in server/seeds/seeds.js

## Cursor/Copilot Rules

No specific Cursor or Copilot rules are defined in this repository.
