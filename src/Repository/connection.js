import mysql from 'mysql2/promise.js';

const con = await mysql.createConnection({
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD
});

console.log("Conexão realizada!")

export { con }