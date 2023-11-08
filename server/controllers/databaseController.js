const databaseController = {};
const userDB = require('../models/userModel');
require('dotenv').config();
const Pool = require('pg').Pool;

databaseController.getData = async (req, res, next) => {


    const myURI = process.env.AWS_PASSWORD;

    // AWS connection
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

    try {

        res.locals.testData = await pool.query("SELECT * FROM users");

        return next();
    } catch (err) {
        return next({
            log: 'Error with placeholder on databaseController',
            message: { 'Error with database query': err }
        });
    }


};

module.exports = databaseController;