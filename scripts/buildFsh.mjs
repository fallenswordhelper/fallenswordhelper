import { readFile, writeFile } from 'fs/promises';
import cleanTarget from './cleanTarget.mjs';

const myUrl = (filepath) => new URL(filepath, import.meta.url);

export default async function buildFsh(fshPath, ver, dlPath, calfPath) {
  await cleanTarget(`../${fshPath}`);

  const src = await readFile(myUrl('../src/fallenswordhelper.user.js'), 'utf8');

  const fsh = src
    .replaceAll('_VER', ver)
    .replace('_DLURL', `${dlPath}/fallenswordhelper.user.js`)
    .replace('_CALFJS', `${calfPath}/calfSystem.js`);

  await writeFile(myUrl(`../${fshPath}/fallenswordhelper.user.js`), fsh);
}
