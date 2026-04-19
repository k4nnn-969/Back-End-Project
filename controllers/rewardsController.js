const { users } = require('./userController');
const transaction = require('./transactionController');

// 🔥 Data reward
const rewards = [
  { id: 1, name: "Voucher 10k", cost: 100 },
  { id: 2, name: "Voucher 50k", cost: 500 },
  { id: 3, name: "Pulsa 20k", cost: 200 }
];

// 🔥 GET all rewards
exports.getRewards = (req, res) => {
  res.json(rewards);
};

// 🔥 REDEEM pakai rewardId (bukan cost lagi)
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

  // 🔥 potong points sesuai reward
  user.points -= reward.cost;

  // 🔥 masuk ke transaction
  transaction.addTransaction(userId, "redeem", reward.cost);

  res.json({
    message: `Berhasil redeem ${reward.name}`,
    sisaPoints: user.points
  });
};