# 🧩 Full Stack Team Member Management System  
By Team HealthSync

A full-stack web application for managing student team member profiles. Built with React.js (frontend), Express.js (backend), and MongoDB (Compass or Atlas).

---

## 📁 Project Structure

```
Team-HealthSync/
├── client/     # React frontend
├── server/     # Express backend
├── .gitignore
├── README.md
```

---

## 🚀 Project Description

This is a centralized web application developed by Team HealthSync that allows users to efficiently add, view, and manage student team members. The platform supports input and display of essential member details such as:

Name, Roll Number, Degree, Year, Email

Hobbies and Profile Picture

Data is stored in MongoDB and dynamically fetched with real-time rendering, ensuring a seamless and interactive user experience.

Designed to simplify team organization and improve collaboration.

---

## ⚙️ Prerequisites

Before running the app, ensure the following are installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB Compass](https://www.mongodb.com/products/compass) **or** a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster
- npm (comes with Node.js)
- Git

---

## 🔧 Installation Steps

### 1. Clone the Repository
```bash
git clone https://github.com/khushicbilko/Team-HealthSync.git
cd Team-HealthSync
```

### 2. Setup the Server
```bash
cd server
npm install
```
Create a `.env` file in `/server` with either:

### For local MongoDB (Compass):
```env
MONGO_URI=mongodb://localhost:27017/your_database_name
PORT=5000
```

### Or for MongoDB Atlas:
```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/your_database_name?retryWrites=true&w=majority
PORT=5000
```
Then run server:
```bash
node index.js
```

### 3. Setup the Client
```bash
cd ../client
npm install
npm start
```
### 🧠 Important: Run the server and client in two separate VS Code terminals side-by-side.

Open your browser at: http://localhost:3000

---

## 🔌 API Endpoints (Server)

| Method | Route              | Description          |
|--------|--------------------|----------------------|
| GET    | `/api/members`     | Get all members      |
| POST   | `/api/members`     | Add a new member     |
| GET    | `/api/members/:id` | Get one member by ID |

---

## 📂 Files & Folder Submission Guidelines

- ✅ Repository is named after the team: `Team-HealthSync`
- ✅ Public repository
- ✅ Contains both `client/` and `server/` folders
- ✅ `.gitignore` includes:
  ```
  node_modules/
  .env
  ```
- ✅ `.env` file is excluded from Git
- ✅ All files committed before deadline

---

## ▶️ How to Run the App

1. Open two Vs Code terminal windows:
   - One for backend:
     ```bash
     cd server
     node index.js
     ```
   - One for frontend:
     ```bash
     cd client
     npm start
     ```
2. Open browser: [http://localhost:3000](http://localhost:3000)

---

## 👨‍💻 Contributors
- Medha Srivastava(/khushicbilko)
- Sanidhya Singh(/ssanidhya0407)
- Kakarlapudi Meghana(/Meghana1708)

---
