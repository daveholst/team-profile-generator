const inquirer = require('inquirer');

const {
  managerBuilder,
  engineerBuilder,
  internBuilder,
} = require('./lib/TeamBuilder');

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
    const response = await inquirer.prompt(employeeTypeQuestions);
    return response.employeeType;
  } catch (error) {
    console.error(error);
  }
}

const teamMembers = [];

async function teamBuilder() {
  try {
    // check if a manager exists in the teamMembers array (use officeNumber )
    if (!teamMembers.some((e) => e.officeNumber)) {
      const manager = await managerBuilder();
      teamMembers.push(manager);
      teamBuilder();
      return;
    }
    // query the user for next input type, or if finished
    const nextCall = await employeeType();
    if (nextCall === 'Add an Engineer') {
      const engineer = await engineerBuilder();
      teamMembers.push(engineer);
      teamBuilder();
      return;
    }
    if (nextCall === 'Add an Intern') {
      const intern = await internBuilder();
      teamMembers.push(intern);
      teamBuilder();
      return;
    }
    console.log('start building!');

    // ask what to build next

    // log out the teamMembers Array
    console.log(teamMembers);
  } catch (error) {
    console.error(error);
  }
}

teamBuilder();
