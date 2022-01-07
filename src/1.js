// 1
const mysql = require("mysql");

// 2 Database Information and Credentials
const dbinfo = {
    host: "localhost", // location of the database.
    user: "root",
    password: "cdac",
    database: "ganesh",

    
};

// 3
const connection = mysql.createConnection(dbinfo);

// 4 Opening the connection
connection.connect();

let sql= `insert into basit(username, age) values ("bhim",70)`;

connection.query(sql);

// QUERY...
console.log("ithe record success yeil...");
// LAST STEP Close the connection
connection.end();