// db.js

// 모듈 선언
const mysql = require("mysql2/promise");

// 상수 선언
const { DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_DATABASE } = process.env;

const pool = mysql.createPool({
    host: DATABASE_HOST,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_DATABASE,
    waitForConnections: true,
    connectionLimit: 50,
    queueLimit: 0
});

module.exports = pool;