import { readFile } from 'fs/promises';
import { relativeFileUrl } from './utils.js';

const pkgUrl = relativeFileUrl('../package.json');
const pkg = await readFile(pkgUrl, 'utf8');
const { version } = JSON.parse(pkg);
const [major, minor, calfVer] = version.split('.');
const core = major + minor;

export { calfVer, core, version };
