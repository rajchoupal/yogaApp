const jwt = require('jsonwebtoken');
const config = require('../config');

// Function to generate JWT token
exports.generateToken = (userId) => {
  return jwt.sign({ userId }, config.jwtSecret, { expiresIn: '1h' });
};

// Middleware function to authenticate JWT token
exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  jwt.verify(token, config.jwtSecret, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }
    req.user = user;
    next();
  });
};