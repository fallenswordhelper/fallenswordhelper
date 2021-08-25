import { cdn } from '../../system/system';
import getElementsByTagName from '../../common/getElementsByTagName';
import on from '../../common/on';
import querySelector from '../../common/querySelector';
import querySelectorArray from '../../common/querySelectorArray';
import sendEvent from '../../analytics/sendEvent';

const creatureTypeIndex = ['NORMAL', 'CHAMPION', 'ELITE', 'SUPER ELITE', 'TITAN', 'LEGENDARY'];
const normalCreatureList = ['LEGENDARY', 'NORMAL'];
const attackIconPrefix = `url("${cdn}ui/world/icon_action_attack_`;
let nineDown = false;

const getAttack = (creatureElement) => querySelector('.verb.attack', creatureElement);

const addAttack = (g) => g
  .slice(0, 8)
  .map(getAttack)
  .forEach((e, i) => {
    if (e !== null) {
      e.classList.add(`attack-${i + 1}`);
      e.style.backgroundImage = `${attackIconPrefix}${i + 1}.png")`;
    }
  });

const removeAttack = (g) => g
  .map(getAttack)
  .filter((e) => e)
  .forEach((e) => {
    e.classList.remove('attack-1', 'attack-2', 'attack-3', 'attack-4',
      'attack-5', 'attack-6', 'attack-7', 'attack-8');
    e.style.backgroundImage = '';
  });

function getCreatures(creatureType) {
  const index = creatureTypeIndex.indexOf(creatureType.toUpperCase());
  return querySelectorArray(`#actionList .actionListItem.creature.creature-${index}`);
}

function showChampAttack(toggle) {
  const normalCreatures = normalCreatureList.flatMap(getCreatures);
  const championCreatures = getCreatures('CHAMPION');

  const [g1, g2] = toggle
    ? [normalCreatures, championCreatures]
    : [championCreatures, normalCreatures];

  removeAttack(g1);
  addAttack(g2);
}

const keydownExclusions = [
  (e) => e.altKey,
  (e) => e.ctrlKey,
  (e) => e.shiftKey,
  (e) => e.target.tagName !== 'BODY',
  (e) => !e.code.match(/(Digit|Numpad)[1-9]/),
];

function champAttackListener(e) {
  // console.log('test', e);
  if (keydownExclusions.some((fn) => fn(e))) { return; }
  // console.log('passed', e);
  if (e.code.match(/(Digit|Numpad)9/) && !nineDown) {
    nineDown = true;
    showChampAttack(true);
  }
  if (!e.code.match(/(Digit|Numpad)[1-8]/)) { return; }
  const championCreatures = getCreatures('CHAMPION');
  const index = Number(e.code.slice(-1)) - 1;
  if (index < championCreatures.length) {
    const attack = getAttack(championCreatures[index]);
    if (attack) {
      sendEvent('world', 'ChampionAttack');
      // console.log('Sending Event!');
      // attack.click();
    }
  }
}

function hideChampAttackListener(e) {
  if (e.code.match(/(Digit|Numpad)9/) && nineDown) {
    nineDown = false;
    showChampAttack(false);
  }
}

export default function champAttacks() {
  const body = getElementsByTagName('body')[0];
  on(body, 'keydown', champAttackListener);
  on(body, 'keyup', hideChampAttackListener);
}
