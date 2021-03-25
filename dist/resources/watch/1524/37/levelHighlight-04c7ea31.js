import { I as getValue, J as defCharacterVirtualLevel, K as getElementsByClassName, L as defStatLevel } from './calfSystem-6840a38e.js';
import { i as intValue } from './intValue-0e97c9b9.js';
import { v as valueText } from './valueText-6241396f.js';

let lvlToTest;

function calcLvlToTest() {
  if (!lvlToTest) {
    lvlToTest = getValue(defCharacterVirtualLevel)
      || intValue(valueText(getElementsByClassName(defStatLevel)));
  }
  return lvlToTest;
}

function getLowerPvpLevel() {
  const levelToTest = calcLvlToTest();
  let modifier = 10;
  if (levelToTest <= 209) { modifier = levelToTest - 200; }
  if (levelToTest <= 205) { modifier = 5; }
  return levelToTest - modifier;
}

function getUpperPvpLevel() {
  const levelToTest = calcLvlToTest();
  let modifier = 10;
  if (levelToTest < 200) { modifier = 5; }
  return levelToTest + modifier;
}

const lowerGvgCalcs = [
  [(levelToTest) => levelToTest >= 800, () => 100],
  [(levelToTest) => levelToTest >= 752, (levelToTest) => levelToTest - 701],
  [(levelToTest) => levelToTest >= 351, () => 50],
  [(levelToTest) => levelToTest >= 326, (levelToTest) => levelToTest - 301],
  [() => true, () => 25],
];

function lowerModifier(levelToTest) {
  return lowerGvgCalcs.find(([test]) => test(levelToTest))[1](levelToTest);
}

function getLowerGvGLevel() {
  const levelToTest = calcLvlToTest();
  return levelToTest - lowerModifier(levelToTest);
}

function getUpperGvgLevel() {
  const levelToTest = calcLvlToTest();
  let modifier = 100;
  if (levelToTest <= 700) { modifier = 50; }
  if (levelToTest <= 300) { modifier = 25; }
  return levelToTest + modifier;
}

export { getUpperPvpLevel as a, getLowerGvGLevel as b, getUpperGvgLevel as c, getLowerPvpLevel as g };
//# sourceMappingURL=levelHighlight-04c7ea31.js.map
