const leaderboardController = {};


leaderboardController.getTasks = async (req, res, next) => {

    try {

        return next();
    } catch (err) {
        return next({
            log: 'Error with placeholder on leaderboardController',
            message: { err: `ERROR` }
        });
    }


};

module.exports = leaderboardController;