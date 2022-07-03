const { port } = require('./scripts/config.json');

module.exports = {
  port,
  http2: true,
  key: 'key.pem',
  cert: 'cert.pem',
};
