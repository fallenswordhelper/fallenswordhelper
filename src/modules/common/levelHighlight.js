import asInt from '../chrome/calcs/asInt';
import { defCharacterVirtualLevel, defStatLevel } from '../support/constants';
import getValue from '../system/getValue';

let lvlToTest = 0;

function getModifier(tests, levelToTest) {
  return tests.find(([test]) => test(levelToTest))?.[1](levelToTest);
}

function calcLvlToTest() {
  if (!lvlToTest) {
    lvlToTest = getValue(defCharacterVirtualLevel) || asInt(defStatLevel);
  }
  return lvlToTest;
}

const lowerPvpCalcs = [
  [(levelToTest) => levelToTest > 3999 + 50, () => 50],
  [(levelToTest) => levelToTest > 3999 + 40, (levelToTest) => levelToTest - 4000],
  [(levelToTest) => levelToTest > 2999 + 40, () => 40],
  [(levelToTest) => levelToTest > 2999 + 30, (levelToTest) => levelToTest - 3000],
  [(levelToTest) => levelToTest > 1999 + 30, () => 30],
  [(levelToTest) => levelToTest > 1999 + 20, (levelToTest) => levelToTest - 2000],
  [(levelToTest) => levelToTest > 999 + 20, () => 20],
  [(levelToTest) => levelToTest > 999 + 10, (levelToTest) => levelToTest - 1000],
  [(levelToTest) => levelToTest > 199 + 10, () => 10],
  [(levelToTest) => levelToTest > 199 + 5, (levelToTest) => levelToTest - 200],
  [(levelToTest) => levelToTest > 5, () => 5],
  [(levelToTest) => levelToTest > 0, (levelToTest) => levelToTest - 1],
];

function calcLowerPvpLevel(levelToTest) {
  return levelToTest - getModifier(lowerPvpCalcs, levelToTest);
}

export function getLowerPvpLevel() {
  return calcLowerPvpLevel(calcLvlToTest());
}

const upperPvPCalcs = [
  [(levelToTest) => levelToTest > 3999, () => 50],
  [(levelToTest) => levelToTest > 2999, () => 40],
  [(levelToTest) => levelToTest > 1999, () => 30],
  [(levelToTest) => levelToTest > 999, () => 20],
  [(levelToTest) => levelToTest > 199, () => 10],
  [() => true, () => 5],
];

function calcUpperPvpLevel(levelToTest) {
  return levelToTest + getModifier(upperPvPCalcs, levelToTest);
}

export function getUpperPvpLevel() {
  return calcUpperPvpLevel(calcLvlToTest());
}

function getGvgRange(levelToTest) {
  if (levelToTest > 700) {
    return 100 + Math.floor((levelToTest - 1) / 1000) * 25;
  }
  if (levelToTest > 300) {
    return 50;
  }
  return 25;
}

function calcUpperGvgLevel(levelToTest) {
  if (levelToTest < 50) {
    return 0;
  }
  return levelToTest + getGvgRange(levelToTest);
}

const lowerGvgMins = [701, 301, 50];
function calcLowerGvgMin(levelToTest) {
  if (levelToTest > 1000) {
    return Math.floor((levelToTest - 1) / 1000) * 1000 + 1;
  }
  return lowerGvgMins.find((i) => levelToTest >= i);
}

function calcLowerGvgLevel(levelToTest) {
  if (levelToTest < 50) {
    return 0;
  }
  const playerRange = getGvgRange(levelToTest);
  const bandMin = calcLowerGvgMin(levelToTest);
  if (levelToTest - playerRange < bandMin) {
    return Math.max(Math.min(bandMin, levelToTest - getGvgRange(levelToTest - playerRange)), 50);
  }
  return Math.max(levelToTest - playerRange, 50);
}

export function getUpperGvgLevel() {
  return calcUpperGvgLevel(calcLvlToTest());
}

export function getLowerGvGLevel() {
  return calcLowerGvgLevel(calcLvlToTest());
}
