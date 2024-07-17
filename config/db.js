// Matan Vaizman, 208233262
// Shahar Ratzabi 318802725

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

//Creating DB connection
const connectDB = async () => {
  try {
    //Retrieving DB connection string from .env file
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB; //Exporting DB connection
