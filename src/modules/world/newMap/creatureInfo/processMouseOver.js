import badData from '../badData';
import calf from '../../../support/calf';
import { cdn } from '../../../system/system';
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

function tipClassLevel(creature, myLvlClas) {
  return `<tr><td>Class:&nbsp;</td><td width="40%">${
    creature.creature_class}</td><td>Level:&nbsp;</td><td width="40%">${
    creature.level} (your level:<span class="${myLvlClas}">${
    getStatLevel()}</span>)</td></tr>`;
}

function tipAttackDefense(creature) {
  return `<tr><td>Attack:&nbsp;</td><td width="40%">${
    creature.attack} (your defense:<span class="fshYellow">${
    getStatDefense()}</span>)</td><td>Defense:&nbsp;</td><td width="40%">${
    creature.defense} (your attack:<span class="fshYellow">${
    getStatAttack()}</span>)</td></tr>`;
}

function tipArmorDamage(creature) {
  return `<tr><td>Armor:&nbsp;</td><td width="40%">${
    creature.armor} (your damage:<span class="fshYellow">${
    getStatDamage()}</span>)</td><td>Damage:&nbsp;</td><td width="40%">${
    creature.damage} (your armor:<span class="fshYellow">${
    getStatArmor()}</span>)</td></tr>`;
}

function tipHp(creature, oneHitNumber) {
  return `<tr><td>HP:&nbsp;</td><td width="40%">${
    creature.hp} (your HP:<span class="fshYellow">${
    getStatHp()}</span>)(1H: <span class="fshRed">${
    oneHitNumber}</span>)</td><td>Gold:&nbsp;</td><td width="40%">${
    creature.gold}</td></tr>`;
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
