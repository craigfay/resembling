
const { run, testSuite } = require('waverunner');

run(testSuite(
  require('./index.test'),
));
