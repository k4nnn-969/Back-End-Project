const User = require("../models/User");

// POST
const createUser = async (req, res) => {
  const { name, email } = req.body;

  const newUser = await User.create({ name, email });

  res.json(newUser);
};

// GET ALL
const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// GET BY ID
const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User tidak ditemukan" });
  }

  res.json(user);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById
};