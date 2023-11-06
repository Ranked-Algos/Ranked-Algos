const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const leaderboardRouter = require('./routers/leaderboardRouter.js');

app.use(express.json());
app.use(cors());
app.use('/', express.static(path.join(__dirname, '../build')));

// Routers
app.use('/db', leaderboardRouter);

// 404 Error Handler
app.use('*', (req,res) => {
    res.status(404).send('Page not found.');
});

// Global Erorr Handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express default error handler',
        status: 500,
        message: {error: `An error occurred: ${err}`}
    };
    
    const errorObj = Object.assign({}, defaultErr, err);
    
    return res.status(errorObj.status).json(errorObj.message);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App is listening on`, PORT);
});

module.exports = app;