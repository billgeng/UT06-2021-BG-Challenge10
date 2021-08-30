const Intern = require('./lib/Intern.js');



test('Can set school by arguments',()=>{
    const testV = 'UOT';
    const em = new Intern('peter',23,'test@gmail.com',testV);
    expect(em.school).toBe(testV); 
});


test('Can get school by getSchool()',()=>{
    const testV = 'UOT';
    const em = new Intern('peter',23,'test@gmail.com',testV);
    expect(em.getSchool()).toBe(testV); 
});

test('getRole() should return correct role ', () =>{
    const testRole = 'Intern';
    const em = new Employee('peter',23,'test@gmail.com','UOT');
    expect(em.getRole()).toBe(testRole);
});