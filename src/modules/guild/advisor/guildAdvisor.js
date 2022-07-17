import getMembrList from '../../ajax/getMembrList';
import arrayFrom from '../../common/arrayFrom';
import createTFoot from '../../common/cElement/createTFoot';
import getElementsByClassName from '../../common/getElementsByClassName';
import getElementsByTagName from '../../common/getElementsByTagName';
import getText from '../../common/getText';
import getTextTrim from '../../common/getTextTrim';
import insertElement from '../../common/insertElement';
import insertHtmlAfterEnd from '../../common/insertHtmlAfterEnd';
import interceptSubmit from '../../common/interceptSubmit';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import loadDataTables from '../../common/loadDataTables';
import partial from '../../common/partial';
import playerLinkFromMembrList from '../../common/playerLinkFromMembrList';
import calf from '../../support/calf';
import { cmdUrl } from '../../support/constants';
import { time, timeEnd } from '../../support/debug';
import { pcc } from '../../support/layout';
import getValue from '../../system/getValue';
import { injectTable, playerLevel, playerRank } from './helpers';
import injectAdvisorWeekly from './injectAdvisorWeekly';

function getTfoot(list) {
  const totalRow = list.rows[list.rows.length - 1];
  const totalClone = totalRow.cloneNode(true);
  const tfoot = createTFoot();
  insertElement(tfoot, totalClone);
  const totalCell = totalClone.cells[0];
  totalCell.className = 'fshRight';
  totalCell.setAttribute('colspan', '3');
  return tfoot;
}

function cellText(cell, i) {
  if (i === 0) {
    return getTextTrim(cell);
  }
  return getText(cell);
}

function bodyText(membrList, row) {
  const foo = arrayFrom(row.cells, cellText);
  foo.splice(
    0,
    1,
    playerLinkFromMembrList(membrList, foo[0]),
    playerLevel(foo[0], membrList),
    playerRank(foo[0], membrList),
  );
  return foo;
}

function getData(list, membrList) {
  return arrayFrom(list.rows).slice(1, -1)
    .map(partial(bodyText, membrList));
}

function summaryLink() {
  const updateInput = getElementsByClassName('custombutton', pcc());
  if (updateInput.length === 0) { return; }
  insertHtmlAfterEnd(updateInput[0], `<span> <a href="${cmdUrl
  }guild&subcmd=advisor&subcmd2=weekly">7-Day Summary</a></span>`);
}

function injectAdvisorDaily(list, membrList) {
  const betaOptIn = getValue('betaOptIn');
  if (betaOptIn) { //  Timing output
    time('guildAdvisor.injectAdvisorDaily');
  }
  const data = getData(list, membrList);
  const tfoot = getTfoot(list);
  injectTable(list, tfoot, data);
  summaryLink();
  if (betaOptIn) { //  Timing output
    timeEnd('guildAdvisor.injectAdvisorDaily');
  }
}

function switcher(list) {
  if (calf.subcmd2 === 'weekly') {
    injectAdvisorWeekly(list);
  } else {
    getMembrList(false).then(partial(injectAdvisorDaily, list));
  }
}

export default function guildAdvisor() {
  if (jQueryNotPresent()) { return; }
  const list = getElementsByTagName('table', pcc())[1];
  if (!list) { return; }
  loadDataTables().then(() => switcher(list));
  interceptSubmit();
}
