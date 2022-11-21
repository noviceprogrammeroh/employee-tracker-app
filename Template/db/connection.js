const mysql = require("mysql2");
require('dotenv').config()
const connection = mysql.createConnection({
  host: 'localhost',
  // Your username
   user: '' ,
  // Your password
  password:'' ,
  database: 'employees'
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
