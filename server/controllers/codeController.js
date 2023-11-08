const fs = require('graceful-fs');
const cmd = require('node-cmd');
require('dotenv').config();

const codeController = {};

const testCode =

    `
let result = "";
const arr1 = [1, 4, 6, 12, 9];
result = result.concat(twoSum(arr1, 10));
result = result.concat(',');
const arr2 = [1, 4, 6, 12, 9];
result = result.concat(twoSum(arr2, 16));
result = result.concat(',')
const arr3 = [1, 4, 7, 2, 9, 0];
result = result.concat(twoSum(arr3, 7));
console.log(result);

`;



//Score is calculated as follows: 
//If you complete within acclerated time limit: 5
//If you complete within normal time limit: 3
//Complete at all: 1
//Otherwise 0


const getScore = (codeOutput, timeToSolve) => {

    console.log('codeOutput: ', codeOutput);

    // const codeResults = JSON.parse(codeOutput);

    // console.log('codeOutputJSONed: ', typeof (codeResults));

    let codeArray = codeOutput.split(",");

    let correctCount = 0;
    const totalCases = codeArray.length;


    for (let result of codeArray) {

        if (result == 'true' || result == 'true\n') {
            correctCount++;
        }

    }

    if ((correctCount === totalCases) && timeToSolve < 450) {

        return 5; //top score


    }

    else if ((correctCount === totalCases) && timeToSolve < 600) {

        return 3; // solved in the expected period of time
    }

    else if ((correctCount === totalCases) && timeToSolve > 600) {

        return 1; //completed at all


    }

    else {
        return 0;
    }
};


codeController.runCode = async (req, res, next) => {

    const Pool = require('pg').Pool;

    const myURI = process.env.AWS_PASSWORD;

    const pool = new Pool({
        user: "Edmund",
        host: "database-1.cwvmlntout24.us-east-2.rds.amazonaws.com",
        database: "RankedAlgos",
        password: myURI,
        port: "5432",
        ssl: {
            rejectUnauthorized: false
        }
    });

    const client = await pool.connect();

    try {

        console.log('inside run code controller');
        fs.writeFileSync('test.js', '');
        // console.log('codeText', req.body.codeText);
        // console.log('timer', req.body.time);

        fs.writeFileSync('test.js', req.body.codeText);
        fs.appendFile('test.js', testCode);
        cmd.run('node ./test.js', function (err, data, stderr) {
            console.log("data: ", data);
            const algo_score = getScore(data, req.body.time);
            res.locals.codeResults = algo_score;

            //save algo to profile if the algo was solved correctly

            if (algo_score > 0) {
                console.log('inside push to profiles code...');

                try {


                    const queryText = `INSERT INTO profiles(profile_id, algo_id, solve_time, score) VALUES($1, $2, $3, $4)`;

                    const query = {
                        text: queryText,
                        values: [req.body.user_id, 1, req.body.time, algo_score]
                    };


                    client.query(query, err => {

                        if (err) {
                            console.log(err);
                            return next('Adding solved algo to profiles failed');
                        }

                        else {
                            console.log('added to profiles!');
                            return next();
                        }

                    });

                } catch (e) {
                    console.log(e);
                }

                //return next();
            };

            //return next();
        })
    } catch (err) {
        return next({
            log: 'Error with placeholder on codeController',
            message: { err: `ERROR` }
        });
    }


};

module.exports = codeController;