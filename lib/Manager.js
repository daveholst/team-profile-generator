// import Employee to extend
const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    if (officeNumber === undefined) {
      throw Error('Please  include an office number when adding a manager');
    }
    if (typeof officeNumber !== 'number') {
      throw Error('Office Number Must be an Integer');
    }
    this.officeNumber = officeNumber;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;
