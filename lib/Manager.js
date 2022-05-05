const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber; 
    }

    getRole() {
        return "Manager"
    }
}

const managerOfficeNumbers = [
    //add an array of officeNumbers;
  '11',
  '22',
  '33',
  '44',
  '55',
];

const manager = new Manager("Alexander Hamilton", 25, "alex.hamilton@usa.org", managerOfficeNumbers);

console.log("------MANAGER-----");
manager.getName();
manager.getId();
manager.getEmail();
manager.getRole();

module.exports = Manager; 