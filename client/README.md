# XITAMIN — Premium Web Development Agency Website

A futuristic, fully animated single-page agency website built with React + Vite (frontend) and Node.js + Express + MongoDB (backend).

---

## 📁 Project Structure

```
xitamin/
├── client/    # React + Vite + Tailwind + GSAP frontend
└── server/    # Node.js + Express + MongoDB + Nodemailer backend
```

---

## 🚀 Quick Start

### 1. Clone & Install

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 2. Configure Environment Variables

**Server** — copy and fill in:
```bash
cd server
cp .env.example .env
```

Fill in `server/.env`:
```
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/xitamin
CLIENT_URL=http://localhost:5173
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=your@gmail.com
MAIL_PASS=your_gmail_app_password
ADMIN_EMAIL=admin@xitamin.com
```

> **Gmail App Password**: Go to Google Account → Security → 2-Step Verification → App Passwords → Generate one for "Mail".

**Client** — copy and fill in:
```bash
cd client
cp .env.example .env
```

Fill in `client/.env`:
```
VITE_API_URL=http://localhost:5000
```

### 3. Run Development Servers

Open **two terminals**:

```bash
# Terminal 1 — Backend
cd server
npm run dev

# Terminal 2 — Frontend
cd client
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

---

## 🌐 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/leads` | Submit a new service request |
| GET | `/api/leads` | Get all leads (admin) |

### POST `/api/leads` — Request Body

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "serviceRequirement": "Web Development",
  "budget": "₹10k – ₹20k",
  "projectType": "Business Website",
  "message": "Optional message here"
}
```

---

## 🏗️ Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18, Vite, Tailwind CSS, GSAP |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Email | Nodemailer |
| Validation | express-validator |

---

## ✨ Features

- 🎬 Cinematic loading screen
- 🖱️ Custom cursor with magnetic effect
- 📜 Scroll-triggered GSAP animations
- 🌟 Mouse-follow glow effects
- 📱 Fully responsive (mobile/tablet/desktop)
- 📋 Lead form saving to MongoDB
- 📧 Admin email notification on form submission
- 💰 Pricing section from your reference image
- 🔤 Giant interactive XITAMIN signature with parallax

---

## 🚢 Deployment

### Frontend (Vercel)
```bash
cd client
npm run build
# Deploy the dist/ folder to Vercel
# Set VITE_API_URL=https://your-api.com in Vercel env vars
```

### Backend (Railway / Render)
```bash
# Set all server/.env variables in your hosting dashboard
# Start command: node server.js
```

### MongoDB Atlas
1. Create free cluster at mongodb.com/atlas
2. Add your server's IP to Network Access
3. Copy connection string to MONGO_URI

---

## 📞 Customization

| File | What to change |
|------|----------------|
| `client/src/constants/services.js` | Service offerings |
| `client/src/constants/pricing.js` | Pricing plans & features |
| `client/src/constants/process.js` | Work process steps |
| `client/src/sections/Footer.jsx` | Contact info, social links |
| `client/src/sections/Hero.jsx` | Headline copy |
| `server/.env` | Email & DB credentials |