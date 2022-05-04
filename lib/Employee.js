class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
        console.log(`Name: ${this.name}`);
    }

    getId() {
        console.log(`Id: ${this.id}`)
    }
  }
  module.exports = Employee;