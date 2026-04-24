let transactions = [];

exports.addTransaction = (userId, type, amount) => {
  transactions.push({
    id: transactions.length + 1,
    userId: userId.toString(), 
    type,
    amount,
    createdAt: new Date()
  });

  console.log("TRANSACTION:", transactions);
};

exports.getTransactionsByUser = (req, res) => {
  const userId = req.params.userId; 

  const userTransactions = transactions.filter(
    (t) => t.userId === userId.toString()
  );

  res.json(userTransactions);
};

exports.getAllTransactions = (req, res) => {
  res.json(transactions);
};

exports.getAllTransactionsData = () => transactions;