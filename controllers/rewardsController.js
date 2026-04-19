const service = require('./rewards-service');

exports.getPoints = async (req, res) => {
  const data = await service.getPoints(req.params.user_id);
  res.json(data);
};

exports.getRewards = async (req, res) => {
  const data = await service.getRewards();
  res.json(data);
};

exports.redeemReward = async (req, res) => {
  const data = await service.redeem(req.body);
  res.json(data);
};

exports.getHistory = async (req, res) => {
  const data = await service.getHistory(req.params.user_id);
  res.json(data);
};

exports.earnPoints = async (req, res) => {
  const data = await service.earn(req.body);
  res.json(data);
};