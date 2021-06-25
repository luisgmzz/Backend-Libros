const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: "books"
});

/* 
TABLE:

id int(11) AI PK 
name varchar(45) 
series varchar(45) 
author varchar(45) 
publisher varchar(45)

*/

connection.connect(err => { if (err) console.error(err); });

module.exports = connection;