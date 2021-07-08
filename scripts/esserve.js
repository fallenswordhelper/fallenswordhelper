'use strict';

const { port: calfPort } = require('./config.json');
const esbuild = require('esbuild');
const process = require('process');
const proxy = require('./esproxy');
const sveltePlugin = require('esbuild-svelte');
const { calfVer, core } = require('./getVersion');

// Start esbuild's server on a random local port
esbuild.serve({
  servedir: process.cwd(),
}, {
  bundle: true,
  chunkNames: `${calfVer}/[name]-[hash]`,
  define: {
    defineDataTablesPath: `"https://localhost:${calfPort}/src/styles/dataTables.css"`,
    defineCalfPath: `"https://localhost:${calfPort}/dist/resources/watch/${core}/calfSystem.css"`,
    defineCalfVer: `"${calfVer}"`,
    defineUserIsDev: true,
  },
  entryPoints: ['src/calfSystem.js'],
  format: 'esm',
  outdir: `dist/resources/watch/${core}`,
  plugins: [sveltePlugin()],
  splitting: true,
}).then(proxy);
