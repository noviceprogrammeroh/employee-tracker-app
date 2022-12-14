const inquirer = require("inquirer");
const logo = require("asciiart-logo");
require("console.table");

const db = require("../Template/db/connection.js");

//access models
const Department = require("./models/Department.js");
const Employee = require("./models/Employee.js");
const Roles = require("./models/Roles.js");

//Display logo text, load main prompts
function init() {
  const logoText = logo({ name: "Employee Manager" }).render();

  console.log(logoText);

  startProgram();
}

//

function startProgram() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "viewList",
        message: "Please choose from the options below:",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Update an employee's manager",
          "View employees by manager",
          "View employees by department",
          "Remove a department",
          "Remove a role",
          "Remove an employee",
          "view budget",
          "exit",
        ],
      },
    ])
    .then((answers) => {
      console.log(answers);
      const answer = answers.viewList;
      if (answer === "View all departments") {
        viewAlldDeparments();
      }

      if (answer === "View all roles") {
        viewAllRoles();
      }

      if (answer === "View all employees") {
        viewAllEmployees();
      }

      if (answer === "Add a department") {
        addDepartment();
      }

      if (answer === "Add a role") {
        addRole();
      }

      if (answer === "Add an employee") {
        addEmployee();
      }

      if (answer === "Update an employee role") {
        updateEmployeeRole();
      }
      if (answer === "Update an employee's manager") {
        updateManager();
      }

      if (answer === "Update an employee's manager") {
        updateManager();
      }

      if (answer === "View employees by department") {
        viewEmployeeDpt();
      }

      if (answer === "Remove a role") {
        removeRole();
      }

      if (answer === "Remove an employee") {
        removeEmployee();
      }

      if (answer === "view budget") {
        viewBudget();
      }

      if (answer === "exit") {
        quit();
      }
    });
}

//create a function that will access all departments
const viewAlldDeparments = () => {
  const sql = `SELECT* FROM department`;
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log("\n");
    console.table(results);
    startProgram();
  });
};

//view all roles
const viewAllRoles = () => {
  const sql = `   
    SELECT role.id, role.title, role.salary, role.department_id AS department_id,
    department.name AS department_name
    FROM role
    JOIN department ON department.id = role.department_id;`;
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log("\n");
    console.table(results);
    startProgram();
  });
};

//View all employees
const viewAllEmployees = () => {
  const sql = `
   SELECT employee.id, employee.first_name, employee.last_name, role.title,
   role.salary, role.department_id, employee.manager_id   
   FROM employee
   JOIN role ON employee.role_id = role.id;
        `;
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log("\n");
    console.table(results);
    startProgram();
  });
};

//Add a department
const addDepartment = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter department name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Enter a department name");
            return false;
          }
        },
      },
    ])
    .then((answer) => {
      const sql = `INSERT INTO department(name)
          VALUES (?)`;
      const params = answer.name;
      db.query(sql, params, (err) => {
        if (err) {
          throw err;
        }
        console.log("Department added!");
        viewAlldDeparments();
        startProgram();
        quit();
      });
    });
};

//Add a role
const addRole = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Please enter role name?",
        validate: (roleInput) => {
          if (roleInput) {
            return true;
          } else {
            console.log("Please enter a role name");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "salary",
        message: "Please enter salary: ",
        validate: (salaryInput) => {
          if (salaryInput) {
            return true;
          } else {
            console.log("Please enter salary");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "department_id",
        message: "Please enter department ID: ",
        validate: (departmentInput) => {
          if (departmentInput) {
            return true;
          } else {
            console.log("Please enter department ID");
            return false;
          }
        },
      },
    ])
    .then((answer) => {
      const sql = `INSERT INTO role(title, salary, department_id)
            VALUES (?, ?, ?)`;
      const params = [answer.title, answer.salary, answer.department_id];

      db.query(sql, params, (err) => {
        if (err) {
          throw err;
        }
        console.log("Role added!");
        viewAllRoles();
      });
    });
};

