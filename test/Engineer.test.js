const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('init', () => {
        it('should set github', () => {
            const github = "jessiegithub";
            const engineer = new Engineer("Jessie", 2323, "jessie@test.com", github);
            expect(engineer.github).toBe(github);
        });
    });

    describe('Get methods', () => {
        it('should get github via getGithub()', () => {
            const github = "jessiegithub";
            const engineer = new Engineer("Jessie", 2323, "jessie@test.com", github);
            const engineerGithub = engineer.getGithub();
            expect(engineerGithub).toBe(github);
        });

        it('should get role via getRole()', () => {
            const role = "Engineer";
            const engineer = new Engineer('Jessie', 2323, 'jessie@test.com', 'jessiegithub');
            const engineerRole = engineer.getRole();
            expect(engineerRole).toBe(role);
        });
    })
})