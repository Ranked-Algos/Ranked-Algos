const express = require('express');
const leaderboardRouter = express.Router();

leaderboardRouter.use('/', (req, res, next) => {

    return res.status(200);
});

module.exports = leaderboardRouter;