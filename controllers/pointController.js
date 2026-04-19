const { users } = require('./userController'); // kalau export
const transaction = require('./transactionController');

// GET /points/:userId
const getPointsByUserId = (req, res) => {
  const userId = parseInt(req.params.userId);

  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User tidak ditemukan" });
  }

  res.json({
    userId: user.id,
    points: user.points
  });
};

// POST /points/add
const addPoints = (req, res) => {
  const userId = parseInt(req.body.userId);
  const points = parseInt(req.body.points);

  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User tidak ditemukan" });
  }

  user.points += points;

  // 🔥 TAMBAH INI
  transaction.addTransaction(userId, "earn", points);

  res.json({
    message: "Points berhasil ditambahkan",
    data: user
  });
};

module.exports = {
  getPointsByUserId,
  addPoints
};