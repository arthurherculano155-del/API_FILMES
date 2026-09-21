import mysql from 'mysql2/promise.js';

const con = await mysql.createConnection({
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    typeCast: function(field, next){
        if(field.type === "TINY" && field.length === 1){
            return(field.string() === '1')
        } else if(field.type.includes('DECIMAL')){
            return Number(field.string()) 
        } else{
            return next()
        }
    }
});

console.log("Conexão realizada!")

export { con }