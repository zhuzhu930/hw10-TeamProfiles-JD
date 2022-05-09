const inquirer = require("inquirer");
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const { mainModule } = require('process');

let manager = {};
let engineer = {};
let intern = {}; 

//seperating the functions for readability. 
//add a manager: 
function addManager() {
    inquirer.prompt([
        {
            type: "input", 
            message: "Please enter a team manager's name. ",
            name: "managerName"
        }, 
        {
            type: "input", 
            message: "Please enter the manager's employee ID. ",
            name: "managerID"
        }, 
        {
            type: "input", 
            message: "Please enter the manager's email address. ",
            name: "managerEmail"
        },
        {
            type: "input", 
            message: "Please enter the manager's office number.",
            name: "managerOfficeNumber"
        },
        {
            type: "checkbox", 
            message: "What's your next step?",
            name: "nextSteps",
            choices: ["Add a manager", "Add an engineer", "Add an intern", "Finish building my team"]
        }, 
    ])
    .then((data) => {
        manager = new Manager(`${data.managerName}`, parseInt(`${data.managerID}`), `${data.managerEmail}`, parseInt(`${data.managerOfficeNumber}`)); 

        if(data.nextSteps === "Add a manager") {
            addManager();
         };
        if(data.nextSteps === "Add an engineer") {
           addEngineer();
        };
        if(data.nextSteps === "Add an intern") {
           addIntern();
        };
        if(data.nextSteps === "Finish building my team") {
            return "Thank you for entering the information. "
        };
        
        // return manager; 
    }); 
}

//add an engineer: 
function addEngineer() {
    inquirer.prompt([
        {
            type: "input", 
            message: "Please enter an engineer's name. ",
            name: "engineerName"
        }, 
        {
            type: "input", 
            message: "Please enter the engineer's employee ID. ",
            name: "engineerID"
        }, 
        {
            type: "input", 
            message: "Please enter the engineer's email address. ",
            name: "engineerEmail"
        },
        {
            type: "input", 
            message: "Please enter the engineer's GitHub username.",
            name: "engineerGitHub"
        },
        {
            type: "checkbox", 
            message: "What's your next step?",
            name: "nextSteps",
            choices: ["Add a manager", "Add an engineer", "Add an intern", "Finish building my team"]
        }, 
    ])
    .then((data) => {
        if(data.nextSteps === "Add a manager") {
            addManager();
        };
        if(data.nextSteps === "Add an engineer") {
           addEngineer();
        };
        if(data.nextSteps === "Add an intern") {
           addIntern();
        };
        if(data.nextSteps === "Finish building my team") {
            return "Thank you for entering the information. "
        };

        engineer = new Engineer(`${data.engineerName}`, `${data.engineerID}`, `${data.engineerEmail}`, `${data.engineerGitHub}`); 
        
        // return engineer; 
    }) 
}; 

function addIntern() {
    inquirer.prompt([
        {
            type: "input", 
            message: "Please enter an intern's name. ",
            name: "internName"
        }, 
        {
            type: "input", 
            message: "Please enter the intern's employee ID. ",
            name: "internID"
        }, 
        {
            type: "input", 
            message: "Please enter the intern's email address. ",
            name: "internEmail"
        },
        {
            type: "input", 
            message: "Please enter the intern's school.",
            name: "internSchool"
        },
        {
            type: "checkbox", 
            message: "What's your next step?",
            name: "nextSteps",
            choices: ["Add an engineer", "Add an intern", "Finish building my team"]
        }, 
    ])
    .then((data) => {
        if(data.nextSteps === "Add a manager") {
            addManager();
        };
        if(data.nextSteps === "Add an engineer") {
           addEngineer();
        };
        if(data.nextSteps === "Add an intern") {
           addIntern();
        };
        if(data.nextSteps === "Finish building my team") {
            return "Thank you for entering the information. "
        };

        intern = new Intern(`${data.internName}`, `${data.internID}`, `${data.internEmail}`, `${data.internSchool}`); 
        
        // return intern; 
    }); 
}

//calling functions: 
addManager();
// addEngineer();
// addIntern();

//construct div html 
// function constructManager() {
    // const managerNode = document.createElement("div");
        const managerNodeHTML = 
            `<div class="card" style="width: 18rem">
                <div class="card-body">
                <h5 class="card-title employeeName">${manager.name}</h5>
                <p class="card-text employeeTitle">${manager.getRole()}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">
                    Email: <a href="mailto:${manager.email}">${manager.email}</a>
                </li>
                <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                </ul>
            </div>`;
        
    // managerNode.append(managerNodeHTML); 
// }; 

// function constructEngineer() {
    // const engineerNode = document.createElement("div");
        const engineerNodeHTML = 
            `<div class="card" style="width: 18rem">
                <div class="card-body">
                <h5 class="card-title employeeName">${engineer.name}</h5>
                <p class="card-text employeeTitle">${engineer.getRole()}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">
                    Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
                </li>
                <li class="list-group-item">
                    Github: <a href="${engineer.github}">${engineer.github}</a>
                </li>
                </ul>
            </div>`;
        
    // engineerNode.append(engineerNodeHTML); 
// }; 

// function constructIntern() {
    // const internNode = document.createElement("div");
        const internNodeHTML = 
            `<div class="card" style="width: 18rem">
                <div class="card-body">
                <h5 class="card-title employeeName">${intern.name}</h5>
                <p class="card-text employeeTitle">${intern.getRole()}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">
                    Email: <a href="mailto:${intern.email}">${intern.email}</a>
                </li>
                <li class="list-group-item">
                    School: ${intern.school}
                </li>
                </ul>
            </div>`;
        
    // internNode.append(internNodeHTML); 
// }


//construct html file
// function constructHTML() {

// }

const fileNameHTML = "generatedHTML.html"; 
const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="generatedStyle.css" />
    <title>Team Profiles</title>
  </head>
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main class="container row">
        <div>${managerNodeHTML}</div>
        <div>${engineerNodeHTML}</div>
        <div>${internNodeHTML}</div>
    </main>
  </body>
</html>`

fs.writeFile(`/dist/${fileNameHTML}`, html, (err) => 
    err ? console.log(err) : console.log("HTML generated successfully")
);

//construct CSS file
const filenameCSS = "generatedStyle.css"; 
const css = `@import url("https://fonts.googleapis.com/css2?family=Babylonica&family=Pacifico&family=Poppins:ital,wght@0,200;0,300;1,400&display=swap");

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  text-align: center;
  font-family: "Babylonica", cursive;
  font-family: "Pacifico", cursive;
  font-family: "Poppins", sans-serif;
  background-color: lightgrey;
}

header {
  margin: 0;
  padding: 50px;
  background: linear-gradient(#e66465, #9198e5);
}

header h1 {
  font-weight: bolder;
}

/* .container {
  display: flex;
  justify-content: center;
  align-items: center;
} */

.card-body {
  background-color: royalblue;
  font-size: large;
  color: white;
}

.card {
  padding: 0px;
  margin: 30px;
}

.list-group {
  text-align: left;
}`

fs.writeFile(`/dist/${filenameCSS}`, css, (err) => 
    err ? console.log(err) : console.log("CSS generated successfully")
);

