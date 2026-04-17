let users = [];

// POST /users
const createUser = (req, res) => {
  const { name, email } = req.body;

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);

  res.json({
    message: "User berhasil dibuat",
    data: newUser
  });
};

// GET /users
const getAllUsers = (req, res) => {
  res.json(users);
};

// GET /users/:id
const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User tidak ditemukan"
    });
  }

  res.json(user);
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers
};