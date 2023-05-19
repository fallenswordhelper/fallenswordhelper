import { PerformanceObserver, performance } from 'node:perf_hooks';
import esbuild from 'esbuild';
import sveltePlugin from 'esbuild-svelte';
import { github } from './config.js';
import { calfVer, core, version } from './getVersion.js';
import liquidPlugin from './liquidPlugin.js';
import {
  buildFsh,
  dataTablesCss,
  pathToFile,
  perfLogger,
  sourcemapPathTransform,
} from './utils.js';

const perfObserver = new PerformanceObserver(perfLogger);
perfObserver.observe({ entryTypes: ['measure'], buffer: true });

const dist = 'dist/';
const fshPath = 'Releases/Current';
const calfPath = `resources/prod/${core}`;

await buildFsh(
  `${dist}${fshPath}`,
  `${core}`,
  `${github}${fshPath}`,
  `${github}${calfPath}/calfSystem.min.js`,
);

await dataTablesCss(`${dist}${calfPath}`);

performance.mark('esbuild-start');

await esbuild.build({
  bundle: true,
  chunkNames: `${calfVer}/[name]-[hash]`,
  define: {
    defineCalfPath: `"${github}${calfPath}/calfSystem.min.css"`,
    defineDataTablesPath: `"${github}${calfPath}/dataTables.css"`,
    defineCalfVer: `"${calfVer}"`,
    defineUserIsDev: 'false',
  },
  entryPoints: [pathToFile('src/calfSystem.js')],
  entryNames: '[name].min',
  format: 'esm',
  legalComments: 'none',
  minify: true,
  outdir: pathToFile(`${dist}${calfPath}`),
  plugins: [liquidPlugin, sveltePlugin()],
  sourceRoot: `https://rawcdn.githack.com/fallenswordhelper/fallenswordhelper/${version}`,
  sourcemap: true,
  sourcesContent: false,
  splitting: true,
});

performance.mark('esbuild-end');
performance.measure('esbuild', 'esbuild-start', 'esbuild-end');

await sourcemapPathTransform();
