import { rm } from 'node:fs/promises';

const dirs = ['dist/resources/dev', 'dist/Releases/dev'];

await Promise.all(
  dirs.map((dir) => rm(dir, { recursive: true, force: true })),
);
