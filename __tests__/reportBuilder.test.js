const reportBuilder = require('../lib/reportBuilder.js');
const {
  noManager,
  noEngineers,
  noInterns,
  allRoles,
} = require('../lib/testObjects');

describe('Generate Report', () => {
  it('generates an empty report when no team object given', () => {
    expect(reportBuilder([])).toMatchSnapshot();
  });
});

describe('Generate Managers', () => {
  it('generates a report when no managers are given', () => {
    expect(reportBuilder(noManager())).toMatchSnapshot();
  });
  it('generates a report with managers when managers are given', () => {
    expect(reportBuilder(allRoles())).toMatchSnapshot();
  });
});

describe('Generate Engineers', () => {
  it('generates a report when no Engineers are given', () => {
    expect(reportBuilder(noEngineers())).toMatchSnapshot();
  });
  it('generates a report with engineers when engineers are given', () => {
    expect(reportBuilder(allRoles())).toMatchSnapshot();
  });
});
