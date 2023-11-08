const { Code } = require('@mui/icons-material');
const express = require('express');
const fs = require('fs');
const codeController = require('../controllers/codeController');
const codeRouter = express.Router();

codeRouter.post('/', codeController.getTasks, (req, res, next) => {

    console.log('REQ BODY', req.body)
    //fs.writeFileSync("test.js", req.body.code);
    res.json({ message: 'Success with codeRouter!' });



});

module.exports = codeRouter;