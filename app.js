const express = require('express');
const app = express();
const connectDB = require('./config/db');
connectDB();

app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const pointRoutes = require('./routes/pointRoutes');
const rewardRoutes = require('./routes/rewardsRoutes');
const transactionRoutes = require('./routes/transactionRoutes');


// use
app.use('/api/users', userRoutes);
app.use('/api/points', pointRoutes);
app.use('/api/rewards', rewardRoutes);
app.use('/api/transactions', transactionRoutes);

// jalankan servernya
app.listen(3000, () => {
  console.log('Server jalan di port 3000');
});