// Matan Vaizman, 208233262
// Shahar Ratzabi 318802725

const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user");
const aboutRoutes = require("./routes/about");
const caloriesRoutes = require("./routes/calories");
const reportRoutes = require("./routes/report");
const dotenv = require("dotenv");

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());

//Routes
app.use("/users", userRoutes);
app.use("/about", aboutRoutes);
app.use("/addcalories", caloriesRoutes);
app.use("/report", reportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
