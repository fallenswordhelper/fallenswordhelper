import { writeFile } from 'node:fs/promises';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import { minify } from 'csso';
import css from 'rollup-plugin-css-only';
import svelte from 'rollup-plugin-svelte';
import { github, port } from './config.js';
import { calfVer, core } from './getVersion.js';
import liquid from './rollup-plugin-liquid.js';
import {
  buildFsh,
  dataTablesCss,
  pathToFile,
  relativeFileUrl,
} from './utils.js';

export default async function getRollupConfig(env) {
  const fshTarget = env === 'Prod' ? 'Current' : env;
  const calfPath = `resources/${env.toLowerCase()}/${core}`;
  const fshPath = `Releases/${fshTarget}`;
  const rootPath = env === 'Prod' ? `${github}` : `https://localhost:${port}/dist/`;
  const ver = env === 'dev' ? `${core}a` : `${core}`;

  await buildFsh(
    `dist/${fshPath}`,
    ver,
    `${rootPath}${fshPath}`,
    `${rootPath}${calfPath}/calfSystem.min.js`,
  );

  await dataTablesCss(`dist/${calfPath}`);

  return {
    input: pathToFile('src/calfSystem.js'),
    output: {
      assetFileNames: '[name][extname]',
      chunkFileNames: `${calfVer}/[name]-[hash].js`,
      dir: pathToFile(`dist/${calfPath}`),
      entryFileNames: '[name].min.js',
      format: 'es',
      sourcemap: true,
      sourcemapExcludeSources: true,
      ...(env === 'Prod' && { sourcemapPathTransform: (source) => source.replaceAll('../', '') }),
    },
    plugins: [
      svelte({ emitCss: true }),
      resolve(),
      replace({
        preventAssignment: true,
        values: {
          defineCalfPath: `"${rootPath}${calfPath}/calfSystem.min.css"`,
          defineDataTablesPath: `"${rootPath}${calfPath}/dataTables.css"`,
          defineCalfVer: `"${calfVer}"`,
          defineUserIsDev: 'true',
        },
      }),
      css({
        async output(styles) {
          await writeFile(
            relativeFileUrl(`../dist/${calfPath}/calfSystem.min.css`),
            minify(styles).css,
          );
        },
      }),
      json({ compact: true }),
      liquid(),
      terser({ output: { beautify: false, semicolons: false } }),
    ],
    treeshake: true,
  };
}
