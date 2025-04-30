# Team HealthSync – Full Stack Team Member Management System

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

Team HealthSync is a centralized platform to add, view, and manage team members. It allows users to enter details like name, roll number, degree, year, email, hobbies, and profile picture. Data is stored in MongoDB and fetched dynamically with real-time rendering.

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
Create a `.env` file in `/server` with:
```env
MONGO_URI=mongodb://localhost:27017/teamDB
PORT=5000
```
Then run:
```bash
node index.js
```

### 3. Setup the Client
```bash
cd ../client
npm install
npm start
```
Open your browser at: http://localhost:3000

---

📥 Optional: Import Sample Data
If you want to load original member data into MongoDB:

Ensure your .env file in /server has:

env
Copy
Edit
MONGO_URI=mongodb://localhost:27017/teamDB
Make sure this file exists:

pgsql
Copy
Edit
server/data/members.json
Run:

bash
Copy
Edit
cd server
npm run import-data
This script will:

Delete all existing members

Import members from members.json

Make sure your server/package.json includes:

json
Copy
Edit
"scripts": {
  "start": "node index.js",
  "import-data": "node importData.js"
}

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
  uploads/
  ```
- ✅ `.env` file is excluded from Git
- ✅ All files committed before deadline

---

## ▶️ How to Run the App

1. Open 2 terminal windows:
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
- Medha Srivastava
- Sanidhya Singh
- Kakarlapudi Meghana

---
