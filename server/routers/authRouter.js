const express = require('express');
const authRouter = express.Router()
const userController = require('../controllers/userController');

authRouter.post('/signup', userController.createUser, userController.verifyUser, (req, res) => {
    // what should happen here on successful sign up?
    res.send(res.locals.verifiedUser.rows[0]).status(200);

});

authRouter.post('/login', userController.verifyUser, userController.setCookie, (req, res) => {

    res.send(res.locals.verifiedUser.rows[0]).status(200);
})

authRouter.get('/cookie', userController.checkCookie, (req, res) => {
    res.send(res.locals.cookieBool)
})

module.exports = authRouter