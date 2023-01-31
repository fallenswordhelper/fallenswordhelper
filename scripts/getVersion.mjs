import { readFile } from 'fs/promises';

const pkgUrl = new URL('../package.json', import.meta.url);
const pkg = await readFile(pkgUrl, 'utf8');
const { version } = JSON.parse(pkg);
const [major, minor, calfVer] = version.split('.');
const core = major + minor;

export { calfVer, core, version };
