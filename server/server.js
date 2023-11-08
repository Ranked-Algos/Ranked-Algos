const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const leaderboardRouter = require('./routers/leaderboardRouter.js');
const codeRouter = require('./routers/codeRouter.js');
const databaseRouter = require('./routers/databaseRouter.js');
const authRouter = require('./routers/authRouter.js');

app.use(express.json());
app.use(cors());
app.use('/', express.static(path.join(__dirname, '../build')));
app.use(cookieParser())

// Routers
app.use('/db', databaseRouter);
app.use('/leaders', leaderboardRouter);
app.use('/code', codeRouter);
app.use('/auth', authRouter);

// 404 Error Handler
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
});

// Global Error Handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express default error handler',
        status: 500,
        message: { error: `An error occurred: ${err}` }
    };

    const errorObj = Object.assign({}, defaultErr, err);

    return res.status(errorObj.status).json(errorObj.message);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App is listening on`, PORT);
});

module.exports = app;