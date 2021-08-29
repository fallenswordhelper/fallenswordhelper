'use strict';

const { port: calfPort } = require('./config.json');
const cleanTarget = require('./cleanTarget');
const esbuild = require('esbuild');
const process = require('process');
const sveltePlugin = require('esbuild-svelte');
const { calfVer, core } = require('./getVersion');
const {
  readFileSync,
  writeFileSync,
} = require('fs');

const dist = 'dist/';
const fshPath = 'Releases/watch';
const calfPath = `resources/watch/${core}`;

cleanTarget(`${dist}${fshPath}`);

const fsh = readFileSync('src/fallenswordhelper.user.js', 'utf8')
  .replaceAll('_VER', `${core}a`)
  .replace('_DLURL', `http://localhost:${calfPort}/${dist}${fshPath}/fallenswordhelper.user.js`)
  .replace('_CALFJS', `http://localhost:${calfPort}/${dist}${calfPath}/calfSystem.js`);
writeFileSync(`${dist}${fshPath}/fallenswordhelper.user.js`, fsh);

esbuild.serve({
  port: Number(calfPort),
  servedir: process.cwd(),
}, {
  bundle: true,
  chunkNames: `${calfVer}/[name]-[hash]`,
  define: {
    defineDataTablesPath: `"http://localhost:${calfPort}/src/styles/dataTables.css"`,
    defineCalfPath: `"http://localhost:${calfPort}/${dist}${calfPath}/calfSystem.css"`,
    defineCalfVer: `"${calfVer}"`,
    defineUserIsDev: true,
  },
  entryPoints: ['src/calfSystem.js'],
  format: 'esm',
  outdir: `${dist}${calfPath}`,
  plugins: [sveltePlugin()],
  sourcemap: true,
  sourcesContent: false,
  splitting: true,
});
