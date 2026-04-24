const express = require('express');
const router = express.Router();

const controller = require('../controllers/rewardsController');

router.get('/', controller.getRewards);
router.get('/:id', controller.getRewardById);

module.exports = router;