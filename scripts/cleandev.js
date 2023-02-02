import { rm } from 'node:fs/promises';
import { relativeFileUrl } from './utils.js';

await rm(relativeFileUrl('../dist/Releases/dev'), { force: true, recursive: true });
await rm(relativeFileUrl('../dist/resources/dev'), { force: true, recursive: true });
