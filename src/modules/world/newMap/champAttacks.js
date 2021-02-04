import getElementsByTagName from '../../common/getElementsByTagName';
import on from '../../common/on';
import querySelectorArray from '../../common/querySelectorArray';

let isNineDown = false;

function toggleAttackImages(showCommon) {
  const commonAttacks = querySelectorArray(
    '#actionList .actionListItem.creature.creature-0 .verb.attack',
  );
  const uncommonAttacks = querySelectorArray(
    '#actionList .actionListItem.creature:not(.creature-0) .verb.attack',
  );

  const [g1, g2] = showCommon
    ? [uncommonAttacks, commonAttacks]
    : [commonAttacks, uncommonAttacks];

  const blankURL = 'url("https://cdn2.fallensword.com/ui/world/icon_action_attack.png")';
  const numberedURLPrefix = 'url("https://cdn2.fallensword.com/ui/world/icon_action_attack_';

  g1.forEach((e) => { e.style.backgroundImage = blankURL; });
  g2.filter((e, i) => i < 8).forEach((e, i) => {
    e.style.backgroundImage = `${numberedURLPrefix}${i + 1}.png")`;
  });
}

function nineDown(e) {
  if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && e.key === '9') {
    toggleAttackImages(false);
    isNineDown = true;
  }
}

function nineUp(e) {
  if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && e.key === '9') {
    toggleAttackImages(true);
    isNineDown = false;
  }
}

function nineListeners() {
  on(document, 'keydown', nineDown);
  on(document, 'keyup', nineUp);
}

function attackChamp(e) {
  if (!isNineDown || !e.key.match(/[1-8]/)) { return; }
  e.stopPropagation();
  const uncommonAttacks = querySelectorArray(
    '#actionList '
    + '.actionListItem.creature:not(.creature-0) '
    + '.verb.attack',
  );
  const index = parseInt(e.key, 10) - 1;
  if (index < uncommonAttacks.length) {
    uncommonAttacks[index].click();
  }
}

export default function champAttacks() {
  nineListeners();
  const body = getElementsByTagName('body')[0];
  on(body, 'keydown', attackChamp);
}
