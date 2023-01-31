const { relative } = require('node:path');
const { port } = require('./scripts/config.json');

module.exports = {
  port,
  http2: true,
  key: relative(process.cwd(), `${__dirname}/key.pem`),
  cert: relative(process.cwd(), `${__dirname}/cert.pem`),
};
