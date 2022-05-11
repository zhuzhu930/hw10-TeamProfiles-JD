const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('init', () => {
        it('should set office number', () => {
            const officeNumber = 111;
            const manager = new Manager("Jessie", 2323, "jessie@test.com", officeNumber);
            expect(manager.officeNumber).toBe(officeNumber);
        });
    });

    describe('Get methods', () => {
        it('should get office number via getGithub()', () => {
            const officeNumber = 111;
            const manager = new Manager("Jessie", 2323, "jessie@test.com", officeNumber);
            const managerOfficeNumber = manager.getOfficeNumber();
            expect(managerOfficeNumber).toBe(officeNumber);
        });

        it('should get role via getRole()', () => {
            const role = "Manager";
            const manager = new Manager('Jessie', 2323, 'jessie@test.com', 111);
            const managerRole = manager.getRole();
            expect(managerRole).toBe(role);
        });
    })
})