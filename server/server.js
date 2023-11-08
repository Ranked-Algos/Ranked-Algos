const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const leaderboardRouter = require('./routers/leaderboardRouter.js');
const codeRouter = require('./routers/codeRouter.js');
const databaseRouter = require('./routers/databaseRouter.js');
const userController = require('./controllers/userController.js');
const authRouter = require('./routers/authRouter.js');

app.use(express.json());
app.use(cors());
app.use('/', express.static(path.join(__dirname, '../build')));



// Routers
app.use('/db', databaseRouter);
app.use('/leaders', leaderboardRouter);
app.use('/code', codeRouter);
app.use('/auth', authRouter);

// app.post('/signup', userController.createUser, (req, res) => {
//     // on successful signup, sends new user to front-end
//     res.send('hi').status(200);
//     //res.send(res.locals.verifiedUser.rows[0]).status(200);

// });

// app.post('/login', userController.verifyUser, (req, res) => {

//     // on successful login, sends authenticated user info (id, username, pwd) to front-end
//     res.send(res.locals.verifiedUser.rows[0]).status(200);

// })


// 404 Error Handler
app.use('*', (req, res) => {
    res.status(404).send('Page not found.');
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