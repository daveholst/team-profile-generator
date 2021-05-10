const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

async function managerBuilder() {
  const managerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "Enter Team Manager's Name",
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter Team Manager's ID Number",
      validate: (value) => {
        if (value.isNan) {
          return 'please enter a number';
        }
        return true;
      },
      filter: (value) => parseInt(value),
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter Manager's Email Address",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Enter Manager's Office Number",
      filter: (value) => parseInt(value),
    },
  ];
  const response = await inquirer.prompt(managerQuestions);
  const newManager = new Manager(
    response.name,
    response.id,
    response.email,
    response.officeNumber
  );
  // console.log(newManager);
  return newManager;
}

async function employeeType() {
  const employeeTypeQuestions = [
    {
      type: 'list',
      name: 'employeeType',
      message: 'What would you like to do next',
      choices: ['Add an Engineer', 'Add an Intern', 'Finish Building Team'],
    },
  ];
  try {
    const manager = await managerBuilder();
    console.log(manager);
  } catch (error) {
    console.error(error);
  }
}

// async function buildManager(questions) {
//   const answers = await inquirer.prompt(questions)
// }

async function init() {
  const teamMembers = [];
  try {
    const manager = await managerBuilder();
    console.log(manager);
  } catch (error) {
    console.error(error);
  }
}

init();
