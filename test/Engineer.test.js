const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('init', () => {
        it('should set github', () => {
            const github = "jessiegithub";
            const engineer = new Engineer("Jessie", 2323, "jessie@test.com", github);
            expect(engineer.github).toBe(github);
        })
    })
})