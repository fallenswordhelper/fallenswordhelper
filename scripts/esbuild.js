'use strict';

const {
  copyFileSync,
  readFileSync,
  writeFileSync,
} = require('fs');
const { performance, PerformanceObserver } = require('perf_hooks');
const esbuild = require('esbuild');
const sveltePlugin = require('esbuild-svelte');
const cleanTarget = require('./cleanTarget');
const { github } = require('./config.json');
const { calfVer, core, version } = require('./getVersion');
const perfLogger = require('./perfLogger');

const perfObserver = new PerformanceObserver(perfLogger);
perfObserver.observe({ entryTypes: ['measure'], buffer: true });

performance.mark('example-start');

const dist = 'dist/';
const fshPath = 'Releases/Current';
const calfPath = `resources/prod/${core}`;

cleanTarget(`${dist}${fshPath}`);

const fsh = readFileSync('src/fallenswordhelper.user.js', 'utf8')
  .replaceAll('_VER', `${core}`)
  .replace('_DLURL', `${github}${fshPath}/fallenswordhelper.user.js`)
  .replace('_CALFJS', `${github}${calfPath}/calfSystem.min.js`);
writeFileSync(`${dist}${fshPath}/fallenswordhelper.user.js`, fsh);

cleanTarget(`${dist}${calfPath}`);

copyFileSync('src/styles/dataTables.css', `${dist}${calfPath}/dataTables.css`);

performance.mark('esbuild-start');

esbuild.build({
  bundle: true,
  chunkNames: `${calfVer}/[name]-[hash]`,
  define: {
    defineCalfPath: `"${github}${calfPath}/calfSystem.min.css"`,
    defineDataTablesPath: `"${github}${calfPath}/dataTables.css"`,
    defineCalfVer: `"${calfVer}"`,
    defineUserIsDev: false,
  },
  entryPoints: ['src/calfSystem.js'],
  entryNames: '[name].min',
  format: 'esm',
  legalComments: 'none',
  minify: true,
  outdir: `${dist}${calfPath}`,
  plugins: [sveltePlugin()],
  sourceRoot: `https://rawcdn.githack.com/fallenswordhelper/fallenswordhelper/${version}`,
  sourcemap: true,
  sourcesContent: false,
  splitting: true,
}).then(() => {
  performance.mark('esbuild-end');
  performance.mark('example-end');
  performance.measure('esbuild', 'esbuild-start', 'esbuild-end');
  performance.measure('example', 'example-start', 'example-end');
});
