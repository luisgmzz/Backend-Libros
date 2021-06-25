const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "books"
});

connection.connect(err => { if (err) console.error(err); });

module.exports = connection;