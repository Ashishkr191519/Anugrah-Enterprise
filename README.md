# Anugrah Enterprise

A full-stack MERN web application for **Anugrah Enterprise**, a company focused on water conservation, rainwater harvesting, borewell recharge, and civil construction services.

The platform allows visitors to explore services, create an account, request services, and manage their requests. An admin dashboard provides tools to manage services and customer requests.

## 🌐 Live Website

- **Frontend:** https://anugrah-enterprise-we97.vercel.app/
- **Backend API:** https://anugrah-enterprise.vercel.app/

## ✨ Features

### User Features
- Modern responsive landing page
- Browse available services
- User registration and login
- Email verification
- Secure authentication with HTTP-only cookies
- Forgot/reset password flow
- Request a service
- View submitted service requests
- Track request status
- Logout functionality

### Admin Features
- Secure admin login
- Admin dashboard
- View customer service requests
- Update request status
- Create services
- Edit services
- Delete services
- Manage the company's service catalogue

### Services
The website currently focuses on:
- Rainwater Harvesting
- Borewell Recharge
- Water Conservation
- Civil Construction

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Router
- Redux / Redux Toolkit
- Axios
- Tailwind CSS
- React Hook Form

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cookie Parser
- Nodemailer
- Gmail OAuth2
- Express Validator
- Helmet
- Express Rate Limit
- CORS

### Deployment
- Vercel
- MongoDB Atlas

## 📁 Project Structure

```text
Anugrah-Entreprise/
│
├── backend/
│   ├── api/
│   │   └── index.js
│   ├── src/
│   │   ├── config/
│   │   ├── controller/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── services/
│   ├── .env
│   ├── package.json
│   ├── server.js
│   └── vercel.json
│
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
└── README.md
```

## 🔐 Environment Variables

### Backend

Create a `.env` file inside `backend/`:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173
BACKEND_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REFRESH_TOKEN=your_google_refresh_token
GOOGLE_USER=your_gmail_address

ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
```

### Frontend

Create a `.env` file inside `Frontend/`:

```env
VITE_API_URL=http://localhost:3000/api
```

For production:

```env
VITE_API_URL=https://anugrah-enterprise.vercel.app/api
```

> Never commit `.env` files or expose secrets such as database credentials, JWT secrets, OAuth client secrets, refresh tokens, or admin passwords.

## 🚀 Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/Ashishkhr191519/Anugrah-Enterprise.git
cd Anugrah-Entreprise
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create the backend `.env` file and add the required environment variables.

Start the backend:

```bash
npm run dev
```

The API will run locally on:

```text
http://localhost:3000
```

### 3. Setup Frontend

Open another terminal:

```bash
cd Frontend
npm install
```

Create:

```text
Frontend/.env
```

and add:

```env
VITE_API_URL=http://localhost:3000/api
```

Start the frontend:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

## 🔗 API Overview

### Authentication

```text
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
POST /api/auth/logout
GET  /api/auth/verify-email
POST /api/auth/forgot-password
POST /api/auth/reset-password
POST /api/auth/resend-verification
```

### Services

```text
GET  /api/service
```

### User Requests

```text
POST /api/request
GET  /api/my-request
```

### Admin

```text
POST   /api/admin/login
GET    /api/admin/dashboard
GET    /api/admin/requests
PATCH  /api/admin/requests/:id/status
POST   /api/admin/services/create
PUT    /api/admin/services/:id
DELETE /api/admin/services/:id
POST   /api/admin/logout
```

## 🔒 Security

The backend includes several security measures:

- JWT-based authentication
- HTTP-only authentication cookies
- Secure cookies in production
- CORS configuration
- Helmet security headers
- Authentication rate limiting
- Password hashing
- Environment-based secrets
- Protected admin routes

## 📬 Email System

The application uses **Nodemailer with Gmail OAuth2** for transactional emails such as:

- Email verification
- Password reset
- Verification resend

OAuth credentials and refresh tokens are stored only in environment variables.

## ☁️ Deployment

The application is deployed using Vercel.

### Frontend

```text
https://anugrah-enterprise-we97.vercel.app/
```

### Backend

```text
https://anugrah-enterprise.vercel.app/
```

The frontend communicates with the production API through:

```env
VITE_API_URL=https://anugrah-enterprise.vercel.app/api
```

The backend uses the deployed frontend URL through:

```env
CLIENT_URL=https://anugrah-enterprise-we97.vercel.app
```

## 🧑‍💻 Author

**Ashish Kumar**

B.Tech CSE | MERN Stack Developer

- GitHub: https://github.com/Ashishkhr191519

## 📄 License

This project is developed for Anugrah Enterprise.
