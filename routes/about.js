// Matan Vaizman, 208233262
// Shahar Ratzabi 318802725

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const developers = [
    {
      firstname: "Shahar",
      lastname: "Ratzabi",
      id: 318802725,
      email: "shaharazabi@gmail.com",
    },
    {
      firstname: "Matan",
      lastname: "Vaizman'",
      id: 208233262,
      email: "matanv156@gmail.com",
    },
  ];
  res.json(developers);
});

module.exports = router;
