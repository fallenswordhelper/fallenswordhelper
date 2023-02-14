import { port } from './scripts/config.js';
import { pathToFile } from './scripts/utils.js';

export default {
  cert: pathToFile('cert.pem'),
  corsCredentials: true,
  corsPrivateNetworkAccess: true,
  http2: true,
  key: pathToFile('key.pem'),
  port,
  stack: [
    'lws-cors',
    'lws-rewrite',
    'lws-static',
    'lws-index',
  ],
};
