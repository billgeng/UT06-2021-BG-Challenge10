const Employee = require('../lib/Employee.js');

test('Can instantiate Employee instance',() =>{
    const em = new Employee();
    expect(typeof (em)).toBe('object');
});

test('Can set name by arguments',() =>{
    const testName = 'Peter';
    const em = new Employee(testName);
    expect(em.name).toBe(testName);
});

test('Can set id by arguments',()=>{
    const testID = 100 ;
    const em = new Employee('peter',testID);
    expect(em.id).toBe(testID);
});

test('Can set email by arguments',()=>{
    const testE = 'test@gmail.com';
    const em = new Employee('peter',23,testE);
    expect(em.email).toBe(testE); 
});

test('Can get name by getName() ',() =>{
    const testName = 'Peter';
    const em = new Employee(testName);
    expect(em.getName()).toBe(testName);
});

test('Can get id by getId() ',()=>{
    const testID = 100 ;
    const em = new Employee('peter',testID);
    expect(em.getId()).toBe(testID);
});

test('Can get email by getEmail()',()=>{
    const testE = 'test@gmail.com';
    const em = new Employee('peter',23,testE);
    expect(em.getEmail()).toBe(testE); 
});

test('getRole() should return correct role ', () =>{
    const testRole = 'Employee';
    const em = new Employee('peter',23,'test@gmail.com');
    expect(em.getRole()).toBe(testRole);
});

