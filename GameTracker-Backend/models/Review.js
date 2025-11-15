const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
  author: { type: String, default: 'Anonymous' },
  rating: { type: Number, required: true, min: 0, max: 5 },
  text: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
