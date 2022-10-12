const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "rosy28mx",
  database: "employees"
});

connection.connect(function (err) {
  if (err) throw err;
});

function getDepartments() {
    connection.query('SELECT* FROM departments', function(error, results) {
        if(error) throw error;
        console.log("results:", results)
    })
};

module.exports = connection;
