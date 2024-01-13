const fs = require('fs');

function getModifier(tests, levelToTest) {
  return tests.find(([test]) => test(levelToTest))?.[1](levelToTest);
}

const lowerGvgCalcs = [
  [(levelToTest) => levelToTest > 700 + 100, () => 100],
  [(levelToTest) => levelToTest > 700 + 50, (levelToTest) => levelToTest - 701],
  [(levelToTest) => levelToTest > 300 + 50, () => 50],
  [(levelToTest) => levelToTest > 300 + 25, (levelToTest) => levelToTest - 301],
  [(levelToTest) => levelToTest > 49 + 25, () => 25],
  [(levelToTest) => levelToTest > 49, (levelToTest) => levelToTest - 50],
];

function calcLowerGvgLevel(levelToTest) {
  return levelToTest - getModifier(lowerGvgCalcs, levelToTest);
}

const upperGvgCalcs = [
  [(levelToTest) => levelToTest > 700, () => 100],
  [(levelToTest) => levelToTest > 300, () => 50],
  [(levelToTest) => levelToTest > 49, () => 25],
];

function calcUpperGvgLevel(levelToTest) {
  return levelToTest + getModifier(upperGvgCalcs, levelToTest);
}

const lvls = Array(6500)
  .fill(0)
  .map((x, i) => `${i},${calcLowerGvgLevel(i)},${calcUpperGvgLevel(i)}`)
  .join('\n');

const oldGvgRanges = `Level,Lower,Upper\n${lvls}\n`;

fs.writeFile('old-gvg-ranges.csv', oldGvgRanges, 'utf-8', (err) => {
  if (err) console.log(err);
  else console.log('Data saved');
});
