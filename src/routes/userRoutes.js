const express = require('express');
const { getUsers, createUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Define routes
router.get('/users', getUsers);
router.post('/users', authMiddleware, createUser);

module.exports = router;