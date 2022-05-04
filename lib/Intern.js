const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school; 
    }

    getSchool() {
        console.log(`School: ${this.school}`)
    }

    getRole() {
        return "Intern"
    }
}

const schools = [
    //add an array of schools;
  'Harvard University',
  'Stanford University',
  'University of Chicago',
  'New York University',
  'Georgia Tech',
  'UCLA',
  'University of Tennessee',
  'Ole Miss',
];

const intern = new Intern("Gloria", 25, "gloria.Z@intern.com", schools);

console.log("------INTERN-----");
intern.getName();
intern.getId();
intern.getEmail();
intern.getSchool();
intern.getRole();