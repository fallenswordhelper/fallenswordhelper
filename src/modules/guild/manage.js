import add from '../support/task';
import buffLinks from './buffLinks';
import conflictInfo from './conflictInfo';
import contains from '../common/contains';
import getArrayByTagName from '../common/getArrayByTagName';
import getElementsByTagName from '../common/getElementsByTagName';
import getValue from '../system/getValue';
import guildTracker from './guildTracker/guildTracker';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import jQueryNotPresent from '../common/jQueryNotPresent';
import { pCC } from '../support/layout';
import partial from '../common/partial';
import playerName from '../common/playerName';
import progressBar from './progressBar';
import setInnerHtml from '../dom/setInnerHtml';
import { guildSubcmdUrl, recallUserUrl } from '../support/constants';
import { logoToggle, statToggle, structureToggle } from './panelToggle';

function relicControl(leftHandSideColumnTable) {
  const relic = getArrayByTagName('b', leftHandSideColumnTable)
    .filter(contains('Relics'));
  if (relic.length !== 1) { return; }
  const thisFont = relic[0].parentNode.nextElementSibling.children[0];
  setInnerHtml(`[ <a href="${guildSubcmdUrl}reliclist">Control</a> ]&nbsp;`,
    thisFont);
}

function selfRecallLink(leftHandSideColumnTable) {
  // self recall
  const getLi = getElementsByTagName('li', leftHandSideColumnTable);
  if (!getLi || !getLi.length) { return; }
  const selfRecall = getLi[getLi.length - 1].parentNode;
  insertHtmlBeforeEnd(selfRecall,
    `<li><a href="${recallUserUrl}${playerName()
    }" data-tooltip="Self Recall">Self Recall</a></li>`);
}

function getLhsColTab() {
  return pCC.lastElementChild.rows[2].cells[0].children[0];
}

function lhsAdd(leftHandSideColumnTable, fn) {
  add(3, fn, [leftHandSideColumnTable]);
}

function lhsAdditions(leftHandSideColumnTable) {
  [
    logoToggle,
    statToggle,
    structureToggle,
    relicControl,
    selfRecallLink,
  ].forEach(partial(lhsAdd, leftHandSideColumnTable));
}

function ajaxStuff(leftHandSideColumnTable) {
  if (jQueryNotPresent()) { return; }
  // Detailed conflict information
  if (getValue('detailedConflictInfo')) {
    add(3, conflictInfo, [leftHandSideColumnTable]);
  }
  add(4, guildTracker);
}

export default function manage() {
  if (!pCC) { return; }
  const leftHandSideColumnTable = getLhsColTab();
  lhsAdditions(leftHandSideColumnTable);
  add(3, buffLinks);
  ajaxStuff(leftHandSideColumnTable);
  progressBar();
}
