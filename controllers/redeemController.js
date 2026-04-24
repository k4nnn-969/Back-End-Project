const User = require("../models/User");
const transaction = require("./transactionController");

const rewards = [
  { id: 1, name: "Voucher 10k", cost: 100 },
  { id: 2, name: "Voucher 50k", cost: 500 },
];

// 🔥 POST redeem
const redeemReward = async (req, res) => {
  try {
    const { userId, rewardId } = req.body;

    const user = await User.findById(userId);
    const reward = rewards.find(r => r.id === rewardId);

    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }

    if (!reward) {
      return res.status(404).json({ message: "Reward tidak ditemukan" });
    }

    if (user.points < reward.cost) {
      return res.json({ message: "Points tidak cukup" });
    }

    user.points -= reward.cost;
    await user.save();

    transaction.addTransaction(userId, "redeem", reward.cost);

    res.json({
      message: `Berhasil redeem ${reward.name}`,
      sisaPoints: user.points
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 🔥 GET history redeem
const getRedeemHistory = (req, res) => {
  const userId = req.params.userId;

  const all = require("./transactionController").getAllTransactionsData?.() || [];

  const result = all.filter(
    t => t.userId === userId && t.type === "redeem"
  );

  res.json(result);
};

module.exports = {
  redeemReward,
  getRedeemHistory
};