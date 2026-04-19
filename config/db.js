const mongoose = require('mongoose');

const connectDB = async () => {
  try {
  await mongoose.connect(
 "mongodb+srv://backend:123@cluster0.owbjvy3.mongodb.net/?appName=Cluster0"
);

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;