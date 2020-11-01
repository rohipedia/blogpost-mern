const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

router.post('/api/users', userController.createUser);
router.get('/api/users', userController.getUsers);

module.exports = router;