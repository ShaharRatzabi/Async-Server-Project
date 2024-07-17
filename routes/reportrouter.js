// Matan Vaizman, 208233262
// Shahar Ratzabi 318802725

const express = require("express");
const router = express.Router();
const calories = require("../models/calories"); // Importing Calories model

// GET /report
router.get("/", function (req, res) {
  const year = parseInt(req.query.year);
  const month = parseInt(req.query.month);
  const user_id = parseInt(req.query.user_id);

  // Initializing the report
  const report = {
    breakfast: [],
    lunch: [],
    dinner: [],
    other: [],
  };

  // Iterating over the calories schema and summing up the amounts between the given dates
  calories
    .find({ user_id, year, month })
    .then((calories) => {
      calories.forEach((calorie) => {
        report[calorie.category].push({
          day: calorie.day,
          description: calorie.description,
          amount: calorie.amount,
        });
      });
      res.status(200).json(report);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("Failed to get report");
    });
});

module.exports = router; // Exporting the router module
