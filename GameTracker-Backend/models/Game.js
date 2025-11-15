const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  platform: { type: String },
  coverUrl: { type: String },
  description: { type: String },
  hoursPlayed: { type: Number, default: 0 },
  completed: { type: Boolean, default: false },
  score: { type: Number, min: 0, max: 5 }
}, { timestamps: true });

module.exports = mongoose.model('Game', gameSchema);
