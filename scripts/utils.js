import {
  access,
  copyFile,
  mkdir,
  readdir,
  readFile,
  rm,
  writeFile,
} from 'node:fs/promises';
import {
  dirname,
  join,
  relative,
  resolve,
} from 'node:path';
import { fileURLToPath } from 'node:url';
import fastGlob from 'fast-glob';

export function relativeFileUrl(filepath) {
  return new URL(filepath, import.meta.url);
}

export const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

export function pathToFile(file) {
  return relative(process.cwd(), `${root}/${file}`);
}

export async function cleanTarget(filepath) {
  const fileUrl = relativeFileUrl(filepath);
  let accessErr = false;
  try {
    await access(fileUrl);
  } catch (error) {
    accessErr = true;
  }

  if (accessErr) await mkdir(fileUrl, { recursive: true });

  const files = await readdir(fileUrl);
  await Promise.all(files.map((filename) => rm(
    relativeFileUrl(join(filepath, filename)),
    { recursive: true },
  )));
}

export async function buildFsh(fshPath, ver, dlPath, calfPath) {
  await cleanTarget(`../${fshPath}`);

  const src = await readFile(relativeFileUrl('../src/fallenswordhelper.user.js'), 'utf8');

  const fsh = src
    .replaceAll('_VER', ver)
    .replace('_DLURL', `${dlPath}/fallenswordhelper.user.js`)
    .replace('_CALFJS', `${calfPath}`);

  await writeFile(relativeFileUrl(`../${fshPath}/fallenswordhelper.user.js`), fsh);
}

export async function dataTablesCss(calfPath) {
  await cleanTarget(`../${calfPath}`);

  await copyFile(
    relativeFileUrl('../src/styles/dataTables.css'),
    relativeFileUrl(`../${calfPath}/dataTables.css`),
  );
}

export function perfLogger(items) {
  items.getEntries().forEach((entry) => {
    console.log(entry.name, entry.duration);
  });
}

async function transform(file) {
  const data = await readFile(pathToFile(file), 'utf8');
  const json = JSON.parse(data);
  json.sources = json.sources.map((source) => source.replaceAll('../', ''));
  await writeFile(pathToFile(file), JSON.stringify(json));
}

export async function sourcemapPathTransform() {
  const files = await fastGlob('dist/resources/prod/**/*.map', { cwd: root });
  await Promise.all(files.map(transform));
}
