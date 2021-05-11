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
  const manager = new Manager('John', 234, 'john@bigj.com', 48);
  noEngineersArray.push(manager);
  const intern = new Intern('Peter', 58, 'petey_treaty@treats.co.uk', 'John 23rd')
  noEngineersArray.push(intern)
  return noEngineersArray;
}

function noInterns() {
  const noInternsArray = [];
  const manager = new Manager('John', 234, 'john@bigj.com', 48);
  noInternsArray.push(manager);
  const engineer = new Engineer('John', 234, 'john@bigj.com', 'BiGJ98');
  noInternsArray.push(engineer)
  return noInternsArray;
}

module.exports = { noManager, noEngineers, noInterns };