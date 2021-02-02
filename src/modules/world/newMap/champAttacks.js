import getElementsByTagName from '../../common/getElementsByTagName';
import on from '../../common/on';
import querySelectorArray from '../../common/querySelectorArray';

function toggleAttackImages(showCommon) {
  const commonAttacks = querySelectorArray(
    '#actionList '
    + '.actionListItem.creature.creature-0 '
    + '.verb.attack',
  );
  const uncommonAttacks = querySelectorArray(
    '#actionList '
    + '.actionListItem.creature:not(.creature-0) '
    + '.verb.attack',
  );

  const [g1, g2] = showCommon
    ? [uncommonAttacks, commonAttacks]
    : [commonAttacks, uncommonAttacks];

  const blankURL = 'url("https://cdn2.fallensword.com/ui/world/icon_action_attack.png")';
  const numberedURLPrefix = 'url("https://cdn2.fallensword.com/ui/world/icon_action_attack_';

  g1.forEach((e) => {
    e.style.backgroundImage = blankURL;
  });
  g2.forEach((e, i) => {
    if (i < 8) {
      e.style.backgroundImage = `${numberedURLPrefix}${i + 1}.png")`;
    }
  });
}

export default function addListeners() {
  let nineDown = false;
  on(document, 'keydown', (e) => {
    if (e.key === '9') {
      toggleAttackImages(false);
      nineDown = true;
    }
  });

  on(document, 'keyup', (e) => {
    if (e.key === '9') {
      toggleAttackImages(true);
      nineDown = false;
    }
  });

  const html = getElementsByTagName('html')[0];
  on(html, 'keydown', (e) => {
    if (nineDown && e.key.match(/[1-8]/)) {
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
  });
}
