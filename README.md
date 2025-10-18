# 📝 Full-Stack Notes Manager

<!-- CORE STACK -->
<p>
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/Node.js-18.17.0-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-4.18.2-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/MongoDB-6.0.0-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
</p>

<!-- SUPPORTING LIBRARIES -->
<p>
  <img src="https://img.shields.io/badge/Mongoose-6.0.0-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose">
  <img src="https://img.shields.io/badge/Axios-1.5.0-000000?style=for-the-badge&logo=axios&logoColor=white" alt="Axios">
  <img src="https://img.shields.io/badge/React%20Context-API-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Context API">
  <img src="https://img.shields.io/badge/PropTypes-%E2%9C%93-brightgreen?style=for-the-badge&logo=react&logoColor=white" alt="PropTypes">
</p>

<!-- UI & TOOLING -->
<p>
  <img src="https://img.shields.io/badge/Bootstrap-5.3.0-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">
  <img src="https://img.shields.io/badge/React--Bootstrap-2.9.0-563D7C?style=for-the-badge&logo=react&logoColor=white" alt="React Bootstrap">
  <img src="https://img.shields.io/badge/Yarn-Workspaces-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn Workspaces">
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge&logo=license&logoColor=black" alt="MIT License">
</p>

A full-stack notes management application built with **React**, **Express**, **Node.js**, and **MongoDB** — organized as a monorepo using **Yarn Workspaces**.

It features clean architecture, standardized error handling, custom React hooks, and responsive styling with Bootstrap.

---

## 📁 Project Structure

```
├── backend
│   ├── controllers/       # CRUD logic for notes
│   ├── models/            # Mongoose Note model
│   ├── routes/            # Express routes
│   └── index.js           # Entry point
└── frontend
    ├── src/
    │   ├── features/notes/ # Note-related components, context, hooks
    │   ├── components/     # Shared UI elements
    │   ├── hooks/          # Global custom hooks
    │   ├── constants/      # API routes, limits, etc.
    │   └── index.js        # React entry point


```

```
fullstack-notes-manager/
├── backend
│   ├── config
│   │   └── apiConfig.js
│   ├── controllers
│   │   ├── createNote.js
│   │   ├── deleteNote.js
│   │   ├── getNotes.js
│   │   └── updateNote.js
│   ├── helpers
│   │   └── sendResponse.js
│   ├── index.js
│   ├── middleware
│   │   └── errorHandler.js
│   ├── models
│   │   └── Note.js
│   └── routes
│       └── notes.js
└── frontend
    ├── public
    │   └── index.html
    └── src
        ├── App.js
        ├── components
        │   ├── AppLoader.js
        │   ├── ErrorBoundary.js
        │   └── Spinner.js
        ├── constants
        │   ├── apiRoutes.js
        │   ├── index.js
        │   ├── limits.js
        │   ├── messages.js
        │   └── timeouts.js
        ├── features
        │   └── notes
        │       ├── components
        │       │   ├── AccessibilityAlertRegion.js
        │       │   ├── CharacterCounter.js
        │       │   ├── Note.js
        │       │   ├── NoteForm.js
        │       │   └── NoteList.js
        │       ├── context
        │       │   ├── NotesContext.js
        │       │   └── NotesProvider.js
        │       ├── hooks
        │       │   ├── index.js
        │       │   ├── useApiRequest.js
        │       │   ├── useNoteActions.js
        │       │   └── useNoteContent.js
        │       └── NotesApp.js
        ├── hooks
        │   ├── index.js
        │   └── useErrorHandler.js
        ├── index.js
        ├── providers
        │   └── AppProviders.js
        └── utils
            ├── apiConfig.js
            ├── errorHandler.js
            ├── parseError.js
            └── validateNoteContent.js
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
