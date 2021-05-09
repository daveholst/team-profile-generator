const Employee = require('../lib/Employee.js');

describe('Employee Class - Constructor', () => {
  it('throw error on no params passed', () => {
    expect(() => {
      new Employee();
    }).toThrow('Please pass an name, id and email');
  });

  it('throw error on incorrect param types', () => {
    expect(() => {
      new Employee(456, '47584', 9879);
    }).toThrow(
      'Param type should be [name: string, id: number, email: string]'
    );
  });

  it('throw error on incorrect param types', () => {
    expect(() => {
      new Employee('Dave', 123456, 'fakeEmail.com');
    }).toThrow('Invalid Email Entered');
  });

  it('throw error on incorrect param types', () => {
    expect(() => {
      new Employee('Dave', 123456, 'fakeEmail.com');
    }).toThrow('Invalid Email Entered');
  });

  it('creates a new employee object with relevant data from params', () => {
    expect(new Employee('Dave', 123456, 'dholst@glenholst.com.au')).toEqual({
      name: 'Dave',
      id: 123456,
      email: 'dholst@glenholst.com.au',
    });
  });
});

describe('Employee Class - Methods', () => {
  it('returns name with getName method', () => {
    const testEmployee = new Employee(
      'Dave',
      123456,
      'dholst@glenholst.com.au'
    );
    expect(testEmployee.getName()).toEqual('Dave');
  });
  it('returns ID with getId method', () => {
    const testEmployee = new Employee(
      'Dave',
      123456,
      'dholst@glenholst.com.au'
    );
    expect(testEmployee.getId()).toEqual(123456);
  });
  it('returns email with getEmail method', () => {
    const testEmployee = new Employee(
      'Dave',
      123456,
      'dholst@glenholst.com.au'
    );
    expect(testEmployee.getEmail()).toEqual('dholst@glenholst.com.au');
  });
  it('returns role with getRole method', () => {
    const testEmployee = new Employee(
      'Dave',
      123456,
      'dholst@glenholst.com.au'
    );
    expect(testEmployee.getRole()).toEqual('Employee');
  });
});
