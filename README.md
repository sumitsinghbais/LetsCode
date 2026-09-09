````markdown
# 🚀 LetsCode

LetsCode is a full-stack online coding platform inspired by LeetCode. I built this project from scratch to understand and implement real-world full-stack development concepts such as authentication, authorization, database design, code execution, caching, rate limiting, third-party API integration, AI integration, and deployment.

## 🌐 Live Demo

**[LetsCode - Live Application](https://lets-code-i6vp.vercel.app/)**

## 📂 GitHub Repository

**[LetsCode - GitHub](https://github.com/sumitsinghbais/LetsCode)**

---

# ✨ Features

## 👤 User Authentication

- User registration
- User login and logout
- JWT-based authentication
- HTTP-only cookie-based authentication
- Password hashing using bcrypt
- Authentication middleware
- Role-based authorization
- Admin authentication
- Protected routes
- User profile deletion

## 🧩 Coding Problems

- Browse all coding problems
- View individual problems
- Filter problems by difficulty
- Filter problems by tags
- Track solved problems
- Create coding problems
- Update coding problems
- Delete coding problems
- Admin problem management

## 💻 Code Execution & Submission

- Run code against test cases
- Submit solutions
- Support for C++, Java and JavaScript
- Judge0 integration for code execution
- Submission status tracking
- Runtime tracking
- Memory usage tracking
- Test cases passed tracking
- Error handling
- Submission history

## 🤖 AI Coding Assistant

LetsCode includes an AI-powered coding assistant using the Google Gemini API.

Users can:

- Ask coding-related questions
- Get help understanding problems
- Get hints and explanations
- Discuss different approaches
- Get programming guidance

## 🎥 Solution Videos

- Upload solution videos
- Associate videos with coding problems
- Watch solution/editorial videos
- Cloudinary integration for video storage

## 👨‍💼 Admin Features

Administrators can:

- Create problems
- Update problems
- Delete problems
- Upload solution videos
- Manage coding problem content

Admin APIs are protected using role-based authorization.

## ⚡ Redis

Redis is used for:

- JWT token blocklisting after logout
- Submission rate limiting
- Temporary data management

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- Redux Toolkit
- React Redux
- React Router
- Axios
- React Hook Form
- Zod
- @hookform/resolvers
- Tailwind CSS
- DaisyUI
- Monaco Editor
- Lucide React

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Redis
- JSON Web Token (JWT)
- bcrypt
- cookie-parser
- CORS
- dotenv

## External Services

- MongoDB Atlas
- Redis
- Judge0
- Google Gemini API
- Cloudinary

## Deployment

- Vercel - Frontend
- Render - Backend
- MongoDB Atlas - Database

---

# 🏗️ System Architecture

```text
                         ┌─────────────────────┐
                         │       Browser       │
                         │   React Frontend    │
                         └──────────┬──────────┘
                                    │
                              HTTPS / REST API
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │       Render        │
                         │ Node.js + Express   │
                         └──────────┬──────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
       ┌─────────────┐       ┌─────────────┐       ┌─────────────┐
       │  MongoDB    │       │    Redis    │       │   Judge0    │
       │    Atlas    │       │             │       │ Code Engine │
       └─────────────┘       └─────────────┘       └─────────────┘
                                   
              ┌─────────────────────┼─────────────────────┐
              │                                           │
              ▼                                           ▼
       ┌─────────────┐                            ┌─────────────┐
       │   Gemini    │                            │ Cloudinary  │
       │     AI      │                            │   Videos    │
       └─────────────┘                            └─────────────┘
````

---

# 🔐 Authentication Flow

LetsCode uses JWT authentication with HTTP-only cookies.

```text
User
 │
 ▼
Register / Login
 │
 ▼
Validate Request
 │
 ▼
Hash / Verify Password
 │
 ▼
Generate JWT
 │
 ▼
Store JWT in HTTP-only Cookie
 │
 ▼
Protected API Request
 │
 ▼
Authentication Middleware
 │
 ├── Valid Token ──────► Continue
 │
 └── Invalid/Missing ──► 401 Unauthorized
```

### Logout Flow

```text
User Logout
     │
     ▼
JWT added to Redis blocklist
     │
     ▼
Cookie cleared
     │
     ▼
Future requests check Redis
     │
     ▼
Blocked token rejected
```

---

# 💻 Code Submission Flow

```text
User writes code
       │
       ▼
     Submit
       │
       ▼
Backend receives submission
       │
       ▼
Create submission record
       │
       ▼
Send code to Judge0
       │
       ▼
Poll execution result
       │
       ▼
Evaluate test cases
       │
       ▼
Update submission
       │
       ▼
Return result to frontend
```

---

# 🗄️ Database Models

MongoDB is used as the primary database.

Main models include:

```text
User
Problem
Submission
SolutionVideo
```

### User

Stores:

* First name
* Email
* Hashed password
* Role

### Problem

Stores:

* Title
* Description
* Difficulty
* Tags
* Visible test cases
* Starter code
* Reference solution
* Problem creator

### Submission

Stores:

* User
* Problem
* Submitted code
* Programming language
* Submission status
* Runtime
* Memory usage
* Test cases passed
* Error message
* Timestamps

### Solution Video

Stores information required to associate solution videos with coding problems.

---

# 📁 Project Structure

```text
LetsCode/
│
├── backend/
│   │
│   ├── src/
│   │   │
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── redis.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── solveDoubt.js
│   │   │   └── videoSection.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── userMiddleware.js
│   │   │   └── adminMiddleware.js
│   │   │
│   │   ├── models/
│   │   │   ├── user.js
│   │   │   ├── problem.js
│   │   │   ├── submission.js
│   │   │   └── solutionVideo.js
│   │   │
│   │   ├── routes/
│   │   │   ├── userAuth.js
│   │   │   ├── problemCreator.js
│   │   │   ├── submit.js
│   │   │   ├── aiChatting.js
│   │   │   └── videoCreator.js
│   │   │
│   │   ├── utils/
│   │   │   ├── problemUtility.js
│   │   │   └── validator.js
│   │   │
│   │   └── index.js
│   │
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── AdminDelete.jsx
│   │   │   ├── AdminPanel.jsx
│   │   │   ├── AdminUpload.jsx
│   │   │   ├── AdminVideo.jsx
│   │   │   ├── ChatAi.jsx
│   │   │   ├── Editorial.jsx
│   │   │   └── SubmissionHistory.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Admin.jsx
│   │   │   ├── Homepage.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── ProblemPage.jsx
│   │   │   └── Signup.jsx
│   │   │
│   │   ├── store/
│   │   │   └── store.js
│   │   │
│   │   ├── utils/
│   │   │   └── axiosClient.js
│   │   │
│   │   ├── App.jsx
│   │   ├── authSlice.js
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

---

# 🔌 API Endpoints

## Authentication

```text
POST   /user/register
POST   /user/login
POST   /user/logout
POST   /user/admin/register
GET    /user/check
DELETE /user/deleteProfile
```

## Problems

```text
POST   /problem/create
PUT    /problem/update/:id
DELETE /problem/delete/:id
GET    /problem/problemById/:id
GET    /problem/getAllProblem
GET    /problem/problemSolvedByUser
GET    /problem/submittedProblem/:pid
```

## Submissions

```text
POST   /submission/submit/:id
POST   /submission/run/:id
```

## AI

```text
POST   /ai/...
```

## Videos

```text
POST   /video/...
```

---

# ⚙️ Local Setup

## 1. Clone the Repository

```bash
git clone https://github.com/sumitsinghbais/LetsCode.git
cd LetsCode
```

## 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory.

```env
PORT=3000

DB_CONNECTION=your_mongodb_connection_string

JWT_KEY=your_jwt_secret

REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_PASS=your_redis_password

JUDGE0_KEY=your_judge0_api_key

GEMINI_API_KEY=your_gemini_api_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Use the exact environment variable names required by your backend configuration.

Start the backend:

```bash
node src/index.js
```

## 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
```

Create:

```text
frontend/.env
```

Add:

```env
VITE_API_URL=http://localhost:3000
```

Start the frontend:

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

---

# 🌍 Deployment

The project is deployed using separate frontend and backend services.

```text
Frontend  → Vercel
Backend   → Render
Database  → MongoDB Atlas
```

Production architecture:

```text
                         Vercel
                           │
                           │ HTTPS
                           ▼
                    Render Backend
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
      MongoDB            Redis            Judge0
       Atlas
                           
          ┌────────────────┼────────────────┐
          │                                 │
          ▼                                 ▼
       Gemini                          Cloudinary
```

The production frontend communicates with the backend using:

```env
VITE_API_URL=https://your-render-backend-url
```

---

# 🔒 Security

The project implements several security practices:

* Password hashing using bcrypt
* JWT authentication
* HTTP-only cookies
* Secure cookies in production
* Role-based authorization
* Protected API routes
* Redis JWT blocklisting
* Submission rate limiting
* Request validation
* CORS configuration
* Environment variables for sensitive credentials

Sensitive credentials are never stored directly in the repository.

---

# 📈 Future Improvements

Planned improvements include:

* Automated frontend testing
* Automated backend testing
* Better API error handling
* Pagination
* Search functionality
* User statistics dashboard
* Leaderboard
* More programming languages
* Background job/queue system for code execution
* WebSocket-based execution updates
* Docker containerization
* CI/CD pipeline
* Monitoring and logging
* Performance optimization
* Improved UI/UX
* More coding problems

---

# 📚 What I Learned

Building LetsCode gave me practical experience with:

* Full-stack application architecture
* REST API development
* Node.js and Express.js
* MongoDB and Mongoose
* JWT authentication
* Cookie-based authentication
* Password hashing
* Middleware
* Role-based authorization
* Redis
* Rate limiting
* React
* Redux Toolkit
* Form validation
* Monaco Editor
* Third-party API integration
* Online code execution
* AI API integration
* Cloudinary
* CORS
* Environment variables
* Production deployment
* Frontend-backend communication

---

# 🎯 Project Goal

The goal of LetsCode is not just to create a LeetCode clone, but to build a realistic full-stack application while understanding how different production technologies work together.

The project combines:

```text
React
   ↓
REST APIs
   ↓
Express.js
   ↓
Authentication & Authorization
   ↓
MongoDB + Redis
   ↓
Judge0 + Gemini + Cloudinary
```

Through this project, I focused on implementing real-world concepts such as authentication, protected resources, code execution, rate limiting, caching, third-party APIs, AI integration, and production deployment.

---

# 👨‍💻 Author

## Sumit Singh

Full-stack development project built from scratch as a personal learning and portfolio project.

🌐 **Live:** [https://lets-code-i6vp.vercel.app/](https://lets-code-i6vp.vercel.app/)

💻 **GitHub:** [https://github.com/sumitsinghbais/LetsCode](https://github.com/sumitsinghbais/LetsCode)

```
```
