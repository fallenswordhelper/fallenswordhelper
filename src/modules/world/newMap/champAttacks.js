import getElementsByTagName from '../../common/getElementsByTagName';
import on from '../../common/on';
import querySelectorArray from '../../common/querySelectorArray';

function showChampAttack(toggle) {
  const commonAttacks = querySelectorArray(
    '#actionList .actionListItem.creature.creature-0 .verb.attack',
  );
  const uncommonAttacks = querySelectorArray(
    '#actionList .actionListItem.creature:not(.creature-0) .verb.attack',
  );

  const [g1, g2] = toggle
    ? [commonAttacks, uncommonAttacks]
    : [uncommonAttacks, commonAttacks];

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
  if (!e.key.match(/[*&^%$#@!]/)) { return; }
  e.stopPropagation();
  const uncommonAttacks = querySelectorArray(
    '#actionList '
    + '.actionListItem.creature:not(.creature-0) '
    + '.verb.attack',
  );
  const index = e.keyCode - 49;
  if (index < uncommonAttacks.length) {
    uncommonAttacks[index].click();
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
