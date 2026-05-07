const { body } = require('express-validator');

const validateLead = [
  body('fullName')
    .trim()
    .notEmpty().withMessage('Full name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),

  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email')
    .normalizeEmail(),

  body('phone')
    .trim()
    .notEmpty().withMessage('Phone number is required')
    .matches(/^[+\d\s\-()]{7,20}$/).withMessage('Please provide a valid phone number'),

  body('serviceRequirement')
    .notEmpty().withMessage('Service requirement is required')
    .isIn([
      'Web Development',
      'Landing Page Development',
      'MERN Stack Application',
      'UI/UX Design',
      'Portfolio Website',
      'Website Optimization',
      'Custom Web Solution',
      'Other',
    ]).withMessage('Invalid service type selected'),

  body('budget')
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage('Budget field too long'),

  body('projectType')
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage('Project type field too long'),

  body('message')
    .optional()
    .trim()
    .isLength({ max: 1000 }).withMessage('Message cannot exceed 1000 characters'),
];

module.exports = { validateLead };