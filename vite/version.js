import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const pkg = JSON.parse(
  readFileSync(resolve(process.cwd(), 'package.json'), 'utf8'),
);
const { version } = pkg;
const [major, minor, calfVer] = version.split('.');
const core = major + minor;

export { calfVer, core, version };
