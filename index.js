// Packages
const fs = require("fs");
const inquirer = require("inquirer");
// const generateHTML = require('./src/generateHtmlPage');
const Manager = require("./lib/Manager");
// const Intern = require('./lib/Intern');
// const Engineer = require('./lib/Engineer');

function startApp() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is the team manager's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email address?",
      },
      {
        type: "input",
        name: "number",
        message: "What is the uteam manager's office number?",
      },
    ])
    .then((response) => {
      console.log(response);
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.number
      ); console.log(manager);
    });
}
startApp(); // calling a function
