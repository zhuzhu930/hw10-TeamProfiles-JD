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
        })
    })
})