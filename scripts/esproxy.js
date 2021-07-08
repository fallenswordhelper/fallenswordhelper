const { port: calfPort } = require('./config.json');
const { core } = require('./getVersion');
const fs = require('fs');
const http = require('http');
const https = require('https');

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
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
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

function requestListener({ host, port }) {
  return (req, res) => {
    const options = {
      hostname: host,
      port,
      path: req.url,
      method: req.method,
      headers: req.headers,
    };

    if (req.url === '/dist/Releases/watch/fallenswordhelper.user.js') {
      fs.readFile('src/fallenswordhelper.user.js', 'utf8', sendFsh(res));
    } else {
      // Forward each incoming request to esbuild
      const proxyReq = http.request(options, forwardResponse(res));

      // Forward the body of the request to esbuild
      req.pipe(proxyReq, { end: true });
    }
  };
}

function proxy(result) {
  // The result tells us where esbuild's local server is
  https.createServer(keys, requestListener(result)).listen(calfPort);
}

module.exports = proxy;
