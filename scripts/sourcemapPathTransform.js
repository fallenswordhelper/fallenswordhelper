'use strict';

const { readFileSync, writeFileSync } = require('fs');
const glob = require('tiny-glob');

function transform(file) {
  const data = readFileSync(file);
  const json = JSON.parse(data);
  json.sources = json.sources.map((source) => source.replaceAll('../', ''));
  writeFileSync(file, JSON.stringify(json));
}

(async function main() {
  const files = await glob('dist/resources/prod/**/*.map');
  files.forEach((map) => { transform(map); });
}());
