import {
  defStatArmor,
  defStatAttack,
  defStatDamage,
  defStatDefense,
  defStatHp,
} from '../support/constants';
import intValue from '../system/intValue';
import getElementById from './getElementById';
import getText from './getText';

let attackElement = 0;
let defenseElement = 0;
let armorElement = 0;
let damageElement = 0;
let hpElement = 0;

function getElements(doc) {
  attackElement = getElementById(defStatAttack, doc);
  defenseElement = getElementById(defStatDefense, doc);
  armorElement = getElementById(defStatArmor, doc);
  damageElement = getElementById(defStatDamage, doc);
  hpElement = getElementById(defStatHp, doc);
}

function statAsNumber(el) {
  if (el) {
    return intValue(getText(el));
  }
  return 0;
}

export default function groupViewStats(doc) {
  getElements(doc);
  return {
    attack: statAsNumber(attackElement),
    attackElement,
    defense: statAsNumber(defenseElement),
    defenseElement,
    armor: statAsNumber(armorElement),
    armorElement,
    damage: statAsNumber(damageElement),
    damageElement,
    hp: statAsNumber(hpElement),
    hpElement,
  };
}
