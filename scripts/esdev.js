const { performance, PerformanceObserver } = require('perf_hooks');

const perfObserver = new PerformanceObserver((items) => {
  items.getEntries().forEach((entry) => {
    // eslint-disable-next-line no-console
    console.log(entry.name, entry.duration);
  });
});

perfObserver.observe({ entryTypes: ['measure'], buffer: true });

performance.mark('example-start');

const { port: calfPort } = require('./config.json');
const cleanTarget = require('./cleanTarget');
const esbuild = require('esbuild');
const sveltePlugin = require('esbuild-svelte');
const { calfVer, core } = require('./getVersion');
const {
  copyFileSync,
  readFileSync,
  writeFileSync,
} = require('fs');

const dist = 'dist/';
const fshPath = 'Releases/dev';
const calfPath = `resources/dev/${core}`;

cleanTarget(`${dist}${fshPath}`);

const fsh = readFileSync('src/fallenswordhelper.user.js', 'utf8')
  .replaceAll('_VER', `${core}a`)
  .replace('_DLURL', `https://localhost:${calfPort}/${dist}${fshPath}/fallenswordhelper.user.js`)
  .replace('_CALFJS', `https://localhost:${calfPort}/${dist}${calfPath}/calfSystem.min.js`);
writeFileSync(`${dist}${fshPath}/fallenswordhelper.user.js`, fsh);

cleanTarget(`${dist}${calfPath}`);

copyFileSync('src/styles/dataTables.css', `${dist}${calfPath}/dataTables.css`);

performance.mark('esbuild-start');

esbuild.build({
  bundle: true,
  chunkNames: `${calfVer}/[name]-[hash]`,
  define: {
    defineCalfPath: `"https://localhost:${calfPort}/${dist}${calfPath}/calfSystem.min.css"`,
    defineDataTablesPath: `"https://localhost:${calfPort}/${dist}${calfPath}/dataTables.css"`,
    defineCalfVer: `"${calfVer}"`,
    defineUserIsDev: true,
  },
  entryPoints: ['src/calfSystem.js'],
  entryNames: '[name].min',
  format: 'esm',
  legalComments: 'none',
  minify: true,
  outdir: `${dist}${calfPath}`,
  plugins: [sveltePlugin()],
  sourcemap: true,
  sourcesContent: false,
  splitting: true,
}).then(() => {
  performance.mark('esbuild-end');
  performance.mark('example-end');
  performance.measure('esbuild', 'esbuild-start', 'esbuild-end');
  performance.measure('example', 'example-start', 'example-end');
});
