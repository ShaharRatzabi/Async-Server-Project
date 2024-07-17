// Matan Vaizman, 208233262
// Shahar Ratzabi 318802725

const express = require("express");
const router = express.Router();
const calories = require("../models/calories");

router.post("/", function (req, res) {
  // Destructure request body to extract necessary fields
  const { user_id, year, month, day, description, category, amount } = req.body;

  // Check if any of the required fields are missing
  if (
    !user_id ||
    !year ||
    !month ||
    !day ||
    !description ||
    !category ||
    !amount
  ) {
    res.status(400).send("Error: Missing required fields");
    return;
  }

  // Check if the category is one of the allowed categories
  const allowedCategories = ["breakfast", "lunch", "dinner", "other"];
  if (!allowedCategories.includes(category)) {
    res.status(400).send("Error: Invalid category");
    return;
  }
  // Create a new instance of Calories model
  const newCalorie = {
    user_id,
    year,
    month,
    day,
    description,
    category,
    amount,
  };

  // Save the new calorie entry to the database
  calories
    .create(newCalorie)
    .then(() => {
      res.status(200).send("The calorie added successfully");
    })
    .catch(() => {
      res.status(400).send("Failed to add calorie");
    });
});

module.exports = router; // Exporting the router module
