const redeemReward = (req, res) => {
  const { userId, rewardId } = req.body;

  // nanti bisa dikembangin:
  // - cek points cukup atau tidak
  // - kurangi points
  // - simpan ke transactions

  res.json({
    message: `User ${userId} berhasil redeem reward ${rewardId}`
  });
};

module.exports = {
  redeemReward
};