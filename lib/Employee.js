const validitator = require('email-validator');

class Employee {
  constructor(name, id, email) {
    // check if any params are undefined / missing
    const missingParams =
      name === undefined || id === undefined || email === undefined;
    if (missingParams === true)
      throw Error('Please pass an name, id and email');
    // check param types
    const incorrectParamType =
      typeof name !== 'string' ||
      typeof id !== 'number' ||
      typeof email !== 'string';
    if (incorrectParamType === true)
      throw Error(
        'Param type should be [name: string, id: number, email: string]'
      );
    // check if email is valid
    const vaildEmail = validitator.validate(email);
    if (vaildEmail === false) throw Error('Invalid Email Entered');
  }
}

// export module
module.exports = Employee;
