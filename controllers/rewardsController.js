const { users } = require('./userController');
const transaction = require('./transactionController');

const rewards = [
  { id: 1, name: "Voucher 10k", cost: 100 },
  { id: 2, name: "Voucher 50k", cost: 500 },
];

exports.getRewards = (req, res) => {
  res.json(rewards);
};

exports.redeemReward = (req, res) => {
  const userId = parseInt(req.body.userId);
  const rewardId = parseInt(req.body.rewardId);

  const user = users.find(u => u.id === userId);
  const reward = rewards.find(r => r.id === rewardId);

  if (!user) {
    return res.status(404).json({
      message: "User tidak ditemukan"
    });
  }

  if (!reward) {
    return res.status(404).json({
      message: "Reward tidak ditemukan"
    });
  }

  if (user.points < reward.cost) {
    return res.json({
      message: "Points tidak cukup"
    });
  }

  user.points -= reward.cost;

  transaction.addTransaction(userId, "redeem", reward.cost);

  res.json({
    message: `Berhasil redeem ${reward.name}`,
    sisaPoints: user.points
  });
};