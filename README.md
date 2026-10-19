# Media V2

Media V2 is a React + Redux learning app that demonstrates how to manage a real-world UI using both classic Redux Toolkit thunks and RTK Query. The app presents a small media dashboard where each user has an expandable section with albums and photos, allowing you to add, remove, and view data through a mock JSON Server backend.

This project is built as a practical example for understanding async state flows, cached API queries, and reusable component organization in a modern React app.

## App overview

The application includes:

- a user list loaded from a local mock database
- user creation and deletion using Redux Toolkit thunks
- album fetching, creation, and removal using RTK Query
- photo fetching, creation, and deletion using RTK Query
- loading and error handling across the app
- reusable, expandable UI panels with Tailwind styling
- a local backend for realistic CRUD operations

## Tech stack

- React 19
- Vite
- Redux Toolkit
- React Redux
- RTK Query
- JavaScript (React components)
- Tailwind CSS v4
- JSON Server
- Axios
- Faker.js
- React Icons

## What the app demonstrates

- Redux store configuration and slice setup
- `createAsyncThunk` for async user operations
- RTK Query API slices for cached CRUD workflows
- per-user album and photo relationships
- expanding panel-based UI composition
- frontend state synchronization with a mock API
- UI loading/error states for async data

## Features

### User management
- Display users from the local API
- Add a new user with a button click
- Remove an existing user from the list
- Show loading and error states during user requests

### Album management
- Fetch albums for each user
- Add a new album to a user
- Remove an album from the list
- Each album expands to reveal its photos

### Photo management
- Load photos for each album
- Add a random photo to an album
- Delete a photo from an album
- Responsive thumbnail grid with hover actions

### UX patterns
- Collapsible panels for nested data
- Skeleton loading placeholders while the app fetches async data
- Reusable button component with loading states
- Consistent layout and styling using Tailwind utility classes

## Project structure

```bash
media_v2/
├─ db.json
├─ index.html
├─ package.json
├─ public/
├─ src/
│  ├─ App.jsx
│  ├─ index.css
│  ├─ main.jsx
│  ├─ components/
│  │  ├─ AlbumsList.jsx
│  │  ├─ AlbumsListItem.jsx
│  │  ├─ Button.jsx
│  │  ├─ ExpandablePanel.jsx
│  │  ├─ Panel.jsx
│  │  ├─ PhotosList.jsx
│  │  ├─ PhotosListItem.jsx
│  │  ├─ Skeleton.jsx
│  │  ├─ UsersList.jsx
│  │  └─ UsersListItem.jsx
│  ├─ hooks/
│  │  └─ use-thunk.js
│  └─ store/
│     ├─ apis/
│     │  ├─ albumsApi.js
│     │  └─ photosApi.js
│     ├─ slices/
│     │  └─ usersSlice.js
│     ├─ thunks/
│     │  ├─ addUser.js
│     │  ├─ fetchUsers.js
│     │  └─ removeUser.js
│     └─ index.js
├─ vite.config.js
└─ README.md
```

## Data flow

The app combines two state-management patterns:

- User operations are handled with Redux Toolkit slices and thunks in `src/store/slices/usersSlice.js` and `src/store/thunks/`.
- Album and photo operations are handled with RTK Query endpoints in `src/store/apis/`.

This gives a clear side-by-side example of:

- direct Redux state updates for user records
- cached server state and invalidation for related album/photo data

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js 18+ or newer
- npm

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Start the mock API server in one terminal:

```bash
npm run start:server
```

The backend runs on:

```bash
http://localhost:3005
```

3. Start the Vite development server in another terminal:

```bash
npm run dev
```

The app is available at:

```bash
http://localhost:5173
```

4. Open the app in your browser and interact with the dashboard.

## Available scripts

```bash
npm run dev           # start the Vite frontend
npm run start:server  # run json-server with db.json on port 3005
npm run build         # build the production bundle
npm run lint          # run ESLint checks
npm run preview       # preview the production build locally
```

## Backend configuration

This project uses a local JSON Server instance to mimic a backend. The database lives in `db.json` and contains seeded users, albums, and photos.

Important note:

- the API base URL is currently configured as `http://localhost:3005`
- because the app is built for local development, it expects the mock API to run in the same environment
- for deployment, you would need to switch to a hosted backend or configure environment variables for the API base URL

## Validation

The app was checked locally with:

- `npm run build` ✅
- `npm run lint` ✅
- local dev server and mock API startup ✅

## Learning value

This project is intended for hands-on learning and experimentation with:

- Redux Toolkit architecture
- async thunk patterns
- RTK Query caching and invalidation
- nested component data relationships
- mock backend-driven UI workflows

## License

This project is intended for learning, practice, and experimentation. It is not production-ready infrastructure and is meant to demonstrate application patterns rather than serve as a deployed production setup.
