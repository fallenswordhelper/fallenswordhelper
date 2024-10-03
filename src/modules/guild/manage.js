import sendEvent from '../analytics/sendEvent';
import contains from '../common/contains';
import getArrayByTagName from '../common/getArrayByTagName';
import getElementsByTagName from '../common/getElementsByTagName';
import getText from '../common/getText';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import jQueryNotPresent from '../common/jQueryNotPresent';
import onclick from '../common/onclick';
import partial from '../common/partial';
import playerName from '../common/playerName';
import setInnerHtml from '../dom/setInnerHtml';
import { guildSubcmdUrl, recallUserUrl } from '../support/constants';
import { pcc } from '../support/layout';
import task from '../support/task';
import getValue from '../system/getValue';
import buffLinks from './buffLinks';
import conflictInfo from './conflictInfo';
import { logoToggle, statToggle, structureToggle } from './panelToggle';
import stamBars from './stamBars/stamBars';
import tracker from './tracker/tracker';

function relicControl(leftHandSideColumnTable) {
  const relic = getArrayByTagName('b', leftHandSideColumnTable).filter(
    contains('Relics'),
  );
  if (relic.length !== 1) return;
  const thisFont = relic[0].parentNode.nextElementSibling.children[0];
  setInnerHtml(
    `[ <a href="${guildSubcmdUrl}reliclist">Control</a> ]&nbsp;`,
    thisFont,
  );
  onclick(thisFont, (e) => {
    if (e.target.tagName === 'A') sendEvent('guildManage', 'relic control');
  });
}

function selfRecallLink(leftHandSideColumnTable) {
  // self recall
  const getLi = getElementsByTagName('li', leftHandSideColumnTable);
  if (!getLi?.length) return;
  const selfRecall = getLi[getLi.length - 1].parentNode;
  insertHtmlBeforeEnd(
    selfRecall,
    `<li><a href="${recallUserUrl}${playerName()}">Self Recall</a></li>`,
  );
  onclick(selfRecall, (e) => {
    if (getText(e.target) === 'Self Recall')
      sendEvent('guildManage', 'Self Recall');
  });
}

function getLhsColTab() {
  return pcc().lastElementChild.rows?.[2]?.cells[0].children[0];
}

function lhsAdd(leftHandSideColumnTable, fn) {
  task(3, fn, [leftHandSideColumnTable]);
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
  if (jQueryNotPresent()) return;
  // Detailed conflict information
  if (getValue('detailedConflictInfo')) {
    task(3, conflictInfo, [leftHandSideColumnTable]);
  }
  task(4, tracker);
}

export default function manage() {
  if (!pcc()) return;
  const leftHandSideColumnTable = getLhsColTab();
  if (!leftHandSideColumnTable) return;
  lhsAdditions(leftHandSideColumnTable);
  if (getValue('showBuffLinks')) task(3, buffLinks);
  ajaxStuff(leftHandSideColumnTable);
  stamBars();
}
