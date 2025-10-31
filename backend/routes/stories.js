const express = require('express');
const router = express.Router();
const Story = require('../models/story');

// To POST a new story
router.post('/', async (req, res) => {
  try {
    const story = new Story(req.body);
    await story.save();
    res.status(201).json(story);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET all stories
router.get('/', async (req, res) => {
  const stories = await Story.find();
  res.json(stories);
});

module.exports = router;
