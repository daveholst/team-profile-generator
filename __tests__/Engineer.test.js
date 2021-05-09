const Engineer = require('../lib/Engineer.js');

describe('Engineer Class - Constructor', () => {
  it('throw error on no email, name or id params passed', () => {
    expect(() => {
      new Engineer();
    }).toThrow('Please pass an name, id and email');
  });
  it('throw error if GitHub User Name, param missing', () => {
    expect(() => {
      new Engineer('Dave', 123456, 'dholst@glenholst.com.au');
    }).toThrow('Please  include a GitHub User Name when adding a Engineer');
  });
  it('throw error if GitHub User Name is not a string', () => {
    expect(() => {
      new Engineer('Dave', 123456, 'dholst@glenholst.com.au', 123);
    }).toThrow('GitHub Username Must be a String');
  });
  it('creates a new Engineer object with relevant data from params', () => {
    expect(
      new Engineer('Dave', 123456, 'dholst@glenholst.com.au', 'daveholst')
    ).toEqual({
      name: 'Dave',
      id: 123456,
      email: 'dholst@glenholst.com.au',
      gitHubUserName: 'daveholst',
    });
  });
});

describe('Engineer Class - Methods', () => {
  it('mongerRole() method returns Engineer', () => {
    const testEngineer = new Engineer(
      'Dave',
      123456,
      'dholst@glenholst.com.au',
      'daveholst'
    );
    expect(testEngineer.getRole()).toEqual('Engineer');
  });
});
