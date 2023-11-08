const fs = require('graceful-fs');
const cmd = require('node-cmd');


const codeController = {};


const testCode = 'test';




//Score is calculated as follows: 
//If you complete within acclerated time limit: 5
//If you complete within normal time limit: 3
//Complete at all: 1
//Otherwise 0


const getScore = (codeOutput, timeToSolve) => {

    let correctCount = 0;
    const totalCases = codeOutput.length;

    for (let result of codeOutput) {

        if (result) {
            correctCount++;
        }

    }

    if ((correctCount === totalCases) && timeToSolve < 600) {

        return 3; // solved in the expected period of time
    }

    else if ((correctCount === totalCases) && timeToSolve < 450) {

        return 5; //top score


    }

    else if ((correctCount === totalCases) && timeToSolve > 600) {

        return 1; //completed at all


    }

    else {
        return 0;
    }
};


codeController.runCode = async (req, res, next) => {

    try {

        console.log('inside run code controller');
        console.log('codeText', req.body.codeText);
        console.log('timer', req.body.time);

        fs.writeFileSync('test.js', req.body.codeText);
        //can use fs.appendFile() for adding test files
        cmd.run('node ./test.js', function (err, data, stderr) {
            console.log(data);
            res.locals.codeResults = data;
            return next();
        });

        // return next();
    } catch (err) {
        return next({
            log: 'Error with placeholder on codeController',
            message: { err: `ERROR` }
        });
    }


};

module.exports = codeController;