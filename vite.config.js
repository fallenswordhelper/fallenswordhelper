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
    return false; // Certs not available (CI), disable HTTPS
  }
}

export default defineConfig(({ command, mode }) => {
  const httpsConfig = command !== 'build' ? getHttpsConfig() : false;
  const isDevServer = command === 'serve';
  const isBuild = command === 'build';
  const isProd = isBuild && mode !== 'development';
  const env = isProd ? 'prod' : 'dev';
  const rootPath = isProd ? github : `https://localhost:${port}/`;
  const calfPath = `resources/${env}/${core}`;

  // In build mode, generate userscript file
  if (isBuild) {
    const fshPath = isProd ? 'Releases/Current' : 'Releases/dev';
    const calfJsUrl = isProd
      ? `${rootPath}${calfPath}/calfSystem.min.js`
      : `${rootPath}calfSystem.min.js`;
    const dlPath = isProd ? `${rootPath}${fshPath}` : rootPath.slice(0, -1);
    buildFsh(`dist/${fshPath}`, isProd ? core : `${core}a`, dlPath, calfJsUrl);
  }

  // Helper for bundled asset paths (empty in dev server - Vite injects CSS)
  function bundledAssetPath(filename) {
    if (isDevServer) return '""';
    const base = isProd ? `${rootPath}${calfPath}/` : rootPath;
    return JSON.stringify(`${base}${filename}`);
  }

  // Helper for external asset paths (need explicit URL in all modes)
  function externalAssetPath(filename, sourcePath) {
    if (isDevServer) return JSON.stringify(`${rootPath}${sourcePath}`);
    const base = isProd ? `${rootPath}${calfPath}/` : rootPath;
    return JSON.stringify(`${base}${filename}`);
  }

  return {
    plugins: [
      svelte({ emitCss: true }),
      liquid(),
      devServerPlugin({ rootPath, core }),
      isProd && cssoPlugin(),
      isBuild && {
        name: 'copy-datatables-css',
        closeBundle: () => copyDataTablesCss(`dist/${calfPath}`),
      },
    ].filter(Boolean),

    define: {
      defineCalfPath: bundledAssetPath('calfSystem.min.css'),
      defineCalfVer: JSON.stringify(calfVer),
      defineDataTablesPath: externalAssetPath('dataTables.css', 'src/styles/dataTables.css'),
      defineEnvironment: JSON.stringify(env === 'prod' ? 'production' : 'development'),
      defineUserIsDev: env === 'dev',
      defineVersion: JSON.stringify(version),
    },

    build: {
      target: 'esnext',
      outDir: `dist/${calfPath}`,
      emptyOutDir: true,
      lib: {
        entry: resolve(__dirname, 'src/calfSystem.js'),
        formats: ['es'],
        fileName: () => 'calfSystem.min.js',
      },
      cssCodeSplit: false,
      sourcemap: true,
      minify: isProd ? 'terser' : false,
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
