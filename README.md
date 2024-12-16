# jira-integration

Creation of a Jira issue through a React application.
Using React + Vite, Node.js + Express, and Jira APIv3.

## Project setup

- Node version: v20.18.0
- NPM version: 10.8.2

```bash
cd server
npm install
npm start
cd ../client
npm install
npm run dev
```

## Environment variables

There are two .env files to create, one in the client folder and one in the server folder. You can follow the .env.example files.

## TODO

- [x] Create a Jira issue through a React application
- [x] Dynamically get the project key
- [x] Dynamically get the issue type
- [ ] Handle issuetype hierarchy
- [ ] Handle all fields
