const Intern = require('../lib/Intern.js');

describe('Intern Class - Constructor', () => {
  it('throw error on no email, name or id params passed', () => {
    expect(() => {
      new Intern();
    }).toThrow('Please pass an name, id and email');
  });
  it('throw error on school, param missing', () => {
    expect(() => {
      new Intern('Dave', 123456, 'dholst@glenholst.com.au');
    }).toThrow('Please  include a school when adding an intern');
  });
  it('throw error if school is not a string', () => {
    expect(() => {
      new Intern('Dave', 123456, 'dholst@glenholst.com.au', 123);
    }).toThrow('School Must be a String');
  });
  it('creates a new Intern object with relevant data from params', () => {
    expect(
      new Intern('Dave', 123456, 'dholst@glenholst.com.au', 'Bunbury Grammar')
    ).toEqual({
      name: 'Dave',
      id: 123456,
      email: 'dholst@glenholst.com.au',
      school: 'Bunbury Grammar',
    });
  });
});

describe('Intern Class - Methods', () => {
  it('mongerRole() method returns Intern', () => {
    const testIntern = new Intern(
      'Dave',
      123456,
      'dholst@glenholst.com.au',
      'Bunbury Grammar'
    );
    expect(testIntern.getRole()).toEqual('Intern');
  });
});
