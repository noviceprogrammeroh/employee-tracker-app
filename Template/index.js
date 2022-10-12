const { prompt } = require("inquirer");
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

  // loadPrompts();


  
}

// Exit the application
function quit() {
  console.log("Goodbye!");
  process.exit();
}
