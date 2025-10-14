
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Express](https://img.shields.io/badge/Express-4.18.2-grey?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0.0-4EA94B?logo=mongodb)](https://mongodb.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18.17.0-339933?logo=node.js)](https://nodejs.org/)
[![Yarn Workspaces](https://img.shields.io/badge/Yarn-Workspaces-2C8EBB?logo=yarn)](https://classic.yarnpkg.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

# 📝 Full Stack Notes Manager

<p align="center">
  <a href="https://github.com/BorisPlotnikov/fullstack-notes-manager/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/BorisPlotnikov/fullstack-notes-manager/ci.yml?branch=main" alt="Build Status" />
  </a>
  <a href="https://github.com/BorisPlotnikov/fullstack-notes-manager/issues">
    <img src="https://img.shields.io/github/issues/BorisPlotnikov/fullstack-notes-manager" alt="Open Issues" />
  </a>
  <a href="https://github.com/BorisPlotnikov/fullstack-notes-manager/pulls">
    <img src="https://img.shields.io/github/issues-pr/BorisPlotnikov/fullstack-notes-manager" alt="Open PRs" />
  </a>
  <a href="https://github.com/BorisPlotnikov/fullstack-notes-manager/commits/main">
    <img src="https://img.shields.io/github/last-commit/BorisPlotnikov/fullstack-notes-manager" alt="Last Commit" />
  </a>
</p>


A full-stack notes management application built with **React**, **Express**, **Node.js**, and **MongoDB** — organized as a monorepo using **Yarn Workspaces**.

It features clean architecture, standardized error handling, custom React hooks, and responsive styling with Bootstrap.

![GitHub last commit](https://img.shields.io/github/last-commit/BorisPlotnikov/fullstack-notes-manager)
![GitHub license](https://img.shields.io/github/license/BorisPlotnikov/fullstack-notes-manager)

---

## 📁 Project Structure

```
fullstack-notes-manager/
├── frontend/   # React application
├── backend/    # Express API server
├── .gitignore
├── yarn.lock
├── README.md
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Yarn](https://classic.yarnpkg.com/) (v1.22+)
- [MongoDB](https://www.mongodb.com/) (local or remote)

### Installation

```bash
yarn install
```

### Run the Fullstack App

```bash
yarn dev
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000/api](http://localhost:5000/api)

> The frontend automatically proxies API calls to the backend.

---

## ⚙️ Environment Variables

### \`backend/.env\`

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/notes
JWT_SECRET=your-secret-key
```

### \`frontend/.env\`

```env
PORT=3000
REACT_APP_API_BASE_URL=http://localhost:5000/api
```

---

## 🧠 Tech Stack

### Backend

- **Node.js + Express**
- **MongoDB + Mongoose**
- **dotenv**, **create-http-error**
- Custom middleware: \`errorHandler\`
- Helper utilities: \`sendResponse\`, \`apiConfig\`
- RESTful routes: \`createNote\`, \`getNotes\`, \`updateNote\`, \`deleteNote\`

### Frontend

- **React (Functional Components + Hooks)**
- Custom hooks: \`useApiRequest\`, \`useNoteActions\`, \`useNoteContent\`, \`useErrorHandler\`
- Context: \`NotesContext\`, \`NotesProvider\`, \`AppProviders\`
- Axios + error handling abstraction
- Bootstrap for responsive UI
- Additional tools: \`pluralize\`, \`safeStringify\`, \`prop-types\`

---

## 🖼️ UI Components

- \`Note\`, \`NoteList\`, \`NoteForm\`
- \`CharacterCounter\`, \`Spinner\`, \`AppLoader\`
- \`AccessibilityAlertRegion\`
- \`ErrorBoundary\`

---

## 💻 Scripts

From the root:

| Command                         | Description                         |
|----------------------------------|-------------------------------------|
| \`yarn dev\`                     | Run both frontend & backend         |
| \`yarn lint\`                    | Run ESLint across the monorepo      |
| \`yarn build\`                   | Build both frontend and backend     |
| \`yarn workspace frontend start\` | Run frontend only                   |
| \`yarn workspace backend dev\`    | Run backend with nodemon            |

---

## 📦 Features

- Monorepo architecture with Yarn Workspaces
- Fully async/await-based backend
- REST API with Mongoose models
- Frontend state management with React Context
- Robust error handling on both ends
- Custom hooks for API and state logic
- Responsive and accessible UI
- Configurable via \`.env\` files
- Clean and modular code organization
- Barrel file imports for clarity

---

## 🧪 Testing

Tests can be added using:

- **Jest** or **React Testing Library** (frontend)
- **Supertest** or **Mocha/Chai** (backend)

_(Currently not included in this starter project)_

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE) © 2025 [Boris Plotnikov](https://github.com/BorisPlotnikov)

---

## 🤝 Contributing

Contributions, suggestions, and issues are welcome!  
Please open an issue or submit a PR.

---

## 🌐 Deployment

Deployment instructions can be added for services like:

- **Render**, **Heroku**, **Vercel**, or **Netlify**
- Dockerize both frontend and backend
- MongoDB Atlas for production DB

_(Not yet included in this version)_

---

## 📬 Contact

Have feedback or want to connect?

- GitHub: [@BorisPlotnikov](https://github.com/BorisPlotnikov)
- Issues: [Open an issue](https://github.com/BorisPlotnikov/fullstack-notes-manager/issues)

---

## 🧹 Todo / Improvements

- [ ] Add unit and integration tests
- [ ] Add CI workflow (GitHub Actions)
- [ ] Add Docker support
- [ ] Improve accessibility
- [ ] Optimize performance for large note sets
