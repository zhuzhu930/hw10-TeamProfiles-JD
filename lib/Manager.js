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

module.exports = Manager; 
// const manager = new Manager("Jessie", 23, "zhuzhu930@yahoo.com", 45)
// console.log(manager); 
// console.log(manager.getRole());

// const managerOfficeNumbers = [
//     //add an array of officeNumbers;
//   '11',
//   '22',
//   '33',
//   '44',
//   '55',
// ];

// // const manager = new Manager("Alexander Hamilton", 25, "alex.hamilton@usa.org", managerOfficeNumbers);

// // console.log("------MANAGER-----");
// manager.getName();
// manager.getId();
// manager.getEmail();
// manager.getRole();

