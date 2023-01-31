import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import esbuild from 'esbuild';
import sveltePlugin from 'esbuild-svelte';
import lws from 'local-web-server';
import buildFsh from './buildFsh.mjs';
import { port as calfPort } from './config.mjs';
import { calfVer, core } from './getVersion.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pathToFile = (file) => relative(process.cwd(), `${root}/${file}`);

const rootPath = `https://localhost:${calfPort}/`;
const fshPath = 'dist/Releases/watch';
const calfPath = `dist/resources/watch/${core}`;

buildFsh(fshPath, `${core}a`, `${rootPath}${fshPath}`, `${rootPath}${calfPath}`);

const ctx = await esbuild.context({
  bundle: true,
  chunkNames: `${calfVer}/[name]-[hash]`,
  define: {
    defineDataTablesPath: `"${rootPath}src/styles/dataTables.css"`,
    defineCalfPath: `"${rootPath}${calfPath}/calfSystem.css"`,
    defineCalfVer: `"${calfVer}"`,
    defineUserIsDev: 'true',
  },
  entryPoints: [pathToFile('src/calfSystem.js')],
  format: 'esm',
  outdir: pathToFile(calfPath),
  plugins: [sveltePlugin()],
  sourcemap: true,
  sourcesContent: false,
  splitting: true,
  write: false,
});

const { host, port } = await ctx.serve({ servedir: root });

console.log(`esbuild listening on http://${host}:${port}`);

const ws = await lws.create({
  corsCredentials: true,
  rewrite: [{
    from: '/(.*)',
    to: `http://${host}:${port}/$1`,
  }],
  stack: [pathToFile('scripts/mw-private-network.js'), 'lws-cors', 'lws-rewrite'],
});

console.log(`lws listening on port ${ws.config.port}`);
