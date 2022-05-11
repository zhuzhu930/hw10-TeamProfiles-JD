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
    });

    describe('GET methods', () => {
        it('should get a name via getName()', () => {
            const name = "Jessie";
            const employee = new Employee(name, 2323, 'jessie@test.com');
            const employeeName = employee.getName();
            expect(employeeName).toBe(name); 
        });

        it('should get id via getId()', () => {
            const id = 2323;
            const employee = new Employee('Jessie', id, "jessie@test.com");
            const employeeId = employee.getId();
            expect(employeeId).toBe(id);
        });

        it('should get email via getEmail()', () => {
            const email = "jessie@test.com";
            const employee = new Employee('Jessie', 2323, email);
            const employeeEmail = employee.getEmail();
            expect(employeeEmail).toBe(email);
        });

        it('should get role via getRole()', () => {
            const role = "Employee";
            const employee = new Employee('Jessie', 2323, 'jessie@test.com');
            const employeeRole = employee.getRole();
            expect(employeeRole).toBe(role);
        });
    })

})