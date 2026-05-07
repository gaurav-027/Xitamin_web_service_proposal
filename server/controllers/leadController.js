const { validationResult } = require('express-validator');
const Lead = require('../models/Lead');
const sendNotification = require('../utils/sendNotification');

// @desc    Submit new lead / service request
// @route   POST /api/leads
// @access  Public
const submitLead = async (req, res, next) => {
  try {
    // Validation errors from express-validator middleware
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
      });
    }

    const { fullName, email, phone, serviceRequirement, budget, projectType, message } = req.body;

    // Save lead to MongoDB
    const lead = await Lead.create({
      fullName,
      email,
      phone,
      serviceRequirement,
      budget: budget || '',
      projectType: projectType || '',
      message: message || '',
    });

    // Send admin notification email (non-blocking — don't fail if email fails)
    try {
      await sendNotification(lead);
    } catch (mailError) {
      console.error('⚠️  Notification email failed:', mailError);
      // Lead is already saved — just log the mail error, don't throw
    }

    console.log("ok3");

    res.status(201).json({
      success: true,
      message: 'Your request has been received! We will contact you shortly.',
      data: { id: lead._id },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all leads (admin use)
// @route   GET /api/leads
// @access  Private (protect with auth middleware in production)
const getAllLeads = async (req, res, next) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: leads.length,
      data: leads,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { submitLead, getAllLeads };