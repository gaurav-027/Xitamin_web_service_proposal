const transporter = require('../config/mailer');
const dotenv = require('dotenv');
dotenv.config();

const sendNotification = async (leadData) => {
  const { fullName, email, phone, serviceRequirement, budget, projectType, message } = leadData;

  const mailOptions = {
    from: `"XITAMIN Website" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject: `🚀 New Service Request — ${serviceRequirement}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px; }
            .container { background: #fff; max-width: 600px; margin: auto; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #070c12, #0a1018); color: #00c8ff; padding: 30px; text-align: center; }
            .header h1 { font-size: 28px; letter-spacing: 4px; margin: 0; }
            .header p { color: #6b7a8d; margin: 6px 0 0; font-size: 13px; }
            .body { padding: 30px; }
            .badge { display: inline-block; background: #00c8ff; color: #030609; font-size: 12px; font-weight: bold; padding: 4px 12px; border-radius: 20px; margin-bottom: 20px; }
            .field { margin-bottom: 16px; border-bottom: 1px solid #eee; padding-bottom: 16px; }
            .field:last-child { border-bottom: none; }
            .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #999; margin-bottom: 4px; }
            .value { font-size: 15px; color: #222; font-weight: 500; }
            .footer { background: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #aaa; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>XITAMIN</h1>
              <p>New service request received via website</p>
            </div>
            <div class="body">
              <span class="badge">NEW LEAD</span>
              <div class="field">
                <div class="label">Full Name</div>
                <div class="value">${fullName}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Phone</div>
                <div class="value">${phone}</div>
              </div>
              <div class="field">
                <div class="label">Service Required</div>
                <div class="value">${serviceRequirement}</div>
              </div>
              ${budget ? `
              <div class="field">
                <div class="label">Budget</div>
                <div class="value">${budget}</div>
              </div>` : ''}
              ${projectType ? `
              <div class="field">
                <div class="label">Project Type</div>
                <div class="value">${projectType}</div>
              </div>` : ''}
              ${message ? `
              <div class="field">
                <div class="label">Message</div>
                <div class="value">${message}</div>
              </div>` : ''}
            </div>
            <div class="footer">
              Log in to your dashboard to view all leads · XITAMIN Agency
            </div>
          </div>
        </body>
      </html>
    `,
  };
  await transporter.sendMail(mailOptions);
};

module.exports = sendNotification;