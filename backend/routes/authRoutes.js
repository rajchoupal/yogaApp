const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route to handle user registration
router.post('/register', authController.registerUser);

// Route to handle user login
router.post('/login', authController.loginUser);

module.exports = router;