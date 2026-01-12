# Full-Stack Task Management Dashboard

A scalable full-stack web application built using React, Node.js, Express, and MongoDB.
The app includes JWT-based authentication, a protected dashboard, and CRUD operations
on user-specific tasks.

## 🚀 Features

### Authentication

- User registration and login
- JWT-based authentication
- Protected routes
- Secure password hashing with bcrypt

### Dashboard

- User-specific task management
- Create, view, and delete tasks
- Search and filter tasks
- Logout functionality

## 🛠 Tech Stack

### Frontend

- React (Vite)
- Tailwind CSS
- Axios
- React Router DOM

### Backend

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- bcrypt

## 📁 Project Structure

frontend-backend-app/
├── frontend/ (React + Tailwind)
├── backend/ (Node.js + Express + MongoDB)
└── README.md

## ⚙️ Setup Instructions

### Backend Setup

````bash
cd backend
npm install
npm run dev

### Frontend Setup
cd frontend
npm install
npm run dev


👉 **Why**:
So the reviewer can run it **without asking you questions**.

---

## 6️⃣ API Endpoints / API Docs

```md
## 🔗 API Endpoints

### Authentication
- POST `/api/auth/register`
- POST `/api/auth/login`

### Tasks (Protected)
- GET `/api/tasks`
- POST `/api/tasks`
- DELETE `/api/tasks/:id`

Authorization Header:
Bearer <JWT_TOKEN>
````
