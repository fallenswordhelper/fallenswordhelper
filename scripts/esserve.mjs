import { createRequire } from 'module';
import lws from 'local-web-server';

const require = createRequire(import.meta.url);
const {
  readFileSync,
  writeFileSync,
} = require('fs');
const process = require('process');
const esbuild = require('esbuild');
const sveltePlugin = require('esbuild-svelte');
const cleanTarget = require('./cleanTarget');
const { port: calfPort } = require('./config.json');
const { calfVer, core } = require('./getVersion');

const rootPath = `https://localhost:${calfPort}/`;
const fshPath = 'dist/Releases/watch';
const calfPath = `dist/resources/watch/${core}`;

cleanTarget(`${fshPath}`);

const fsh = readFileSync('src/fallenswordhelper.user.js', 'utf8')
  .replaceAll('_VER', `${core}a`)
  .replace('_DLURL', `${rootPath}${fshPath}/fallenswordhelper.user.js`)
  .replace('_CALFJS', `${rootPath}${calfPath}/calfSystem.js`);
writeFileSync(`${fshPath}/fallenswordhelper.user.js`, fsh);

esbuild.serve({
  servedir: process.cwd(),
}, {
  bundle: true,
  chunkNames: `${calfVer}/[name]-[hash]`,
  define: {
    defineDataTablesPath: `"${rootPath}src/styles/dataTables.css"`,
    defineCalfPath: `"${rootPath}${calfPath}/calfSystem.css"`,
    defineCalfVer: `"${calfVer}"`,
    defineUserIsDev: 'true',
  },
  entryPoints: ['src/calfSystem.js'],
  format: 'esm',
  outdir: `${calfPath}`,
  plugins: [sveltePlugin()],
  sourcemap: true,
  sourcesContent: false,
  splitting: true,
}).then(({ host, port }) => {
  console.log(`esbuild listening on http://${host}:${port}`);
  lws.create({
    cert: 'cert.pem',
    corsCredentials: true,
    http2: true,
    key: 'key.pem',
    port: Number(calfPort),
    rewrite: [{
      from: '/(.*)',
      to: `http://${host}:${port}/$1`,
    }],
    stack: ['scripts/mw-private-network.js', 'lws-cors', 'lws-rewrite'],
  }).then((ws) => {
    console.log(`lws listening on port ${ws.config.port}`);
  });
});
