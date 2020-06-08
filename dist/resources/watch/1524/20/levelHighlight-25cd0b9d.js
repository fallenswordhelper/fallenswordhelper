import { G as getValue, H as defCharacterVirtualLevel, I as getElementsByClassName, J as defStatLevel } from './calfSystem-c0288c6c.js';
import { i as intValue } from './intValue-e7ac83e4.js';
import { v as valueText } from './valueText-77bcf3af.js';

let pvpLowerLevel;
let pvpUpperLevel;
let gvgLowerLevel;
let gvgUpperLevel;

const lowerGvgCalcs = [
  (levelToTest) => { if (levelToTest >= 801) { return 100; } },
  (levelToTest) => { if (levelToTest >= 752) { return levelToTest - 701; } },
  (levelToTest) => { if (levelToTest >= 351) { return 50; } },
  (levelToTest) => { if (levelToTest >= 326) { return levelToTest - 301; } },
  () => 25,
];

function calcLvlToTest() {
  return getValue(defCharacterVirtualLevel)
    || intValue(valueText(getElementsByClassName(defStatLevel)));
}

function lowerModifier(levelToTest) {
  return lowerGvgCalcs.find((ary) => ary(levelToTest))(levelToTest);
}

function calcLowerGvGLevel(levelToTest) {
  return levelToTest - lowerModifier(levelToTest);
}

function calcLowerPvpLevel(levelToTest) {
  let modifier = 10;
  if (levelToTest <= 209) { modifier = levelToTest - 200; }
  if (levelToTest <= 205) { modifier = 5; }
  return levelToTest - modifier;
}

function calcUpperPvpLevel(levelToTest) {
  let modifier = 10;
  if (levelToTest < 200) { modifier = 5; }
  return levelToTest + modifier;
}

function calcUpperGvgLevel(levelToTest) {
  let modifier = 100;
  if (levelToTest <= 700) { modifier = 50; }
  if (levelToTest <= 300) { modifier = 25; }
  return levelToTest + modifier;
}

function calculateBoundaries() {
  const levelToTest = calcLvlToTest();
  pvpLowerLevel = calcLowerPvpLevel(levelToTest);
  pvpUpperLevel = calcUpperPvpLevel(levelToTest);
  gvgLowerLevel = calcLowerGvGLevel(levelToTest);
  gvgUpperLevel = calcUpperGvgLevel(levelToTest);
}

export { pvpUpperLevel as a, gvgUpperLevel as b, calculateBoundaries as c, gvgLowerLevel as g, pvpLowerLevel as p };
//# sourceMappingURL=levelHighlight-25cd0b9d.js.map
