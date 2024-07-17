// Matan Vaizman, 208233262
// Shahar Ratzabi 318802725

const express = require("express");
const router = express.Router();
const users = require("../models/users");

router.get("/:id", function (req, res) {
  // Get id parameter from the URL
  const id = parseInt(req.params.id);
  console.log(id);

  // Find the specific user by id
  users
    .findOne({ id: id })
    .then((user) => {
      // If no user found return 404 status
      if (!user) {
        return res.status(404).send("No user found.");
      }

      const { id, first_name, last_name, birthday } = user;
      res.status(200).json({ id, first_name, last_name, birthday });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Failed to get user data");
    });
});

module.exports = router; // Exporting the router module
