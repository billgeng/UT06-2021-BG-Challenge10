const Engineer = require('../lib/Engineer.js');


test('Can set GitHub by arguments',()=>{
    const testE = 'githubuser';
    const em = new Engineer('peter',23,'test@gmail.com',testE);
    expect(em.github).toBe(testE); 
});

test('Can get GitHub by getGithub() ',() =>{
    const testE = 'githubuser';
    const em = new Engineer('peter',23,'test@gmail.com',testE);
    expect(em.getGithub()).toBe(testE);
});

test('getRole() should return correct role ', () =>{
    const testRole = 'Engineer';
    const em = new Engineer('peter',23,'test@gmail.com','githubuser');
    expect(em.getRole()).toBe(testRole);
});