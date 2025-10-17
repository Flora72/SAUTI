const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  title: String,
  content: String,
  voiceNoteUrl: String,
  isAnonymous: Boolean,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Story', StorySchema);
