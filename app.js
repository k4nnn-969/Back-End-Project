const express = require('express');
const app = express();

app.use(express.json());

// panggil routes
const userRoutes = require('./routes/userRoutes');

// pakai routes
app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Server jalan di port 3000');

  // Routes poin
const pointRoutes = require('./routes/pointRoutes');

// pakai routes poin
app.use('/points', pointRoutes);
});