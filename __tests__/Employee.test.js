const Employee = require('../lib/Employee.js');

describe('Employee Class', () => {
  it('throw error on no params passed', () => {
    expect(() => {
      new Employee();
    }).toThrow('Please pass an name, id and email');
  });
});

describe('Employee Class - Param types are correct', () => {
  it('throw error on incorrect param types', () => {
    expect(() => {
      new Employee(456, '47584', 9879);
    }).toThrow(
      'Param type should be [name: string, id: number, email: string]'
    );
  });
});

describe('Employee Class - Check if email is valid ', () => {
  it('throw error on incorrect param types', () => {
    expect(() => {
      new Employee('Dave', 123456, 'fakeEmail.com');
    }).toThrow('Invalid Email Entered');
  });
});
