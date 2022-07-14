import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import getArrayByClassName from '../../common/getArrayByClassName';
import getTextTrim from '../../common/getTextTrim';
import regExpGroups from '../../common/regExpGroups';
import { etaRe } from '../../support/constants';

function formatTime(e) {
  const { h, m, s } = regExpGroups(etaRe, e);
  return {
    time_remaining: Number(h) * 60 * 60
    + Number(m) * 60
    + Number(s),
  };
}

function parseReport(doc) {
  const slots = getArrayByClassName('composing-potion', doc);
  if (slots.length === 0) { return { s: false }; }
  const maxPotions = slots.length;
  const potions = getArrayByClassName('composing-potion-time', doc)
    .map(getTextTrim)
    .filter((e) => e.endsWith('s'))
    .map(formatTime);
  return { r: { max_potions: maxPotions, potions }, s: true };
}

// Incomplete
export default async function composing() {
  return parseReport(await indexAjaxDoc({ cmd: 'composing' }));
}
