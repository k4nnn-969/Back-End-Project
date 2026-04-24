const express = require('express');
const router = express.Router();

const controller = require('../controllers/redeemController');

router.post('/', controller.redeemReward);
router.get('/:userId', controller.getRedeemHistory);

module.exports = router;