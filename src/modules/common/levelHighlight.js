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

export function getLowerGvGLevel() {
  return calcLowerGvgLevel(calcLvlToTest());
}

const upperGvgCalcs = [
  [(levelToTest) => levelToTest > 700, () => 100],
  [(levelToTest) => levelToTest > 300, () => 50],
  [(levelToTest) => levelToTest > 49, () => 25],
];

function calcUpperGvgLevel(levelToTest) {
  return levelToTest + getModifier(upperGvgCalcs, levelToTest);
}

export function getUpperGvgLevel() {
  return calcUpperGvgLevel(calcLvlToTest());
}
