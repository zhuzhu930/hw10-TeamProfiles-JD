const inquirer = require('inquire');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const { mainModule } = require('process');

let cards = []; 

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
            tyep: "checkbox", 
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
        
        const manager = new Manager(`${data.managerName}`, `${data.managerID}`, `${data.managerEmail}`, `${data.managerOfficeNumber}`); 
        
        return manager; 
}); 


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
            tyep: "checkbox", 
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

        const engineer = new Engineer(`${data.engineerName}`, `${data.engineerID}`, `${data.engineerEmail}`, `${data.engineerGitHub}`); 
        
        return engineer; 
}); 


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
            tyep: "checkbox", 
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

        const intern = new Intern(`${data.internName}`, `${data.internID}`, `${data.internEmail}`, `${data.internSchool}`); 
        
        return intern; 
}); 


    // const manager = new Manager(`${data.managerName}`, `${data.managerID}`, `${data.managerEmail}`, `${data.managerOfficeNumber}`);
    // cards = cards.push(manager); 
    const node = document.createElement("div");
    const nodeHTML = 
        `<div class="card" style="width: 18rem">
            <div class="card-body">
            <h5 class="card-title employeeName">${manager.managerName}</h5>
            <p class="card-text employeeTitle">${manager.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.managerID}</li>
            <li class="list-group-item">
                Email: <a href="mailto:${manager.managerEmail}">${manager.managerEmail}</a>
            </li>
            <li class="list-group-item">Office number: ${manager.managerOfficeNumber}</li>
            </ul>
        </div>`;
    
    node.append(nodeHTML)
