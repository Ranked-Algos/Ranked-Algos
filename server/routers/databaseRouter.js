const { Code } = require('@mui/icons-material');
const express = require('express');
const fs = require('fs');
const databaseController = require('../controllers/databaseController');
const databaseRouter = express.Router();

databaseRouter.get('/', databaseController.getData, (req, res) => {

    res.send(res.locals.testData).status(200);


});

module.exports = databaseRouter;