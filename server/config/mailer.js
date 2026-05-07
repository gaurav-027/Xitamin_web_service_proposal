const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT) || 587,
  secure: Number(process.env.MAIL_PORT) === 465,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Verify connection on startup
transporter.verify((error) => {
  if (error) {
    console.error('❌ Mailer config error:', error);
  } else {
    console.log('✅ Mailer ready');
  }
});

module.exports = transporter;