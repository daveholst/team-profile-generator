// import Employee to extend
const Employee = require('./Employee.js');

class Engineer extends Employee {
  constructor(name, id, email, gitHubUserName) {
    super(name, id, email);
    if (gitHubUserName === undefined) {
      throw Error('Please  include a GitHub User Name when adding a Engineer');
    }
    if (typeof gitHubUserName !== 'string') {
      throw Error('GitHub Username Must be a String');
    }
    this.gitHubUserName = gitHubUserName;
  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;
