import sendEvent from '../../analytics/sendEvent';
import clickThis from '../../common/clickThis';
import on from '../../common/on';
import querySelector from '../../common/querySelector';
import querySelectorArray from '../../common/querySelectorArray';
import { cdn } from '../../system/system';

const creatureTypeIndex = ['NORMAL', 'CHAMPION', 'ELITE', 'SUPER ELITE', 'TITAN', 'LEGENDARY'];
const attackIconPrefix = `url("${cdn}ui/world/icon_action_attack_`;
let altShiftDown = false;

function getAttack(creatureElement) {
  return querySelector('.verb.attack', creatureElement);
}

function getCreatures(creatureType) {
  const index = creatureTypeIndex.indexOf(creatureType.toUpperCase());
  return querySelectorArray(
    `#actionList .actionListItem.creature.creature-${index}`,
  );
}

function clearAttribs(e) {
  e.classList.remove(
    'attack-1',
    'attack-2',
    'attack-3',
    'attack-4',
    'attack-5',
    'attack-6',
    'attack-7',
    'attack-8',
  );
  e.style.backgroundImage = '';
}

function addAttribs(e, i) {
  if (e !== null) {
    e.classList.add(`attack-${i + 1}`);
    e.style.backgroundImage = `${attackIconPrefix}${i + 1}.png")`;
  }
}

function showChampAttack(toggle) {
  const normalCreatures = ['LEGENDARY', 'NORMAL'].flatMap(getCreatures);
  const championCreatures = getCreatures('CHAMPION');

  const [g1, g2] = toggle
    ? [normalCreatures, championCreatures]
    : [championCreatures, normalCreatures];

  g1.map(getAttack)
    .filter((e) => e !== null)
    .forEach(clearAttribs);
  g2.slice(0, 8)
    .map(getAttack)
    .forEach(addAttribs);
}

function tryAttack(creature) {
  const attack = getAttack(creature);
  if (attack) {
    sendEvent('world', 'ChampionAttack');
    clickThis(attack);
  }
}

function champAttackListener(e) {
  if (!e.altKey
    || !e.shiftKey
    || e.target.tagName === 'INPUT'
    || e.target.tagName === 'TEXTAREA') return;
  if (!altShiftDown) showChampAttack(true);
  altShiftDown = true;
  if (!/(?:Digit|Numpad)[1-8]/.test(e.code)) return;
  const championCreatures = getCreatures('CHAMPION');
  const index = parseInt(e.code.slice(-1), 10) - 1;
  if (index < championCreatures.length) tryAttack(championCreatures[index]);
}

function hideChampAttackListener(e) {
  if (altShiftDown && (!e.ctrlKey || !e.shiftKey)) {
    altShiftDown = false;
    showChampAttack(false);
  }
}

export default function champAttacks() {
  const { body } = document;
  on(body, 'keydown', champAttackListener);
  on(body, 'keyup', hideChampAttackListener);
}
