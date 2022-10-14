const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: LOCAL_HOST,
  // Your username
   user: DB_USER ,
  // Your password
  password:DB_PASSWORD,
  database: DB_NAME
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
