import calf from '../../../support/calf';
import { cdn } from '../../../system/system';
import badData from '../badData';
import {
  getMyStats,
  getStatArmor,
  getStatAttack,
  getStatDamage,
  getStatDefense,
  getStatHp,
  getStatLevel,
} from './getMyStats';

function tipHeader(creature) {
  return '<table><tr><td>'
    + `<img src="${cdn}creatures/${creature.image_id}.png" `
    + 'height="200" width="200"></td><td rowspan="2">'
    + '<table width="400"><tr>'
    + '<td class="header" colspan="4" class="fshCenter">Statistics</td></tr>';
}

const titleCell = (title) => `<td>${title}:&nbsp;</td>`;
const valueCell = (value) => `<td width="40%">${value}</td>`;

function genericColumns([title, value, yours, yourClass, getStatFn]) {
  return [
    titleCell(title),
    valueCell(`${value} (your ${yours}:<span class="${yourClass}">${getStatFn()}</span>)`),
  ];
}

function genericRow(incomingArray) {
  return [
    '<tr>',
    ...incomingArray,
    '</tr>',
  ].join('');
}

function tipClassLevel(creature, myLvlClas) {
  return genericRow([
    titleCell('Class'),
    valueCell(creature.creature_class),
    ...genericColumns(['Level', creature.level, 'level', myLvlClas, getStatLevel]),
  ]);
}

function genericStatRow(first, second) {
  return genericRow([
    ...genericColumns(first),
    ...genericColumns(second),
  ]);
}

function tipAttackDefense(creature) {
  return genericStatRow(
    ['Attack', creature.attack, 'defense', 'fshYellow', getStatDefense],
    ['Defense', creature.defense, 'attack', 'fshYellow', getStatAttack],
  );
}

function tipArmorDamage(creature) {
  return genericStatRow(
    ['Armor', creature.armor, 'damage', 'fshYellow', getStatDamage],
    ['Damage', creature.damage, 'armor', 'fshYellow', getStatArmor],
  );
}

function tipHp(creature, oneHitNumber) {
  return genericRow([
    titleCell('HP'),
    valueCell(`${creature.hp} (your HP:<span class="fshYellow">${
      getStatHp()}</span>)(1H: <span class="fshRed">${oneHitNumber}</span>)`),
    titleCell('Gold'),
    valueCell(creature.gold),
  ]);
}

const tipSpacer = '<tr><td colspan="4" height="5"></td></tr><tr>'
  + '<td class="header" colspan="4" class="fshCenter">Enhancements</td></tr>';

function enhancementRow(e) {
  return `<tr><td colspan="2">${
    e.name}:</td><td colspan="2">${e.value}</td></tr>`;
}

function tipEnhancements(creature) {
  if (creature.enhancements.length === 0) {
    return '<tr><td colspan="4">[no enhancements]</td></tr>';
  }
  return creature.enhancements.map(enhancementRow).join('');
}

function tipFooter(creature) {
  return '<tr><td colspan="4" height="5"></td></tr><tr>'
    + '<td class="header" colspan="4" class="fshCenter">Description</td>'
    + `</tr><tr><td colspan="4">${creature.description}</td></tr>`
    + '<tr><td colspan="4" height="5"></td></tr></table></td></tr>'
    + `<tr><td class="fshCenter"><b>${creature.name}</b></td></tr>`
    + '</table>';
}

function makeMonsterTip(creature, oneHitNumber, myLvlClas) {
  return tipHeader(creature)
    + tipClassLevel(creature, myLvlClas)
    + tipAttackDefense(creature)
    + tipArmorDamage(creature)
    + tipHp(creature, oneHitNumber)
    + tipSpacer
    + tipEnhancements(creature)
    + tipFooter(creature);
}

function doMouseOver(creature) {
  const oneHitNumber = Math.ceil(creature.hp * calf.hpVariable + creature.armor
    * calf.generalVariable);
  let myLvlClas = 'fshYellow';
  getMyStats();
  if (getStatLevel() > creature.level) { myLvlClas = 'fshRed'; }
  return makeMonsterTip(creature, oneHitNumber, myLvlClas);
}

export default function processMouseOver(data) {
  if (badData(data)) { return; }
  return doMouseOver(data.response.data);
}
