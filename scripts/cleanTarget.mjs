import {
  access,
  mkdir,
  readdir,
  rm,
} from 'node:fs/promises';
import path from 'node:path';

const myUrl = (filepath) => new URL(filepath, import.meta.url);

export default async function cleanTarget(filepath) {
  const fileUrl = myUrl(filepath);
  let accessErr = false;
  try {
    await access(fileUrl);
  } catch (error) {
    accessErr = true;
  }

  if (accessErr) await mkdir(fileUrl, { recursive: true });

  const files = await readdir(fileUrl);
  await Promise.all(
    files.map((filename) => rm(myUrl(path.join(filepath, filename)), { recursive: true })),
  );
}
