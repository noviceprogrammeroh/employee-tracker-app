const mysql = require("mysql2");
require('dotenv').config()
const connection = mysql.createConnection({
  host: process.env.DB_LOCAL_HOST,
  // Your username
   user: process.env.DB_USER ,
  // Your password
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(function (err) {
  if (err) throw err;
});




//get all departments from table
// function getDepartments() {
//     connection.query('SELECT* FROM department', function(error, results) {
//         if(error) throw error;
//         console.log("results:", results)
//     })
// }


// function insertData() {
//     connection.query(, function(error, results) {
//         if(error) throw error;
//         console.log("results:", results)
//     })
// }

module.exports = connection;
// module.exports = getDepartments;
