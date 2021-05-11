const reportBuilder = require('../lib/reportBuilder.js');
const { noManager, noEngineers, noInterns } = require('../lib/testObjects');

describe('Generate Report', () => {
  it('generates an empty report when no team object given', () => {
    expect(reportBuilder([])).toMatchSnapshot();
  });
});

describe('Generate Managers', () => {
  it('generates a report when no managers are given', () => {
    expect(reportBuilder(noManager())).toMatchSnapshot();
  });
});
