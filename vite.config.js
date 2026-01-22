import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { buildFsh, copyDataTablesCss } from './scripts/buildFsh.js';
import { github, port } from './scripts/config.js';
import cssoPlugin from './vite/vite-plugin-csso.js';
import devServerPlugin from './vite/vite-plugin-dev-server.js';
import liquid from './vite/vite-plugin-liquid.js';
import { calfVer, core, version } from './vite/version.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

function getHttpsConfig() {
  try {
    return {
      key: readFileSync(resolve(__dirname, 'key.pem')),
      cert: readFileSync(resolve(__dirname, 'cert.pem')),
    };
  } catch {
    return undefined;
  }
}

function getBuildContext(command, mode) {
  const isDevServer = command === 'serve';
  const isBuild = command === 'build';
  const isDevBuild = isBuild && mode === 'development';
  const isProd = isBuild && !isDevBuild;
  const rootPath = isProd ? github : `https://localhost:${port}/`;
  const calfPath = `resources/${isProd ? 'prod' : 'dev'}/${core}`;
  const assetBase = isProd ? `${rootPath}${calfPath}/` : rootPath;

  return { isDevServer, isBuild, isProd, rootPath, calfPath, assetBase };
}

function generateUserscript(ctx) {
  const { isProd, rootPath, assetBase } = ctx;
  const fshPath = isProd ? 'Releases/Current' : 'Releases/dev';
  buildFsh(
    `dist/${fshPath}`,
    isProd ? core : `${core}a`,
    isProd ? `${rootPath}${fshPath}` : rootPath.slice(0, -1),
    `${assetBase}calfSystem.min.js`,
  );
}

function assetPath(ctx, filename, sourcePath) {
  if (ctx.isDevServer) {
    return sourcePath ? JSON.stringify(`${ctx.rootPath}${sourcePath}`) : '""';
  }
  return JSON.stringify(`${ctx.assetBase}${filename}`);
}

export default defineConfig(({ command, mode }) => {
  const ctx = getBuildContext(command, mode);
  const httpsConfig = ctx.isBuild ? undefined : getHttpsConfig();

  if (ctx.isBuild) {
    generateUserscript(ctx);
  }

  return {
    plugins: [
      svelte({ emitCss: true }),
      liquid(),
      devServerPlugin({ rootPath: ctx.rootPath, core }),
      ctx.isProd && cssoPlugin(),
      ctx.isBuild && {
        name: 'copy-datatables-css',
        closeBundle: () => copyDataTablesCss(`dist/${ctx.calfPath}`),
      },
    ].filter(Boolean),

    define: {
      defineCalfPath: assetPath(ctx, 'calfSystem.min.css'),
      defineCalfVer: JSON.stringify(calfVer),
      defineDataTablesPath: assetPath(ctx, 'dataTables.css', 'src/styles/dataTables.css'),
      defineEnvironment: JSON.stringify(ctx.isProd ? 'production' : 'development'),
      defineUserIsDev: !ctx.isProd,
      defineVersion: JSON.stringify(version),
    },

    build: {
      target: 'esnext',
      outDir: `dist/${ctx.calfPath}`,
      emptyOutDir: true,
      lib: {
        entry: resolve(__dirname, 'src/calfSystem.js'),
        formats: ['es'],
        fileName: () => 'calfSystem.min.js',
      },
      cssCodeSplit: false,
      sourcemap: true,
      minify: ctx.isProd ? 'terser' : false,
      rollupOptions: {
        output: {
          chunkFileNames: `${calfVer}/[name]-[hash].js`,
          assetFileNames: 'calfSystem.min[extname]',
        },
      },
    },

    server: { port, https: httpsConfig, cors: true },
    preview: { port, https: httpsConfig, cors: true },
  };
});
