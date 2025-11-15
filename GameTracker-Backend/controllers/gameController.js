const Game = require('../models/Game');
const Review = require('../models/Review');

const getAllGames = async (req, res) => {
  try {
    const games = await Game.find().sort({ createdAt: -1 });
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ message: 'Game not found' });
    res.json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createGame = async (req, res) => {
  try {
    const { title, platform, coverUrl, description, hoursPlayed, completed, score } = req.body;
    const newGame = await Game.create({ title, platform, coverUrl, description, hoursPlayed, completed, score });
    res.status(201).json(newGame);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateGame = async (req, res) => {
  try {
    const updated = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'Game not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteGame = async (req, res) => {
  try {
    const removed = await Game.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: 'Game not found' });
    await Review.deleteMany({ game: req.params.id });
    res.json({ message: 'Game deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllGames, getGameById, createGame, updateGame, deleteGame };
