const express = require('express');
const router = express.Router();

const controller = require('../controllers/rewardsController');

router.get('/points/:userId', controller.getPointsByUserId);
router.get('/', controller.getAllRewards);
router.post('/redeem', controller.redeemReward);
router.get('/history/:userId', controller.getHistoryByUserId);
router.post('/earn', controller.addPoints);

module.exports = router;