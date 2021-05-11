const reportBuilder = require('../lib/reportBuilder.js');
const {
  noManager,
  noEngineers,
  noInterns,
  allRoles,
  fullTeam,
} = require('../lib/testObjects');

describe('Generate Empty Report', () => {
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

describe('Generate Inters', () => {
  it('generates a report when no Inters are given', () => {
    expect(reportBuilder(noInterns())).toMatchSnapshot();
  });
  it('generates a report with Interns when Inters are given', () => {
    expect(reportBuilder(allRoles())).toMatchSnapshot();
  });
});

describe('Generate Larger Report', () => {
  it('generates an full report when a team of 10 is given', () => {
    expect(reportBuilder(fullTeam())).toMatchSnapshot();
  });
});
