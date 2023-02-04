import { port } from './scripts/config.js';
import { pathToFile } from './scripts/utils.js';

export default {
  cert: pathToFile('cert.pem'),
  corsCredentials: true,
  http2: true,
  key: pathToFile('key.pem'),
  port,
  stack: [
    pathToFile('scripts/mw-private-network.js'),
    'lws-cors',
    'lws-rewrite',
    'lws-static',
    'lws-index',
  ],
};
