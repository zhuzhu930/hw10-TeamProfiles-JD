const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('init', () => {
        it('should start an employee', () => {
            const employee = new Employee();
            expect(typeof employee).toBe('object');
        });

        it('should set a name', () => {
            const name = "Jessie";
            const employee = new Employee(name);
            expect(employe.name).toBe(name);
        });

        it('should set an id', () => {
            const id = 2323;
            const employee = new Employee("Jessie", id);
            expect(employee.id).toBe(id);
        });

        it('should set an email', () => {
            const email = "jessie@test.com";
            const employee = new Employee("Jessie", 2323, email);
            expect(employee.email).toBe(email);
        });
    })
})