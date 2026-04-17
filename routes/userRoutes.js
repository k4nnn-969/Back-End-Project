const express = require('express');
const router = express.Router();

const {
  createUser,
  getUserById,
  getAllUsers
} = require('../controllers/userController');

router.post('/users', createUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);

module.exports = router;