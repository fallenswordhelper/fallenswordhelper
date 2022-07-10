import getBuff from './common/getBuff';
import querySelectorArray from './common/querySelectorArray';
import toLowerCase from './common/toLowerCase';
import getCustomUrlParameter from './system/getCustomUrlParameter';

const levels = [1, 25, 75, 150, 200, 250, 300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1400,
  1600, 2000, 2500, 3000, 3500, 4000, 4500];

const getTip = (a) => [
  getCustomUrlParameter(a.href, 'skill_id'),
  levels[a.closest('table[width="300"] > tbody > tr').rowIndex].toString(),
  a.children[0].dataset.tipped,
];

const getMatches = ([id, lvl, tip]) => [
  id,
  lvl,
  tip.split(/[<>]/),
];

const getStam = ([id, lvl, tipSplit]) => [
  id,
  lvl,
  tipSplit[2],
  tipSplit[tipSplit.length - 3].split(' ')[1],
];

const getLabels = ([id, lvl, name, stam]) => [
  '  {"name": "',
  name,
  '",',
  ' '.repeat(20 - name.length),
  '"stam": ',
  stam,
  ',',
  ' '.repeat(3 - stam.length),
  '"lvl": ',
  lvl,
  ',',
  ' '.repeat(5 - lvl.length),
  '"id": ',
  id,
  ',',
  ' '.repeat(4 - id.length),
  '"nicks": "',
  getBuff(name)?.nicks || toLowerCase(name),
  '"},',
];

const doConcat = (a) => a.join('');

export default function skills() {
  const as = querySelectorArray('a[href*="&skill_id="]')
    .map(getTip)
    .map(getMatches)
    .map(getStam)
    .map(getLabels)
    .map(doConcat)
    .join('\n');
  // eslint-disable-next-line no-console
  console.log(as); // skipcq: JS-0002
}
