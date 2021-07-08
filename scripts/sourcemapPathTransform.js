const glob = require('tiny-glob');
const { readFileSync, writeFileSync } = require('fs');

function transform(file) {
  const data = readFileSync(file);
  const json = JSON.parse(data);
  json.sources = json.sources.map((source) => source.replaceAll('../', ''));
  writeFileSync(file, JSON.stringify(json));
}

(async function main() {
  const files = await glob('dist/resources/out/**/*.map');
  files.forEach((map) => { transform(map); });
}());
