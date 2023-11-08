const express = require('express');
const leaderboardRouter = express.Router();
const leaderboardController = require('../controllers/leaderboardController');

leaderboardRouter.get('/', leaderboardController.getTasks, (req, res, next) => {

    res.json({ message: 'Success with leaderboardRouter!' });
});

module.exports = leaderboardRouter;