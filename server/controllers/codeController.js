const codeController = {};

module.exports = codeController;

codeController.getTasks = async (req, res, next) => {

    try {

        return next();
    } catch (err) {
        return next({
            log: 'Error with placeholder on codeController',
            message: { err: `ERROR` }
        });
    }


};

module.exports = codeController;