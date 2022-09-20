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

// start with Manager --> Engineer --> Intern

// Manager
function startManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
        validate: managerName => {
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
        validate: managerID => {
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
        validate: managerEmail => {
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
        validate: officeNumber => {
          if (officeNumber) {
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

    // Pushes Manager's data
    .then(response => {
      const manager = new Manager(response.name, response.id, response.email, response.Number);
      teamArray.push(manager);
      console.log(manager);
      menuControls();
    });
};

const menuControls = () => {
  inquirer.prompt([
    {
      type: "list",
      name: "next",
      message: "What would you like to do next?",
      choices: ["Add an Engineer", "Add an Intern", "Quit"],
    },
  ])
  .then(response => {
    console.log = (response);
    // if/else statement to control whay happens based on the user's answer to the questions above
    // if they choose "add an engineer", then we want to call startEngineer()
    // if they choose "add an intern", then we want to call startIntern)
    // if they choose "quit", then we want to quit the application and write our HTML file
  });
}

// Engineer
const startEngineer = () => {
  console.log("Adding new employee!");
  return inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "What is the role of the new employee?",
      choices: ["Engineer", "Intern"],
    },
    {
      type: "input",
      name: "name",
      message: "What is the name of new engineer?",
      validate: engineerName => {
        if (engineerName) {
          return true;
        } else {
          console.log("Please enter the engineer's name");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "id",
      message: "What is the ID of new engineer?",
      validate: engineerID => {
        if (engineerID) {
          return true;
        } else {
          console.log("Please enter the correct ID number!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "email",
      message: "What is the email address of new engineer?",
      validate: engineerEmail => {
        if (engineerEmail) {
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
      message: "What is the github username of new engineer?",
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your Github urername!");
          return false;
        }
      }
    }
    // Pushes Engineer's data
  ]).then(response => {
    console.log(response);
    const engineer = new Engineer(response.name, response.id, response.email, response.github);
    teamArray.push(Engineer);
    startApp();
  });

};


const addIntern = () => {
  console.log("Adding new intern!");

  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the new intern?",
      validate: (interName) => {
        if (internName) {
          return true;
        } else {
          console.log("Please enter the intern's name!");
          return false;
        }
      }
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
    }
    // Pushes Intern's data
  ]).then(response => {
    const intern = new Intern(response.name, response.id, response.email, response.school);
    this.teamArray.push(newIntern);
    console.log(intern);
    this.startApp();
  })
};

// function to generate HTML page file using file system 
const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
    // if there is an error 
    if (err) {
      console.log(err);
      return;
      // when the profile has been created 
    } else {
      console.log("Your team profile has been successfully created! Please check out the index.html")
    }
  })
};

startManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
    console.log(err);
  });
startManager()