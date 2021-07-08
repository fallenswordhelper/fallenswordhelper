/* eslint-disable no-console */

const { core } = require('./getVersion');
const fs = require('fs');
const gzipSize = require('gzip-size');

function getFileSize(file) {
  const stats = fs.statSync(file);
  const fileSizeInKilobytes = Math.round(stats.size / 10.24) / 100;
  console.log(`${file}: ${fileSizeInKilobytes}KB (no compression)`);

  const gsize = gzipSize.fileSync(file, { level: 5 });
  const gSizeInKilobytes = Math.round(gsize / 10.24) / 100;
  console.log(`${file}: ${gSizeInKilobytes}KB (gzip)\n`);
}

getFileSize(`dist/resources/prod/${core}/calfSystem.min.js`);
