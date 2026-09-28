# Media V2

A learning-focused React project built to practice modern state management and UI styling patterns.

This project is intentionally focused on understanding:

- Redux Toolkit (RTK)
- async thunks for API interactions
- Redux state organization
- Tailwind CSS for fast UI styling
- React + Vite app setup
- working with a mock backend using JSON Server

## Project purpose

This app is a small CRUD-style project for managing users. It demonstrates how to fetch, add, and remove records from a fake API while keeping the app state centralized in Redux.

It is a good reference project for learning how Redux Toolkit simplifies common state-management patterns compared to traditional Redux.

## Tech stack

- React 19
- Vite
- Redux Toolkit
- React Redux
- JSON Server
- Tailwind CSS v4
- Axios
- Faker.js for generating sample data

## Features

- fetch users from a local JSON server
- add a new user
- remove an existing user
- loading and error states managed in Redux
- responsive UI built with Tailwind classes
- reusable UI components for buttons, panels, list items, and skeleton loading states

## Project structure

```bash
src/
  components/
  hooks/
  store/
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
npm run dev
npm run start:server
npm run build
npm run lint
```

## Running the app

1. Install dependencies:

```bash
npm install
```

2. Start the mock backend:

```bash
npm run start:server
```

3. Start the frontend dev server in another terminal:

```bash
npm run dev
```

The app uses a local JSON Server instance running on port 3005 and the frontend runs through Vite.

## Notes

This project is mainly a Redux Toolkit learning project. The current implementation uses createSlice and createAsyncThunk patterns. It also serves as a foundation for exploring RTK Query concepts in future iterations.

## Learning goals

- understand Redux Toolkit setup and store configuration
- manage async data fetching with thunks
- structure Redux slices cleanly
- use Tailwind CSS efficiently in component-based UI
- connect frontend state to a local API

## License

This project is intended for learning and experimentation.
