import createInput from '../common/cElement/createInput';
import findOnlinePlayers from './findOnlinePlayers';
import functionPasses from '../common/functionPasses';
import getElementsByTagName from '../common/getElementsByTagName';
import getTextTrim from '../common/getTextTrim';
import insertElementAfterBegin from '../common/insertElementAfterBegin';
import jQueryPresent from '../common/jQueryPresent';
import onclick from '../common/onclick';
import { pCC } from '../support/layout';

function looksLikeTopRated() {
  const theCell = getElementsByTagName('td', pCC)[0];
  theCell.children[0].className = 'fshTopListWrap';
  const findBtn = createInput({
    id: 'fshFindOnlinePlayers',
    className: 'custombutton tip-static',
    type: 'button',
    value: 'Find Online Players',
    dataset: {
      tipped: 'Fetch the online status of the '
        + 'top 250 players (warning ... takes a few seconds).',
    },
  });
  insertElementAfterBegin(theCell, findBtn);
  onclick(findBtn, findOnlinePlayers);
}

const topRatedTests = [
  () => jQueryPresent(),
  () => pCC,
  () => pCC.children[0],
  () => pCC.children[0].rows,
  () => pCC.children[0].rows.length > 2,
  () => getTextTrim(pCC.children[0].rows[1]).startsWith('Last Updated'),
];

function testforTopRated() {
  return topRatedTests.every(functionPasses);
}

export default function injectTopRated() {
  if (testforTopRated()) { looksLikeTopRated(); }
}
