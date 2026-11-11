import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import getArrayByClassName from '../../common/getArrayByClassName';
import getTextTrim from '../../common/getTextTrim';
import querySelectorAll from '../../common/querySelectorAll';
import regExpGroups from '../../common/regExpGroups';
import { etaRe } from '../../support/constants';

function formatTime(e) {
  const { h, m, s } = regExpGroups(etaRe, e);
  return {
    time_remaining: Number(h) * 60 * 60 + Number(m) * 60 + Number(s),
  };
}

function parseReport(doc) {
  if (!doc) return { s: false };
  const brewing = getArrayByClassName('composing-potion', doc).length;
  // Empty slots have a template select instead
  const empty = querySelectorAll(
    '[id|="composing-template"]:not(#composing-template-multi)',
    doc,
  ).length;
  if (brewing + empty === 0) return { s: false };
  const potions = getArrayByClassName('composing-potion-time', doc)
    .map(getTextTrim)
    .filter((e) => e.endsWith('s'))
    .map(formatTime);
  return { r: { max_potions: brewing + empty, potions }, s: true };
}

// The app API no longer sends the max potions header, so read the page
export default async function composingView() {
  return parseReport(await indexAjaxDoc({ cmd: 'composing' }));
}
