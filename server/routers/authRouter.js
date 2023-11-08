const express = require('express');
const authRouter = express.Router()
const userController = require('../controllers/userController');

authRouter.post('/signup', userController.createUser, userController.verifyUser, (req, res) => {
    // what should happen here on successful sign up?
    res.send(res.locals.verifiedUser.rows[0]).status(200);

});

authRouter.post('/login', userController.verifyUser, (req, res) => {

    res.send(res.locals.verifiedUser.rows[0]).status(200);
})

module.exports = authRouter