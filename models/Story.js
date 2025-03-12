// models/Story.js
const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["Regret", "Love", "Friendship", "Career", "Regrets", "Confession"],
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: "Anonymous",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Story", storySchema);
