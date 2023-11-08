const fs = require('graceful-fs');
const cmd = require('node-cmd');


const codeController = {};


codeController.runCode = async (req, res, next) => {

    try {

        console.log('inside run code controller');

        fs.writeFileSync('test.js', req.body.code);
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