const Employee = require('../lib/Employee.js');

describe('Employee Class', () => {
  it('throw error on no params passed', () => {
    expect(() => {
      new Employee();
    }).toThrow('Please pass an id, name and email');
  });
});
