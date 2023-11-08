const { Code } = require('@mui/icons-material');
const express = require('express');
const fs = require('fs');
const codeController = require('../controllers/codeController');
const codeRouter = express.Router();


codeRouter.post('/', codeController.runCode, (req, res, next) => {
    //fs.writeFileSync("test.js", req.body.code);
    res.json({ message: res.locals.codeResults });



});

module.exports = codeRouter;