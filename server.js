// server.js
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const storyRoutes = require("./routes/storyRoutes");

// Load environment variables
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();

app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "views")));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use story routes
app.use("/confess", storyRoutes);
// Basic route
app.get("/", (req, res) => {
  res.send("Welcome to the Confession App!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
