import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { minify as cssoMinify } from 'csso';
import { defineConfig } from 'vite';
import { buildFsh, copyDataTablesCss } from './scripts/buildFsh.js';
import { github, port } from './scripts/config.js';
import liquid from './vite/vite-plugin-liquid.js';
import { calfVer, core, version } from './vite/version.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig(({ command, mode }) => {
  const isDevServer = command === 'serve';
  const isProd = command === 'build' && mode !== 'development';
  const useLocalUrls = !isProd; // dev server and build:dev use localhost
  const env = isProd ? 'prod' : 'dev';
  const rootPath = useLocalUrls ? `https://localhost:${port}/` : github;
  const calfPath = `resources/${env}/${core}`;

  // In dev server mode, serve userscript virtually; in build mode, write to disk
  if (command === 'build') {
    const fshPath = isProd ? 'Releases/Current' : 'Releases/dev';
    // For build:dev, preview serves from outDir so URLs are at root
    // For prod build, URLs include full path to GitHub CDN
    const calfJsUrl = isProd
      ? `${rootPath}${calfPath}/calfSystem.min.js`
      : `${rootPath}calfSystem.min.js`;
    const dlPath = isProd ? `${rootPath}${fshPath}` : rootPath.slice(0, -1);
    buildFsh(
      `dist/${fshPath}`,
      isProd ? core : `${core}a`,
      dlPath,
      calfJsUrl,
    );
  }

  // Generate dev userscript content
  function getDevUserscript() {
    const src = readFileSync(
      resolve(__dirname, 'src/fallenswordhelper.user.js'),
      'utf8',
    );
    return src
      .replaceAll('_VER', `${core}a`)
      .replace('_DLURL', `${rootPath}fallenswordhelper.user.js`)
      .replace('_CALFJS', `${rootPath}src/calfSystem.js`);
  }

  return {
    plugins: [
      svelte({ emitCss: true }),
      liquid(),
      // Dev server: serve userscript virtually
      command === 'serve' && {
        name: 'dev-server',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/fallenswordhelper.user.js') {
              res.setHeader('Content-Type', 'application/javascript');
              res.end(getDevUserscript());
              return;
            }
            next();
          });
        },
        configurePreviewServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/fallenswordhelper.user.js') {
              res.setHeader('Content-Type', 'application/javascript');
              res.end(
                readFileSync(
                  resolve(__dirname, 'dist/Releases/dev/fallenswordhelper.user.js'),
                  'utf8',
                ),
              );
              return;
            }
            next();
          });
        },
      },
      // CSSO minification for CSS in production only
      isProd && {
        name: 'csso-minify',
        generateBundle(_, bundle) {
          for (const [fileName, chunk] of Object.entries(bundle)) {
            if (fileName.endsWith('.css') && chunk.type === 'asset') {
              chunk.source = cssoMinify(chunk.source).css;
            }
          }
        },
      },
      // Copy dataTables.css after build
      command === 'build' && {
        name: 'copy-datatables-css',
        async closeBundle() {
          await copyDataTablesCss(`dist/${calfPath}`);
        },
      },
    ].filter(Boolean),

    define: {
      // Dev server injects CSS; build:dev serves from root; prod uses full CDN path
      defineCalfPath:
        isDevServer
          ? '""'
          : isProd
            ? JSON.stringify(`${rootPath}${calfPath}/calfSystem.min.css`)
            : JSON.stringify(`${rootPath}calfSystem.min.css`),
      defineCalfVer: JSON.stringify(calfVer),
      defineDataTablesPath:
        isDevServer
          ? '""'
          : isProd
            ? JSON.stringify(`${rootPath}${calfPath}/dataTables.css`)
            : JSON.stringify(`${rootPath}dataTables.css`),
      defineEnvironment: JSON.stringify(isProd ? 'production' : 'development'),
      defineUserIsDev: isProd ? 'false' : 'true',
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

    server: {
      port,
      https: {
        key: readFileSync(resolve(__dirname, 'key.pem')),
        cert: readFileSync(resolve(__dirname, 'cert.pem')),
      },
      cors: true,
    },

    preview: {
      port,
      https: {
        key: readFileSync(resolve(__dirname, 'key.pem')),
        cert: readFileSync(resolve(__dirname, 'cert.pem')),
      },
      cors: true,
    },
  };
});
