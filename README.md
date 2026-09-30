# Media V2

A learning-focused React project for practicing Redux Toolkit, RTK Query, API data flows, and Tailwind styling.

## Current status

This project is actively using a mix of:

- Redux Toolkit slices with async thunks for users
- RTK Query for albums data
- Tailwind CSS for styling
- JSON Server as a local mock API
- React + Vite frontend setup

It is a practical example of comparing and using both classic RTK patterns and RTK Query in the same app.

## Learning focus

- Redux Toolkit store setup and reducer organization
- createAsyncThunk for user CRUD operations
- RTK Query for cached API requests and mutations
- loading/error state handling
- component-level UI composition with Tailwind

## Tech stack

- React 19
- Vite
- Redux Toolkit
- React Redux
- RTK Query
- Axios
- JSON Server
- Tailwind CSS v4
- Faker.js

## Features

- fetch users from a local JSON API
- add users through a Redux thunk
- remove users through a Redux thunk
- fetch, add, and remove albums using RTK Query
- loading and error states in the UI
- reusable UI building blocks and Tailwind-based layout

## Project structure

```bash
src/
  components/
  hooks/
  store/
    apis/
    slices/
    thunks/
  App.jsx
  main.jsx
  index.css

db.json
package.json
vite.config.js
```

## Scripts

```bash
npm install
npm run start:server
npm run dev
npm run build
npm run lint
```

## Running locally

1. Install dependencies:

```bash
npm install
```

2. Start the mock backend:

```bash
npm run start:server
```

3. Start the frontend in another terminal:

```bash
npm run dev
```

The app currently expects the JSON Server API at `http://localhost:3005`.

## Important note for deployment

This project is currently set up for local development, not production deployment.

Because the app calls `localhost:3005` directly in the API logic, it will not work correctly on Vercel or other static hosting providers unless the backend is moved to a hosted service or the API URLs are changed to environment variables.

## Learning goals

- understand Redux Toolkit fundamentals
- compare thunk-based state handling with RTK Query
- manage async API patterns cleanly
- style a React app quickly with Tailwind
- connect frontend state to a mock backend

## License

This project is intended for learning and experimentation.
