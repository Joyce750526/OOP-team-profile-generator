function sortTeam(teamArray) {
  // filter by employee type so that you have arrays of manager, engineer and intern
  const htmlCardsArray =[];

  const managerArray = teamArray.filter(
    (employee) => employee.getRole() === "Manager"
  );
  const engineerArray = teamArray.filter(
    (employee) => employee.getRole() === "Engineer"
  );
  const internArray = teamArray.filter(
    (employee) => employee.getRole() === "Intern"
  );
  if (managerArray) {
    teamArray.push(managerHTML(managerArray));
  }
  console.log(managerArray);
  if (managerArray) {
    teamArray.push(engineerHTML(engineerArray));
  }
  if (managerArray) {
    teamArray.push(internHTML(internArray));
  }
  return htmlCardsArray.join("");
  // expected output: Array ["exuberant", "destruction", "present"]
  // with those arrays of just manager, just engineers, just interns,you wan to send those through their appropriate HTML function.
}

// Manager Card
function managerHTML(manager) {
  return `
  <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
<h1>${manager.getName()}<h1>
<h4>Manager</h4><i class="bi bi-cup-hot-fill">Hot Tea Icon</i>
</div>

<div class="card-body">
        <p class="id">ID: ${manager.id}</p>
        <p class="email">Email: <a href="mailto:${manager.email}">${
    manager.email
  }</a></p>
        <p class="office">Office Number: ${manager.officeNumber}</p>
</div>
        </div>
    </div>
    `;
}

// Engineer Card
function engineerHTML(engineer) {
  return `
  <div class="col-4 mt-4">
  <div class="card h-100">
      <div class="card-header">
    <h1>${engineer.getName()}<h1>
    <h4>Engineer</h4><i class="bi bi-file-code-fill">Code Icon</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${
    engineer.email
  }</a></p>
                <p class="github">Github: <a href="https://github.com/${
                  engineer.github
                }">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

// Intern Card
function internHTML(intern) {
  return `
  <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
    <h1>${intern.getName()}
    <h4>Intern</h4><i class="bi bi-mortarboard-fill">Hat Icon</i>
    </div>
    <div class="card-body">
        <p class="id">ID: ${intern.id}</p>
        <p class="email">Email:<a href="mailto:${intern.email}">${
    intern.email
  }</a></p>
        <p class="school">School: ${intern.school}</p>
    </div>
</div>
</div>
`;
}
// // I'm not sure how to fix this code
// const teamArray = pageArray.join("");
// const generateTeam =generateHTML(teamArray);
// return generateTeam;

// Generate HTML Page
function generateHTML(teamArray) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="../dist/style.css" />
  <title>Team Profile Generator</title>
</head>

<body>
<header>
<h1> My Team </h1>
</header>

<main> ${sortTeam(teamArray)} </main>
</body>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

<footer>Team Profile Generator Created by Joyce Chen ®</footer></html>
`;
}

// This syntax is to export to index.html file
module.exports = generateHTML;
