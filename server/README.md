# Server App

This folder contains the backend API for the project. It is built with Express, TypeScript, and session-based authentication support.

## Folder structure

```bash
server/
├── src/
│   └── index.ts              # Main Express server setup and routes
├── .env                      # Environment variables for session config and PORT
├── package.json              # Backend dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── README.md                 # Server documentation
└── .gitignore                # Ignored files for Git
```

## Brief explanation

- `src/index.ts`: Contains the Express app setup, session configuration, CORS handling, and API routes.
- `.env`: Stores local environment values such as port, and session secret.
- `package.json`: Defines the backend scripts and dependencies needed to run the server.

This structure keeps the backend clean and easy to extend as your app grows.

## Run the server

1. Open the server folder.
2. Run the following command to start the backend, dependencies will be installed automatically during initial setup:

```bash
npm run start
```

> This command launches the server in development mode.

## Environment variables

Create or update the `.env` file in the server folder with the following keys:

```bash
SESSION_SECRET='your-secret'
PORT='3000'
```

- `SESSION_SECRET`: Secret used for session encryption
- `PORT`: Port the server listens on
