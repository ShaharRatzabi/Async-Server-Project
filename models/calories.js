// Matan Vaizman, 208233262
// Shahar Ratzabi 318802725

const mongoose = require("mongoose");

//Crearte calories schema
const caloriesSchema = new mongoose.Schema({
  id: {
    // Define the 'id' as a default generated random value.
    type: Number,
    default: () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1,
  },
  user_id: Number,
  year: Number,
  month: Number,
  day: Number,
  description: String,
  category: String,
  amount: Number,
});

//Exporting calories schema
module.exports = mongoose.model("Calorie", caloriesSchema);
