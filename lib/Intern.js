// import Employee to extend
const Employee = require('./Employee.js');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    if (school === undefined) {
      throw Error('Please  include a school when adding an intern');
    }
    if (typeof school !== 'string') {
      throw Error('School Must be a String');
    }
    this.school = school;
  }

  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;
