// Matan Vaizman, 208233262
// Shahar Ratzabi 318802725

const mongoose = require("mongoose");

//Crearte users scheme
const usersSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  birthday: String,
});

module.exports = mongoose.model("users", usersSchema);
