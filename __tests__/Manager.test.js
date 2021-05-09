const Manager = require('../lib/Manager.js');

describe('Manager Class - Constructor', () => {
  it('throw error on no email, name or id params passed', () => {
    expect(() => {
      new Manager();
    }).toThrow('Please pass an name, id and email');
  });
  it('throw error on officeNumber, param missing', () => {
    expect(() => {
      new Manager('Dave', 123456, 'dholst@glenholst.com.au');
    }).toThrow('Please  include an office number when adding a manager');
  });
  it('throw error if officeNumber is not an integer', () => {
    expect(() => {
      new Manager('Dave', 123456, 'dholst@glenholst.com.au', '123');
    }).toThrow('Office Number Must be an Integer');
  });
  it('creates a new Manager object with relevant data from params', () => {
    expect(new Manager('Dave', 123456, 'dholst@glenholst.com.au', 123)).toEqual(
      {
        name: 'Dave',
        id: 123456,
        email: 'dholst@glenholst.com.au',
        officeNumber: 123,
      }
    );
  });
});

describe('Manager Class - Methods', () => {
  it('mongerRole() method returns Manager', () => {
    const testManager = new Manager(
      'Dave',
      123456,
      'dholst@glenholst.com.au',
      123
    );
    expect(testManager.getRole()).toEqual('Manager');
  });
});
