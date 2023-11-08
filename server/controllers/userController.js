const bcrypt = require('bcrypt');
const { query } = require('express');
const saltRounds = 10;
const Pool = require('pg').Pool;

const userController = {};

userController.createUser = async (req, res, next) => {

    const myURI = process.env.AWS_PASSWORD;

    // AWS connection
    const Pool = require('pg').Pool;
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
        const { username, password } = req.body;

        bcrypt.hash(password, saltRounds).then(hash => {
            console.log('Hash ', hash);
            const values = [username, hash];
            const queryText = `INSERT INTO users(username, password) VALUES($1, $2)`;
            const query = {
                text: queryText,
                values: values
            };
            client.query(query, err => {

                if (err) {
                    console.log(err);
                    return next('Username already exists');
                }

                else {
                    const newUser = { username: username, password: password }
                    res.locals.newUser = newUser
                    return next();
                }

            })
        })
            .catch(err => console.error(err.message))

    } catch (err) {

        await client.query('ROLLBACK');
        next('Error with try statement in user controller');
    } finally {
        client.release()
    }
};


/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/

userController.verifyUser = async (req, res, next) => {


    const myURI = process.env.AWS_PASSWORD;

    // AWS connection
    const Pool = require('pg').Pool;
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
        const { username, password } = req.body;

        const query = {
            text: 'SELECT * FROM users WHERE username = $1',
            values: [username]
        };
        res.locals.verifiedUser = await pool.query(query);
        console.log(res.locals.verifiedUser);
        if (res.locals.verifiedUser.rows.length === 0) {
            return next('User not found in database!');
        }

        const passwordMatch = await bcrypt.compare(password, res.locals.verifiedUser.rows[0].password)
        if (passwordMatch) {
            return next()
        }
        else {
            return next('valid user but incorrect password provided!');
        }
    } catch (err) {

        console.log('inside error block')

        await client.query('ROLLBACK');
        next(err);
    } finally {
        client.release()
    }
};

userController.setCookie = (req, res, next) => {    

    if (res.locals.verifiedUser.rows[0].user_id) {
        // using a secret word for now
        // res.cookie('ssid', `${res.locals.verifiedUser.rows[0].user_id}`, {httpOnly : true})
        res.cookie('ssid', `secret`, {httpOnly : true})
    }
  
    return next()
};

userController.checkCookie = (req, res, next) => {
    console.log('inside check cookie. cookie is', req.cookies)
    if (req.cookies.ssid === 'secret'){
        res.locals.cookieBool = true
    } else {
        res.locals.cookieBool = false
    }
    next()
}


module.exports = userController;