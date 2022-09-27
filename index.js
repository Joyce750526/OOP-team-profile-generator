// link to created page
const generateHTML = require("./src/generateHTML");

// Node Modules
const fs = require("fs");
const inquirer = require("inquirer");

// Create Team Profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { start } = require("repl");

// Create a class that contains all questions
const teamArray = [];

// start with Manager --> Engineer --> Intern

// Manager
const startManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
        validate: (managerName) => {
          if (managerName) {
            return true;
          } else {
            console.log("Please enter the manager's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager's employee ID?",
        validate: (managerID) => {
          if (managerID) {
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
        validate: (managerEmail) => {
          if (managerEmail) {
            return true;
          } else {
            console.log("Please enter the manager's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "number",
        message: "What is the team manager's office number?",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Please enter the mamager's office number!");
            return false;
          }
        },
      },
    ])

    // Pushes Manager's data
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.number
      );
      teamArray.push(manager);
      console.log(manager);
      menuControls();
    });
}

// Not sure how to write the correct cods
// Quit App when the user chooses to quit
const quitApp = () => {
writeFile(teamArray)
};

// .then((answers) => {
//   const htmlPageContent = generateHTML(answers);

//   fs.writeFile('index.html', htmlPageContent, (err) =>
//     err ? console.log(err) : console.log('Successfully created index.html!')
//   );
// });
// console.log(teamArray);
// writeFile(teamArray)
// This function is to prompt another question to ask them what they wish to do next!
const menuControls = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "next",
        message: "What would you like to do next?",
        choices: ["Add an Engineer", "Add an Intern", "Quit"],
      },
    ])
    .then((response) => {
      console.log(response);
      // if/else statement to control whay happens based on the user's answer to the questions above

      // if they choose "add an engineer", then we want to call startEngineer()
      if (response.next === "Add an Engineer") {
        startEngineer();

        // if they choose "add an intern", then we want to call startIntern()
      } else if (response.next === "Add an Intern") {
        startIntern();
      }

      // if they choose "quit", then we want to quit the application and write our HTML file
      else {
        quitApp();
      }
    });
};

// Engineer
const startEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of new engineer?",
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            console.log("Please enter the engineer's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the ID of new engineer?",
        validate: (engineerID) => {
          if (engineerID) {
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
        message: "What is the email address of new engineer?",
        validate: (engineerEmail) => {
          if (engineerEmail) {
            return true;
          } else {
            console.log("Please enter the correct email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is the github username of new engineer?",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter your Github urername!");
            return false;
          }
        },
      },
    ])

    // Pushes Engineer's data
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      teamArray.push(engineer);
      menuControls();
    });
};

// Intern
const startIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the new intern?",
        validate: (internName) => {
          if (internName) {
            return true;
          } else {
            console.log("Please enter the intern's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the ID of new intern?",
        validate: (internID) => {
          if (internID) {
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
        message: "What is the email address of new intern?",
        validate: (internEmail) => {
          if (internEmail) {
            return true;
          } else {
            console.log("Please enter the correct email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter the intern's school!");
            return false;
          }
        },
      },
    ])

    // Pushes Intern's data
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      teamArray.push(intern);
      menuControls();
    });
};

// function to generate HTML page file using file system
const writeFile = (data) => {
  fs.writeFile("./dist/index.html", generateHTML(data), (err) => {
      // if there is an error
      if (err) {
        console.log(err);
        return;
        // when the profile has been created
      } else {
        console.log(
          "Your team profile has been successfully created! Please check out the index.html"
        );
      }
    });
  }
startManager()
