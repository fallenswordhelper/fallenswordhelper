'use strict';

const { port: calfPort } = require('./config.json');
const { core } = require('./getVersion');
const fs = require('fs');
const http = require('http');
const https = require('https');

const ok = 200;

const keys = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.crt'),
};

function sendFsh(res) {
  return (err, data) => {
    if (err) throw err;
    const rewrite = data
      .replaceAll('_VER', `${core}a`)
      .replace('_DLURL', `https://localhost:${calfPort}/dist/Releases/watch/fallenswordhelper.user.js`)
      .replace('_CALFJS', `https://localhost:${calfPort}/dist/resources/watch/${core}/calfSystem.js`);
    res.writeHead(ok, { 'Content-Type': 'text/javascript' });
    res.end(rewrite, 'utf8');
  };
}

function forwardResponse(res) {
  return (proxyRes) => {
    // Forward the response from esbuild to the client
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  };
}

function forwardRequest(host, port, req, res) {
  if (req.url.startsWith('/dist/Releases/watch/')
        || req.url.startsWith('/dist/resources/watch/')
        || req.url.startsWith('/src/styles/')) {
    // Forward each incoming request to esbuild
    const proxyReq = http.request({
      hostname: host,
      port,
      path: req.url,
      method: req.method,
      headers: req.headers,
    }, forwardResponse(res));

    // Forward the body of the request to esbuild
    req.pipe(proxyReq, { end: true });
  }
}

function requestListener({ host, port }) {
  return (req, res) => {
    if (req.url === '/dist/Releases/watch/fallenswordhelper.user.js') {
      fs.readFile('src/fallenswordhelper.user.js', 'utf8', sendFsh(res));
    } else {
      forwardRequest(host, port, req, res);
    }
  };
}

function proxy(result) {
  // The result tells us where esbuild's local server is
  https.createServer(keys, requestListener(result)).listen(calfPort);
}

module.exports = proxy;
