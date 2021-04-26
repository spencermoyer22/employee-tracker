const mysql = require('mysql2');

require('dotenv').config();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'm0m0nkey1010',
        database: 'employees'
    }
);

module.exports = db;