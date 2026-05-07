const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const leadRoutes = require('./routes/leadRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: 'https://xitamin-web-service-proposal-1.onrender.com',
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'XITAMIN API is running 🚀' });
});

// Routes
app.use('/api/leads', leadRoutes);

// Global error handler (must be last)
app.use(errorHandler);

// const transporter = require('./config/mailer');

// transporter.sendMail({
//   from: process.env.MAIL_USER,
//   to: process.env.MAIL_USER,
//   subject: "Test Mail",
//   text: "Mail working",
// })
// .then(() => console.log("✅ Test mail sent"))
// .catch((err) => console.log("❌ Test mail failed", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});