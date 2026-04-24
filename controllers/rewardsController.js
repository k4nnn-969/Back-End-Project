const rewards = [
  { id: 1, name: "Voucher 10k", cost: 100 },
  { id: 2, name: "Voucher 50k", cost: 500 },
];


const getRewards = (req, res) => {
  res.json(rewards);
};

// GET reward by id
const getRewardById = (req, res) => {
  const rewardId = parseInt(req.params.id);

  const reward = rewards.find(r => r.id === rewardId);

  if (!reward) {
    return res.status(404).json({
      message: "Reward tidak ditemukan"
    });
  }

  res.json(reward);
};

module.exports = {
  getRewards,
  getRewardById
};