const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "Enter employee first name?",
        validate: (firstNameInput) => {
          if (firstNameInput) {
            return true;
          } else {
            console.log("Enter first name");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "lastName",
        message: "Enter employee last name: ",
        validate: (lastNameInput) => {
          if (lastNameInput) {
            return true;
          } else {
            console.log("Enter last name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "roleId",
        message: "Enter role ID: ",
        validate: (roleIdInput) => {
          if (roleIdInput) {
            return true;
          } else {
            console.log("Enter role ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "Enter manager ID: ",
        validate: (managerIdInput) => {
          if (managerIdInput) {
            return true;
          } else {
            console.log("Enter manager ID");
            return false;
          }
        },
      },
    ])
    .then((answer) => {
      const sql = `INSERT INTO employee(first_name, last_name, role_id, manager_id)
              VALUES (?, ?, ?, ?)`;
      const params = [
        answer.firstName,
        answer.lastName,
        answer.roleId,
        answer.managerId,
      ];

      db.query(sql, params, (err) => {
        if (err) {
          throw err;
        }
        console.log("Employee added!");
        viewAllEmployees();
        //   startProgram();
      });
    });
};

//update an employee role

const updateEmployeeRole = () => {
  // get employees from employee table
  const sql = `SELECT * FROM employee`;
  // make the query to get all employees from employee table
  db.query(sql, (err, data) => {
    if (err) throw err;
    // from the employee table, find all id, first and last names then set name as firstname lastname, and value as the employees id
    const employees = data.map(({ id, first_name, last_name }) => ({
      name: first_name + " " + last_name,
      value: id,
    }));
    // ask the user which employee to update witha list of first and last names as well as the id
    inquirer
      .prompt([
        {
          type: "list",
          name: "name",
          message: "Enter employee that you would like to update?",
          choices: employees,
        },
      ])
      //   depending on who they choose
      .then((answer) => {
        // employee = Hector Perez(who the chose)
        const employee = answer.name;
        const params = [];
        //  params: [] => [Hector Perez]
        params.push(employee);
        // new query to chose the new role for the chosen employee
        const sql = `SELECT * FROM role`;
        // make the query to get all roles from role table
        db.query(sql, (err, data) => {
          if (err) throw err;
          // from the roles table we want to find all id and titles, then set name to role title, value to its id
          const roles = data.map(({ id, title }) => ({
            name: title,
            value: id,
          }));
          // ask the user which role we want the previously chosen employee to be updated to
          inquirer
            .prompt([
              {
                type: "list",
                name: "role",
                message: "Enter employee's new role?",
                choices: roles,
              },
            ])
            //   depending on the role chosen
            .then((answer) => {
              // role = Lawyer(role chosen)
              const role = answer.role;
              // params: [Hector Perez] => [{Lawyer}, {Hector Perez}]
              params.push(role);

              // role = Lawyer
              params[0] = role;
              //   employee = Hactor Perez
              params[1] = employee;

              // new query to update the chosen employee to there newly chosen role
              const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
              // query to udpate employees role
              db.query(sql, params, (err, result) => {
                if (err) throw err;
                // tell user employees role has been updated
                console.log("Employee updated!");

                //   startProgram();
              });
            });
        });
      });
  });
};

//update manager
const updateManager = () => {
  // get employees from employee table
  const sql = `SELECT * FROM employee`;

  db.query(sql, (err, data) => {
    if (err) throw err;

    const employees = data.map(({ id, first_name, last_name }) => ({
      name: first_name + " " + last_name,
      value: id,
    }));

    inquirer
      .prompt([
        {
          type: "list",
          name: "name",
          message: "Which employee would you like to update?",
          choices: employees,
        },
      ])
      .then((answer) => {
        const employee = answer.name;
        const params = [];
        params.push(employee);

        const sql = `SELECT * FROM employee`;

        db.query(sql, (err, data) => {
          if (err) throw err;

          const managers = data.map(({ id, first_name, last_name }) => ({
            name: first_name + " " + last_name,
            value: id,
          }));

          inquirer
            .prompt([
              {
                type: "list",
                name: "manager",
                message: "Who is the employee's manager?",
                choices: managers,
              },
            ])
            .then((answer) => {
              const manager = answer.manager;
              params.push(manager);

              //   let employee = params[0]
              params[0] = manager;
              params[1] = employee;

              // console.log(params)

              const sql = `UPDATE employee SET manager_id = ? WHERE id = ?`;

              db.query(sql, params, (err, result) => {
                if (err) throw err;
                console.log("Employee has been updated!");

                viewAllEmployees();
              });
            });
        });
      });
  });
};

//view employee by department
const viewEmployeeDpt = () => {
  console.log("");
  console.log("Employee by Departments :\n");
  const sql = `SELECT employee.first_name, 
                        employee.last_name, 
                        department.name AS department
                 FROM employee 
                 LEFT JOIN role ON employee.role_id = role.id 
                 LEFT JOIN department ON role.department_id = department.id`;

  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    startProgram();
  });
};

//Remove Role
const removeRole = () => {
  const sql = `SELECT * FROM role`;

  db.query(sql, (err, data) => {
    if (err) throw err;

    const role = data.map(({ title, id }) => ({ name: title, value: id }));

    inquirer
      .prompt([
        {
          type: "list",
          name: "role",
          message: "Enter role that do you want to delete?",
          choices: role,
        },
      ])
      .then((answer) => {
        const role = answer.role;
        const sql = `DELETE FROM role WHERE id = ?`;

        db.query(sql, role, (err, result) => {
          if (err) throw err;
          console.log("Successfully deleted!");

          viewAllRoles();
        });
      });
  });
};

// Remove employees
const removeEmployee = () => {
  // get employees from employee table
  const sql = `SELECT * FROM employee`;

  db.query(sql, (err, data) => {
    if (err) throw err;

    const employees = data.map(({ id, first_name, last_name }) => ({
      name: first_name + " " + last_name,
      value: id,
    }));

    inquirer
      .prompt([
        {
          type: "list",
          name: "name",
          message: "Enter employee's name that you would like to delete :",
          choices: employees,
        },
      ])
      .then((answer) => {
        const employee = answer.name;

        const sql = `DELETE FROM employee WHERE id = ?`;

        db.query(sql, employee, (err, result) => {
          if (err) throw err;
          console.log("Employee Deleted!");

          viewAllEmployees();
        });
      });
  });
};

// view budget
const viewBudget = () => {
  console.log("")   
  console.log("Department budget\n");

  const sql = `SELECT department_id AS ID, 
                        department.name AS Department,
                        SUM(salary) AS Budget
                 FROM  role  
                 JOIN department ON role.department_id = department.id GROUP BY  department_id`;

  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);

    startProgram();
  });
};

//Exit the application
function quit() {
  console.log("Goodbye!");
  process.exit();
}
init();
