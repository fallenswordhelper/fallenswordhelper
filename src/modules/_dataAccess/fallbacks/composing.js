import indexAjaxData from '../../ajax/indexAjaxData';
import getArrayByClassName from '../../common/getArrayByClassName';
import getTextTrim from '../../common/getTextTrim';
import createDocument from '../../system/createDocument';

function formatTime(e) {
  const thisTime = e.match(/ETA: (\d+)h (\d+)m (\d+)s/);
  return {
    time_remaining: Number(thisTime[1]) * 60 * 60
    + Number(thisTime[2]) * 60
    + Number(thisTime[3]),
  };
}

function parseReport(html) {
  const doc = createDocument(html);
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
export default function composing() {
  return indexAjaxData({ cmd: 'composing' }).then(parseReport);
}
