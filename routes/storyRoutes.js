// routes/storyRoutes.js
const express = require("express");
const Story = require("../models/Story");
const router = express.Router();

// Submit a story
router.post("/stories", async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newStory = new Story({ title, content, author });
    await newStory.save();
    res
      .status(201)
      .json({ message: "Story submitted successfully!", story: newStory });
  } catch (err) {
    res.status(500).json({ error: "Failed to submit story" });
  }
});

// Get all stories
router.get("/stories", async (req, res) => {
  try {
    const stories = await Story.find().sort({ createdAt: -1 });
    // res.status(200).json(stories);
    res.status(200).json(stories);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch stories" });
  }
});
router.get("/stories/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let stroy = await Story.findById(id);
    res.status(200).json(stroy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
