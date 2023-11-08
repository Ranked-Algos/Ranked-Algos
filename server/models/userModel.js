require('dotenv').config();
const Pool = require('pg').Pool;

const myURI = 'lzxvjcn4ZJVXLKCN3Vkljdjnv%sljkJNVjkl54ZVCNV';

// UNCOMMENT THE LINE BELOW IF USING MONGO
const AWS_PASSWORD = process.env.AWS_PASSWORD || myURI;

const pool = new Pool({
    user: "Edmund",
    host: "database-1.cwvmlntout24.us-east-2.rds.amazonaws.com",
    database: "RankedAlgos",
    password: AWS_PASSWORD,
    port: "5432",
    ssl: {
        rejectUnauthorized: false
    }
});


module.exports = pool; 