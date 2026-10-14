# Media V2

A React + Redux learning project focused on comparing classic Redux Toolkit patterns with RTK Query in a real UI workflow.

## Overview

This app demonstrates how to build a small media dashboard with:

- a user list managed by Redux Toolkit slices and async thunks
- album data fetched and mutated through RTK Query
- photo data loaded through a second RTK Query API slice
- reusable UI components styled with Tailwind CSS
- a local JSON Server backend to mimic a real API

It is designed as a practical reference for understanding state management patterns, async data flow, and API caching in modern React apps.

## What this project teaches

- Redux Toolkit store setup and reducer organization
- `createAsyncThunk` for user CRUD workflows
- RTK Query for cached API calls and mutation patterns
- error and loading state handling in UI components
- reusable component composition with Tailwind styling
- data flow between a frontend app and a mock backend

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

- fetch and display users from a local mock API
- add a new user via a Redux thunk
- remove a user via a Redux thunk
- fetch albums for each user using RTK Query
- add and remove albums through RTK Query mutations
- fetch photos associated with albums
- show loading and error states throughout the interface
- reusable presentational components and layout patterns

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

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Start the local mock backend in one terminal:

```bash
npm run start:server
```

3. Start the Vite app in another terminal:

```bash
npm run dev
```

4. Open the app in your browser:

```bash
http://localhost:5173
```

The app expects the JSON Server API at `http://localhost:3005`.

## Available scripts

```bash
npm run dev
npm run start:server
npm run build
npm run lint
npm run preview
```

## Local development notes

This project is configured for local development and uses a mocked API rather than a production backend.

Because requests are hard-coded to `localhost:3005`, the app will not work correctly on static hosting platforms unless the API is replaced with a deployed backend or environment-based URLs are introduced.

## Learning goals

- understand the fundamentals of Redux Toolkit
- compare thunk-based state handling with RTK Query
- manage async API workflows cleanly
- style UI quickly with Tailwind CSS
- connect front-end state to a realistic mock API

## License

This project is intended for learning, experimentation, and practice.
