const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('init', () => {
        it('should set school', () => {
            const school = 'GT';
            const intern = new Intern("Jessie", 2323, "jessie@test.com", school);
            expect(intern.school).toBe(school);
        });
    });

    describe('Get methods', () => {
        it('should get school via getSchool()', () => {
            const school = 'GT';
            const intern = new Intern("Jessie", 2323, "jessie@test.com", school);
            const internSchool = intern.getSchool();
            expect(internSchool).toBe(school);
        });

        it('should get role via getRole()', () => {
            const role = "Intern";
            const intern = new Intern('Jessie', 2323, 'jessie@test.com', 111);
            const internRole = intern.getRole();
            expect(internRole).toBe(role);
        });
    })
})