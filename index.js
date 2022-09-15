// link to created page
const generateHTML = require("./src/generateHTML");

// Node Modules
const fs = require("fs");
const inquirer = require("inquirer");

// Create Team Profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Create a class that contains all questions
const teamArray = [];
//   constructor() {
//     this.teamArray = [];


// getTeamArray() {
//   return this.teamArray;
// }

// start with Manager prompts--> Engineer --> Intern
function startApp() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the mamager's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager's employee ID?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the correct number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the mamager's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "number",
        message: "What is the team manager's office number?",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter the mamager's office number!");
            return false;
          }
        },
      },
    ])

    // // Pushes Manager's data into teamArray
    // .then((response) => {
    //   console.log(response);
    //   const manager = new Manager(
    //     response.name,
    //     response.id,
    //     response.email,
    //     response.number
    //   );
    //   console.log(manager);
    // });

    // Pushes Manager's data into teamArray
    .then(response => {
      // const { name, id, email, officeNumber } = managerInput
      const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
      teamArray.push(newManager);
      console.log(manager);

    });
};
// startApp(); // calling a function
this.startApp();


const addEmployee = () => {
  console.log("Adding new employee!");
};
return inquirer.prompt([
  {
    type: "list",
    name: "role",
    message: "What is the role of the new employee?",
    choices: ["Engineer", "Intern"]
  },

  {
    type: "input",
    name: "name",
    message: "What is the name of new employee?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the employee's name");
        return false;
      }
    }
  },

  {
    type: "input",
    name: "id",
    message: "What is the ID of new employee?",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter the correct ID number!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the email address of new employee?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the correct email address!");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "github",
    message: "What is the github username of new employee?",
    when: (input) => input.role === "Engineer",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter the correct ID number!");
        return false;
      }
    },
  },


])