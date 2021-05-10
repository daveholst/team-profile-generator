const inquirer = require('inquirer');

const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');

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
  return newManager;
}

async function engineerBuilder() {
  const managerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "Enter Engineer's Name",
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter Engineer's ID Number",
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
      message: "Enter Engineers's Email Address",
    },
    {
      type: 'input',
      name: 'gitHubUserName',
      message: "Enter Engineer's GitHub Username",
    },
  ];
  const response = await inquirer.prompt(managerQuestions);
  const newEngineer = new Engineer(
    response.name,
    response.id,
    response.email,
    response.gitHubUserName
  );
  return newEngineer;
}

module.exports = { managerBuilder, engineerBuilder };
