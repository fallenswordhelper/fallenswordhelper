const fs = require('fs');

function getGvgRange(levelToTest) {
  if (levelToTest >= 700) {
    return 100 + Math.floor((levelToTest - 1) / 1000) * 25;
  }
  if (levelToTest > 300) {
    return 50;
  }
  return 25;
}

function calcUpperGvgLevel(levelToTest) {
  return levelToTest + getGvgRange(levelToTest);
}

const lowerGvgMins = [700, 301, 50, 0];

function calcLowerGvgMin(levelToTest) {
  if (levelToTest > 1000) {
    return Math.floor((levelToTest - 1) / 1000) * 1000 + 1;
  }
  return lowerGvgMins.find((i) => levelToTest > i);
}

function calcLowerGvgLevel(levelToTest) {
  const range = getGvgRange(levelToTest);
  return Math.max(
    levelToTest - range,
    calcLowerGvgMin(levelToTest),
  );
}

const lvls = Array(6500)
  .fill(0)
  .map((x, i) => `${i},${calcLowerGvgLevel(i)},${calcUpperGvgLevel(i)}`)
  .join('\n');

const oldGvgRanges = `Level,Lower,Upper\n${lvls}\n`;

fs.writeFile('new-gvg-ranges.csv', oldGvgRanges, 'utf-8', (err) => {
  if (err) console.log(err);
  else console.log('Data saved');
});
