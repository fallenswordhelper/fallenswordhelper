'use strict';

const { core } = require('./getVersion');
const fs = require('fs');
const gzipSize = require('gzip-size');

const kilobytes = 10.24;
const twoDp = 100;

function getFileSize(file) {
  const stats = fs.statSync(file);
  const fileSizeInKilobytes = Math.round(stats.size / kilobytes) / twoDp;
  console.log(`${file}: ${fileSizeInKilobytes}KB (no compression)`);

  const gsize = gzipSize.fileSync(file, { level: 5 });
  const gSizeInKilobytes = Math.round(gsize / kilobytes) / twoDp;
  console.log(`${file}: ${gSizeInKilobytes}KB (gzip)\n`);
}

getFileSize(`dist/resources/prod/${core}/calfSystem.min.js`);
