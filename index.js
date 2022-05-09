const inquirer = require('inquire');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

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
        tyep: "checkbox", 
        message: "What's your next step?",
        name: "nextSteps",
        choices: ["Add an engineer", "Add an intern", "Finish building my team"]
    }, 
])
.then((data) => {
    if(data.nextSteps === "Add an engineer") {
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
                tyep: "checkbox", 
                message: "What's your next step?",
                name: "nextSteps",
                choices: ["Add an engineer", "Add an intern", "Finish building my team"]
            }, 
        ])
        .then((data) => {
            if(data.nextSteps === "Add an intern") {
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
                        tyep: "checkbox", 
                        message: "What's your next step?",
                        name: "nextSteps",
                        choices: ["Add an engineer", "Add an intern", "Finish building my team"]
                    }, 
                ])
                .then((data) => {
                    if(data.nextSteps === "Finish building my team") {
                        return "Thank you for entering the information. ";
                }
            })
        }
    })

    const manager = new Manager(`${data.managerName}`, `${data.managerID}`, `${data.managerEmail}`, `${data.managerOfficeNumber}`)
    const managerCard = `<div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title employeeName">${data.managerName}</h5>
      <p class="card-text employeeTitle">Manager</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:</li>
      <li class="list-group-item">
        Email: <a href="mailto:email">Email Address</a>
      </li>
      <li class="list-group-item">Office number:</li>
    </ul>
  </div>`
})