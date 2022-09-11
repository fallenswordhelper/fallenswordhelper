import createDiv from '../common/cElement/createDiv';
import closestTr from '../common/closestTr';
import getId from '../common/getId';
import getText from '../common/getText';
import insertElement from '../common/insertElement';
import querySelectorArray from '../common/querySelectorArray';
import getValue from '../system/getValue';
import getCombat from './playerLogWidgets/getCombat';

const tmp = (i) => `Group looted the item '<span class="fshGreen">${i}</span>'`;

async function addItem(a) {
  const row = closestTr(a);
  const json = await getCombat(row, getId(a));
  const itemName = json.r.combat.items?.[0].n;
  if (itemName) insertElement(row.cells[2], createDiv({ innerHTML: tmp(itemName) }));
}

export default function guildGroupCombat() {
  if (!getValue('groupCombatItems')) return;
  const combatLinks = querySelectorArray('a[href*="&combat_id="]');
  const victorious = combatLinks.filter((a) => getText(a.previousSibling).includes('victorious'));
  victorious.forEach(addItem);
}
