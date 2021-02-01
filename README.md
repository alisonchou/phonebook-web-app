# Phonebook App - FullPages
A phonebook web app where users can create, update, delete,
and filter contacts. Live at
[fullpages.herokuapp.com](https://fullpages.herokuapp.com/).

To replace a contact's number, create a new contact with the
same name and select `OK` on the alert that pops up.

## ⚙ Technologies
- Backend: Node.js - Express
  - Mongoose to connect to MongoDB
  - Morgan to log requests
  - Mongoose Unique Validator to prevent duplicate names
  - Dotenv to hide MongoDB URI
- Frontend: React
  - Axios to send HTTP requests to backend
- Database: MongoDB
- Deployed with Heroku

## 🚀 Getting started
Clone the repository and run `npm install` in `phonebook-web-app`
and `phonebook-web-app/react-ui`.

Copy the contents of `.env.template` into an `.env` file.
Create a cluster and a database user in
[MongoDB Atlas](https://www.mongodb.com/cloud/atlas). Then,
connect your application and set the value of `MONGODB_URI`
in `.env` to the connection string.

Inside the configured `phonebook-web-app` project, you can
run some commands:

### `npm start`
Runs server with REST API endpoints and production build.

### `npm run dev`
Has same functionality as `npm start`, in addition to
automatic updates with changes to code.

### `npm run build:ui`
Creates or updates production build and copies the
static files into the backend.

### `npm run deploy`
Deploys the project to Heroku.

### `npm run deploy:full`
Creates build, commits to GitHub, and deploys project.

### `npm run logs:prod`
Shows Heroku logs.

### `npm run lint`
Runs ESLint.
