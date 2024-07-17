// Matan Vaizman, 208233262
// Shahar Ratzabi 318802725

const mongoose = require("mongoose");

//Crearte calories scheme
const caloriesSchema = new mongoose.Schema({
  id: {
    // Define the 'id' as a default generated value.
    type: Number,
    default: () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1, //Random number
  },
  user_id: Number,
  year: Number,
  month: Number,
  day: Number,
  description: String,
  category: String,
  amount: Number,
});

module.exports = mongoose.model("Calorie", caloriesSchema);
