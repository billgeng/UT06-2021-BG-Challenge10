const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');




const outdir = path.resolve(__dirname,'dist');
const outputPath = path.join(outdir,'index.html');

const render = require('./lib/htmlRender.js');

const newTeammembers = [];

//validate function 

const confirmName = async (name) => {
    if (name === '') {
        return 'please input correct answer';
    };
       return true;

};

const confirmNumber = async (number) => {
    if (number === '') {
        return 'please input correct number';
    } ; 
    return true;  
};

const  validateEmail = async (email) => {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
       return (true)
   } 
       return ('please input correct email address')

}

const managerQuestions = [
        
    {
        type: 'input',
        name:'name',
        message: 'What is Manager name?',
        validate: confirmName
    },
    {
        type: 'input',
        name:'id',
        message: 'What is Manager employee ID?',
        validate : confirmNumber
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is Manager email?',
        validate : validateEmail
        
    },   
    
    {
        type: 'input',
        name: 'officenumber',
        message: 'What is Manager officenumber?',
        validate: confirmNumber
        
    }
];

const positionQuestion = [
{
    type: 'list',
    name: 'team',
    message: 'What is the role of new team member ?',
    choices: ['Engineer','Intern','Done ,please quit']
}];


const engineerQuestions = [

{
    type: 'input',
    name:'name',
    message: 'What is Engineer name?',
    validate: confirmName
    
},
{
    type: 'input',
    name:'id',
    message: 'What is Engineer employee ID?',
    validate: confirmNumber
   
},
{
    type: 'input',
    name: 'email',
    message: 'What is Engineer email?',
    validate: validateEmail
    
},
{
    type: 'input',
    name: 'github',
    message: 'What is Engineer GitHub username?'
   
}
];

const internQuestions = [

{
    type: 'input',
    name:'name',
    message: 'What is Intern name?',
    validate: confirmName
   
},
{
    type: 'input',
    name:'id',
    message: 'What is Intern employee ID?',
    validate: confirmNumber
    
},
{
    type: 'input',
    name: 'email',
    message: 'What is Intern email?',
    validate: validateEmail
    
},
{
    type: 'input',
    name: 'school',
    message: 'What is the school of Intern from ?'
   
}];

function  addNewTeam() {
    inquirer.prompt (managerQuestions)
    .then (answers => {
        let manager= new Manager(answers.name,answers.id,answers.email,answers.officenumber);
        newTeammembers.push(manager);
        addEmployees();
    })
    .catch(err=>{
        console.log(err);
    });
   
    async function addEmployees() {
        try{

        let employeeType = await inquirer.prompt(positionQuestion);
          
          if (employeeType.team === 'Engineer') {
              inquirer.prompt(engineerQuestions)
              .then(answers => {
                 let engineer = new Engineer(answers.name,answers.id,answers.email,answers.github);
                 newTeammembers.push(engineer);
                 addEmployees();
              })
             .catch(err =>{
                 console.log(err);
             });
          } else if (employeeType.team === 'Intern') {
              inquirer.prompt(internQuestions)
              .then(answers => {
                  let intern = new Intern(answers.name,answers.id,answers.email,answers.school);
                  newTeammembers.push(intern);
                  addEmployees();
              })
              .catch(err =>{
                  console.log(err);
              }) ;   
          } else {creatNewTeam()}
    }   catch (err) {
        console.log(err);
    }
  }
};

addNewTeam();

function creatNewTeam () {
    
    fs.writeFileSync(outputPath, render(newTeammembers),'utf8');
};
