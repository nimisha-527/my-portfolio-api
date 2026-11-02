# MongoDB Database Setup

This folder contains the MongoDB connection layer for the project. It is built with TypeScript and uses Mongoose plus MongoDB session storage for Express authentication.

## Folder structure

```bash
database/
├── mongodb/
│   ├── connection.ts         # MongoDB connection and session store setup
│   ├── index.ts              # Entry file that exports the database setup
│   ├── .env                  # Local environment variables
│   ├── package.json          # Database package scripts and dependencies
│   ├── tsconfig.json         # Minimal TypeScript config
│   ├── README.md             # Database documentation
│   └── .gitignore            # Ignored files for Git
```

## Brief explanation

- `connection.ts`: Establishes the MongoDB connection using Mongoose and creates the `MongoStore` for session persistence.
- `index.ts`: Exports or initializes the MongoDB setup for use by the backend application.
- `.env`: Stores environment values such as the database connection string.
- `package.json`: Defines the dependencies and scripts used to run the database layer.
- `tsconfig.json`: Provides the minimal TypeScript settings for working with the MongoDB template.

This structure keeps the database setup isolated and easy to plug into the backend app.

## Environment variables

Create or update the `.env` file in this folder with the following values:

```bash
DB_URL='mongodb://localhost:27017/webapp-kit'
```

- `DB_URL`: MongoDB connection string for the app.

## Run the database setup

```bash
npm run start
```

> This starts the MongoDB connection logic and initializes the session store used by the backend.
