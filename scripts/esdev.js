import { PerformanceObserver, performance } from 'node:perf_hooks';
import esbuild from 'esbuild';
import sveltePlugin from 'esbuild-svelte';
import { port as calfPort } from './config.js';
import { calfVer, core } from './getVersion.js';
import htmlPlugin from './htmlPlugin.js';
import {
  buildFsh,
  dataTablesCss,
  pathToFile,
  perfLogger,
} from './utils.js';

const perfObserver = new PerformanceObserver(perfLogger);
perfObserver.observe({ entryTypes: ['measure'], buffer: true });

const rootPath = `https://localhost:${calfPort}/`;
const fshPath = 'dist/Releases/dev';
const calfPath = `dist/resources/dev/${core}`;

await buildFsh(
  fshPath,
  `${core}a`,
  `${rootPath}${fshPath}`,
  `${rootPath}${calfPath}/calfSystem.min.js`,
);

await dataTablesCss(calfPath);

performance.mark('esbuild-start');

await esbuild.build({
  bundle: true,
  chunkNames: `${calfVer}/[name]-[hash]`,
  define: {
    defineCalfPath: `"${rootPath}${calfPath}/calfSystem.min.css"`,
    defineDataTablesPath: `"${rootPath}${calfPath}/dataTables.css"`,
    defineCalfVer: `"${calfVer}"`,
    defineUserIsDev: 'true',
  },
  entryPoints: [pathToFile('src/calfSystem.js')],
  entryNames: '[name].min',
  format: 'esm',
  legalComments: 'none',
  minify: true,
  outdir: pathToFile(calfPath),
  plugins: [htmlPlugin, sveltePlugin()],
  sourcemap: true,
  sourcesContent: false,
  splitting: true,
});

performance.mark('esbuild-end');
performance.measure('esbuild', 'esbuild-start', 'esbuild-end');
