import {
  access,
  copyFile,
  mkdir,
  readdir,
  readFile,
  rm,
  writeFile,
} from 'node:fs/promises';
import { join } from 'node:path';

function relativeFileUrl(filepath) {
  return new URL(filepath, import.meta.url);
}

async function cleanTarget(filepath) {
  const fileUrl = relativeFileUrl(filepath);
  try {
    await access(fileUrl);
    const files = await readdir(fileUrl);
    await Promise.all(
      files.map((filename) =>
        rm(new URL(join(filepath, filename), import.meta.url), {
          recursive: true,
        }),
      ),
    );
  } catch {
    await mkdir(fileUrl, { recursive: true });
  }
}

export async function buildFsh(fshPath, ver, dlPath, calfPath) {
  await cleanTarget(`../${fshPath}`);

  const src = await readFile(
    relativeFileUrl('../src/fallenswordhelper.user.js'),
    'utf8',
  );

  const fsh = src
    .replaceAll('_VER', ver)
    .replace('_DLURL', `${dlPath}/fallenswordhelper.user.js`)
    .replace('_CALFJS', calfPath);

  await writeFile(
    relativeFileUrl(`../${fshPath}/fallenswordhelper.user.js`),
    fsh,
  );
}

export async function copyDataTablesCss(outDir) {
  await copyFile(
    relativeFileUrl('../src/styles/dataTables.css'),
    relativeFileUrl(`../${outDir}/dataTables.css`),
  );
}
