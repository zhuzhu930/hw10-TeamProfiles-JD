const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github; 
    }

    getGithub() {
        console.log(`GitHub username: ${this.github}`);
    }
    getRole() {
        return "Engineer"
    }
}

const githubUsers = [
    //add an array of github usernames.
]

const engineer = new Engineer("Abe Lincoln", 20, "abe.lincoln@usa.org", githubUsers);

console.log("-----ENGINEER-----");
engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getGithub()
engineer.getRole();

module.exports = Engineer;