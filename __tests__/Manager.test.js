const Manager = require('../lib/Manager.js');


test('Can set office number by arguments',()=>{
    const testN = 612;
    const em = new Manager('peter',23,'test@gmail.com',testN);
    expect(em.officenumber).toBe(testN); 
});


test('Can get office number by getOfficenumber()',()=>{
    const testN = 612;
    const em = new Manager('peter',23,'test@gmail.com',testN);
    expect(em.getOfficenumber()).toBe(testN); 
});

test('getRole() should return correct role ', () =>{
    const testRole = 'Manager';
    const em = new Manager('peter',23,'test@gmail.com',612);
    expect(em.getRole()).toBe(testRole);
});