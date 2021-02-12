import { cdn } from '../../system/system';
import getElementsByTagName from '../../common/getElementsByTagName';
import on from '../../common/on';
import querySelector from '../../common/querySelector';
import querySelectorArray from '../../common/querySelectorArray';
import { sendEvent } from '../../support/fshGa';

const creatureTypeIndex = ['NORMAL', 'CHAMPION', 'ELITE', 'SUPER ELITE', 'TITAN', 'LEGENDARY'];

function getAttack(creatureElement) {
  return querySelector('.verb.attack', creatureElement);
}

function getCreatures(creatureType) {
  const index = creatureTypeIndex.indexOf(creatureType.toUpperCase());
  return querySelectorArray(
    `#actionList .actionListItem.creature.creature-${index}`,
  );
}

function showChampAttack(toggle) {
  const normalCreatures = ['LEGENDARY', 'NORMAL'].flatmap((e) => getCreatures(e));
  const championCreatures = getCreatures('CHAMPION');

  const [g1, g2] = toggle
    ? [normalCreatures, championCreatures]
    : [championCreatures, normalCreatures];

  const blankURL = `url("${cdn}ui/world/icon_action_attack.png")`;
  const numberedURLPrefix = `url("${cdn}ui/world/icon_action_attack_`;

  g1.map(getAttack)
    .filter((e) => e !== null)
    .forEach((e) => {
      e.style.backgroundImage = blankURL;
    });
  g2.splice(0, 8)
    .map(getAttack)
    .forEach((e, i) => {
      if (e !== null) {
        e.style.backgroundImage = `${numberedURLPrefix}${i + 1}.png")`;
      }
    });
}

function champAttackListener(e) {
  if (!e.ctrlKey
    || !e.shiftKey
    || e.target.tagName === 'INPUT'
    || e.target.tagName === 'TEXTAREA') { return; }
  showChampAttack(true);
  if (!e.code.match(/(Digit|Numpad)[1-8]/)) { return; }
  e.stopPropagation();
  const championCreatures = getCreatures('CHAMPION');
  const index = parseInt(e.code.slice(-1), 10) - 1;
  if (index < championCreatures.length) {
    const attack = getAttack(championCreatures[index]);
    if (attack !== null) {
      sendEvent('world', 'ChampionAttack');
      attack.click();
    }
  }
}

function hideChampAttackListener(e) {
  if (!e.ctrlKey || !e.shiftKey) { showChampAttack(false); }
}

export default function champAttacks() {
  const body = getElementsByTagName('body')[0];
  on(body, 'keydown', champAttackListener);
  on(body, 'keyup', hideChampAttackListener);
}
