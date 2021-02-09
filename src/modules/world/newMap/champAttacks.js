import getElementsByTagName from '../../common/getElementsByTagName';
import on from '../../common/on';
import querySelectorArray from '../../common/querySelectorArray';

const creatureTypeIndex = ['NORMAL', 'CHAMPION', 'ELITE', 'SUPER ELITE', 'TITAN', 'LEGENDARY'];

function getCreatureAttacks(creatureTypes) {
  if (typeof creatureTypes === 'string') {
    const index = creatureTypeIndex.indexOf(creatureTypes.toUpperCase);
    return querySelectorArray(
      `#actionList .actionListItem.creature.creature-${index} .verb.attack`,
    );
  }
  if (Symbol.iterator in Object(creatureTypes)) {
    const attacks = Array.from(creatureTypes).map((c) => getCreatureAttacks(c));
    return attacks.flat();
  }
  return false;
}

function showChampAttack(toggle) {
  const normalAttacks = getCreatureAttacks(['NORMAL', 'LEGENDARY']);
  const championAttacks = getCreatureAttacks('CHAMPION');

  const [g1, g2] = toggle
    ? [normalAttacks, championAttacks]
    : [championAttacks, normalAttacks];

  const blankURL = 'url("https://cdn2.fallensword.com/ui/world/icon_action_attack.png")';
  const numberedURLPrefix = 'url("https://cdn2.fallensword.com/ui/world/icon_action_attack_';

  g1.forEach((e) => { e.style.backgroundImage = blankURL; });
  g2.filter((e, i) => i < 8).forEach((e, i) => {
    e.style.backgroundImage = `${numberedURLPrefix}${i + 1}.png")`;
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
  const championAttacks = getCreatureAttacks('CHAMPION');
  const index = parseInt(e.code.slice(-1), 10) - 1;
  if (index < championAttacks.length) {
    championAttacks[index].click();
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
