const Manager = require('./Manager.js')
const Engineer = require('./Engineer.js')
const Intern = require('./Intern.js')

// create an object with no managers
function noManager() {
  const noManagerArray = [];
  const engineer = new Engineer('John', 234, 'john@bigj.com', 'BiGJ98');
  noManagerArray.push(engineer);
  const intern = new Intern('Peter', 58, 'petey_treaty@treats.co.uk', 'John 23rd')
  noManagerArray.push(intern)
  return noManagerArray;
}
function noEngineers() {
  const noEngineersArray = [];
  const manager = new Manager('Bazza', 245, 'bazz@lovesshazz.com', 48);
  noEngineersArray.push(manager);
  const intern = new Intern('Peter', 58, 'petey_treaty@treats.co.uk', 'John 23rd')
  noEngineersArray.push(intern)
  return noEngineersArray;
}

function noInterns() {
  const noInternsArray = [];
  const manager = new Manager('Bazza', 245, 'bazz@lovesshazz.com', 48);
  noInternsArray.push(manager);
  const engineer = new Engineer('John', 234, 'john@bigj.com', 'BiGJ98');
  noInternsArray.push(engineer)
  return noInternsArray;
}

function allRoles() {
  const allRolesArray = [];
  const manager = new Manager('Bazza', 245, 'bazz@lovesshazz.com', 48);
  allRolesArray.push(manager);
  const engineer = new Engineer('John', 234, 'john@bigj.com', 'BiGJ98');
  allRolesArray.push(engineer)
  const intern = new Intern('Peter', 58, 'petey_treaty@treats.co.uk', 'John 23rd')
  allRolesArray.push(intern)
  return allRolesArray;
}

function fullTeam() {
  const allRolesArray = [];
  const manager = new Manager('Bazza', 245, 'bazz@lovesshazz.com', 48);
  allRolesArray.push(manager);
  const engineer = new Engineer('John', 234, 'john@bigj.com', 'BiGJ98');
  const engineer2 = new Engineer('Beth', 256, 'beth@bigj.com', 'beth_love_coding');
  const engineer3 = new Engineer('Karren', 1234, 'kazza@bigj.com', 'KaZzA_K0d3s');
  const engineer4 = new Engineer('Ruth', 6785, 'rudeth@bigj.com', 'tRUTHy');
  allRolesArray.push(engineer, engineer2, engineer3,engineer4)
  const intern = new Intern('Emily', 76, 'emily_56@treats.co.uk', 'John 23rd')
  const intern2 = new Intern('Peter', 34, 'petey_treaty@treats.co.uk', 'Scotch')
  const intern3 = new Intern('Rod', 989, 'nice_rod_rod@bannedEmail.io', 'Balga High')
  const intern4 = new Intern('Jen', 705, 'jennyfromdablock@coolemail.co', 'Christchurch')
  const intern5 = new Intern('Jase', 454, 'jase@isnotanace.pro', 'What is School?')
  allRolesArray.push(intern, intern2,intern3,intern4,intern5)
  return allRolesArray;
}


module.exports = { noManager, noEngineers, noInterns, allRoles , fullTeam};