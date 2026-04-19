const express = require('express');
const router = express.Router();

const { redeemReward } = require('../controllers/redeemController');

router.post('/', redeemReward);

module.exports = router;