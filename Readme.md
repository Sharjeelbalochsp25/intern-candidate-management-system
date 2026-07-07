# Intern Candidate Management System

## Overview

The Intern Candidate Management System is a RESTful backend API developed using **Node.js**, **Express.js**, and **MongoDB Atlas**. It allows users to manage intern candidate records by performing Create, Read, Update, and Delete (CRUD) operations.

This project was built as part of a backend internship assignment.

---

## Features

- Create a new candidate
- View all candidates
- View a candidate by ID
- Update candidate information
- Delete a candidate
- MongoDB Atlas database integration
- RESTful API architecture

---

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Nodemon
- Dotenv

---

## Project Structure

```
intern-candidate-management-system/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── candidateController.js
│
├── models/
│   └── Candidate.js
│
├── routes/
│   └── candidateRoutes.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Sharjeelbalochsp25/intern-candidate-management-system.git
```

### 2. Open the project folder

```bash
cd intern-candidate-management-system
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB Atlas connection string.

---

## Running the Project

Start the development server:

```bash
npm run dev
```

The server will start on:

```
http://localhost:5000
```

---

## API Endpoints

### Get API Status

```
GET /
```

Response:

```text
Intern Candidate Management System API is Running!
```

---

### Create Candidate

```
POST /api/candidates
```

Example Body:

```json
{
  "name": "Ali Khan",
  "email": "ali@example.com",
  "gender": "Male",
  "university": "Muhammad Ali Jinnah University",
  "degree": "BSCS",
  "interest": "Backend Development",
  "domain": "Node.js",
  "groupId": 80,
  "role": "Member"
}
```

---

### Get All Candidates

```
GET /api/candidates
```

---

### Get Candidate by ID

```
GET /api/candidates/:id
```

---

### Update Candidate

```
PUT /api/candidates/:id
```

Example Body:

```json
{
  "interest": "Backend Development",
  "domain": "Node.js",
  "role": "Leader"
}
```

---

### Delete Candidate

```
DELETE /api/candidates/:id
```

---

## Testing

The API can be tested using:

- Thunder Client
- Postman
- Insomnia

---

## Author

**Sharjeel**

Backend Internship Project

---