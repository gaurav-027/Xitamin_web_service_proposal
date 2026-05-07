const express = require('express');
const router = express.Router();
const { submitLead, getAllLeads } = require('../controllers/leadController');
const { validateLead } = require('../middleware/validate');

// POST /api/leads — Submit a new lead
router.post('/', validateLead, submitLead);

// GET /api/leads — Get all leads (admin)
router.get('/', getAllLeads);

module.exports = router;