const inquirer = require("inquirer");
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
// const { mainModule } = require('process');

const members = {
    manager: null, 
    engineers: [],
    interns: [],
}

const memberIdArray = [];
// let manager = {};
// let engineer = {};
// let intern = {}; 

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
    ])
    .then((data) => {
        const manager = new Manager(
            data.managerName, data.managerID, data.managerEmail, data.managerOfficeNumber); 
        members.manager = manager; 
        memberIdArray.push(data.managerID);
        creatTeamMembers();
    }); 
}

function creatTeamMembers() {
    inquirer.prompt([
        {
            type: "list", 
            message: "What's your next step?",
            name: "nextStep",
            choices: ["Add an engineer", "Add an intern", "Finish building my team"],
        }, 
    ]).then((data) => {
        console.log(data);
        if(data.nextStep === "Add an engineer") {
           addEngineer()
        //    break;
        }
        else if(data.nextStep === "Add an intern") {
           addIntern()
        //    break;
        }
        else if (data.nextStep === "Finish building my team") {
            console.log("Thank you for entering the information. ")
            buildHTMLCSS()
        } 
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
    ])
    .then((data) => {
        const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGitHub); 
        members.engineers.push(engineer); 
        memberIdArray.push(data.engineerID)
        creatTeamMembers();
    }); 
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
    ])
    .then((data) => {
        const intern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool); 
        members.interns.push(intern);
        memberIdArray.push(data.internID);
        creatTeamMembers();
    }); 
}


//construct div html 
// function constructManager() {
    // const managerNode = document.createElement("div");

function buildHTMLCSS() {
    //render managerNode
        const managerNodeHTML = function(manager) {
            return `<div class="card" style="width: 18rem">
                <div class="card-body">
                <h5 class="card-title employeeName">${manager.getName()}</h5>
                <p class="card-text employeeTitle">${manager.getRole()}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">
                    Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                </li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
            `
        };
        
    //render engineerNode
        const engineerNodeHTML = function(engineers) {
            const markup = engineers.map((engineer) => {
                return `<div class="card" style="width: 18rem">
                    <div class="card-body">
                    <h5 class="card-title employeeName">${engineer.getName()}</h5>
                    <p class="card-text employeeTitle">${engineer.getRole()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                    </li>
                    <li class="list-group-item">
                        Github: <a href="${engineer.getGithub()}">${engineer.getGithub()}</a>
                    </li>
                    </ul>
                </div>
                `
            });
            return markup.join(",");
        }
        
    //render internNode
        const internNodeHTML = function(interns) {
            const markup = interns.map((intern) => {
                return `<div class="card" style="width: 18rem">
                    <div class="card-body">
                    <h5 class="card-title employeeName">${intern.getName()}</h5>
                    <p class="card-text employeeTitle">${intern.getRole()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
                    </li>
                    <li class="list-group-item">
                        School: ${intern.getSchool()}
                    </li>
                    </ul>
                </div>
            `});
            return markup.join(",");
        }
        
//generate Div's innerHTML
   function generateTeam(members) {
       return `
       ${managerNodeHTML(members.manager)}
       ${engineerNodeHTML(members.engineers)}
       ${internNodeHTML(members.interns)}
       `;
   }

//construct html file

const fileNameHTML = "generatedHTML.html"; 
function html(members) {
    return `
    <!DOCTYPE html>
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
            ${generateTeam(members)}
        </main>
      </body>
    </html>`
} 

fs.writeFile(`dist/${fileNameHTML}`, html(members), (err) => 
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

fs.writeFile(`dist/${filenameCSS}`, css, (err) => 
    err ? console.log(err) : console.log("CSS generated successfully")
);

}

addManager();
// buildHTMLCSS();