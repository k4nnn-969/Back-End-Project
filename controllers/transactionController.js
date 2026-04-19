let transactions = [];

exports.addTransaction = (userId, type, amount) => {
  transactions.push({
    id: transactions.length + 1,
    userId,
    type, // "earn" atau "redeem"
    amount,
    createdAt: new Date()
  });
};

exports.getTransactionsByUser = (req, res) => {
  const userId = parseInt(req.params.userId);

  const userTransactions = transactions.filter(
    (t) => t.userId === userId
  );

  res.json(userTransactions);
};

exports.getAllTransactions = (req, res) => {
  res.json(transactions);
};