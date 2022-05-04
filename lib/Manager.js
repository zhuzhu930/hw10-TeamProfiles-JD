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
    //add an array of managerNames;
  '11',
  '22',
  '33',
  '44',
  '55',
];

const manager = new Manager("Alexander Hamilton", 25, "alex.hamilton@us.com", 22);

console.log("------Manager-----");
manager.getName();
manager.getId();
manager.getEmail();
manager.getRole();