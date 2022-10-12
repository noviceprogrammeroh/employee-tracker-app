const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

//access models
const Deparment = require("./models/Department.js");
const Employee = require("./models/Employee.js");
const Role = require("./models/Role.js");

init();

// Display logo text, load main prompts
function init() {
  const logoText = logo({ name: "Employee Manager" }).render();

  console.log(logoText);

  start();

  // loadPrompts();

  //    view all departments,
  //    view all roles,
  //    view all employees,
  //    add a department,
  //    add a role,
  //    add an employee,
  //    and update an employee role
  //   WHEN I choose to view all department
  //   THEN I am presented with a
  //   formatted table
  //   showing department names and department ids

  function start() {
    inquirer.prompt([
      {
        type: "input",
        message: "View all Departments : ",
        name: "allDepartments",
      },

      {
        type: "input",
        message: "View all Roles :",
        name: "allRoles",
      },

      {
        type: "input",
        message: "View all employees :",
        name: "allEmployees",
      },

      {
        type: "input",
        message: "Add a department :",
        name: "department",
      },

      {
        type: "input",
        message: "Add a role :",
        name: "role",
      },

      {
        type: "input",
        message: "Add employee :",
        name: "employee",
      },

      {
        type: "input",
        message: "Update employee :",
        name: "department",
      },
    ]);
  }
}

// Exit the application
function quit() {
  console.log("Goodbye!");
  process.exit();
}
