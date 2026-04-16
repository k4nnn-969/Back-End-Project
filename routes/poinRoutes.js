const express = require('express');
const router = express.Router();
const pointController = require('../controllers/pointController');

router.get('/:userId', pointController.getPointsByUserId);
router.post('/add', pointController.addPoints);

module.exports = router;