import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

function getBuiltUserscript() {
  return readFileSync(
    resolve(__dirname, '../dist/Releases/dev/fallenswordhelper.user.js'),
    'utf8',
  );
}

export default function devServerPlugin({ rootPath, core }) {
  function getDevUserscript() {
    const src = readFileSync(
      resolve(__dirname, '../src/fallenswordhelper.user.js'),
      'utf8',
    );
    return src
      .replaceAll('_VER', `${core}a`)
      .replace('_DLURL', `${rootPath}fallenswordhelper.user.js`)
      .replace('_CALFJS', `${rootPath}calfSystem.min.js`);
  }

  return {
    name: 'vite-plugin-dev-server',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/fallenswordhelper.user.js') {
          res.setHeader('Content-Type', 'application/javascript');
          res.end(getDevUserscript());
          return;
        }
        // Serve transformed entry point at /calfSystem.min.js
        if (req.url === '/calfSystem.min.js') {
          server.transformRequest('/src/calfSystem.js').then((result) => {
            res.setHeader('Content-Type', 'application/javascript');
            res.end(result?.code || '');
          }).catch(next);
          return;
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/fallenswordhelper.user.js') {
          res.setHeader('Content-Type', 'application/javascript');
          res.end(getBuiltUserscript());
          return;
        }
        next();
      });
    },
  };
}
