const User = require("../models/User");
const transaction = require('./transactionController');

// GET /points/:userId
const getPointsByUserId = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }

    res.json({
      userId: user._id,
      points: user.points
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /points/add
const addPoints = async (req, res) => {
  try {
    const { userId, points } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }

    user.points += points;
    await user.save();

    transaction.addTransaction(userId, "earn", points);

    res.json({
      message: "Points berhasil ditambahkan",
      data: user
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getPointsByUserId,
  addPoints
};