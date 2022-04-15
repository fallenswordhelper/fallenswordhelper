import arrayFrom from '../../common/arrayFrom';
import containsText from '../../common/containsText';
import dataRows from '../../common/dataRows';
import getPlayerId from '../../common/getPlayerId';
import hasClass from '../../common/hasClass';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import onclick from '../../common/onclick';
import openQuickBuffById from '../../common/openQuickBuffById';

function buffIndividual(target) {
  if (target.previousElementSibling) {
    openQuickBuffById(getPlayerId(target.previousElementSibling.href));
  }
}

const memberId = (el) => getPlayerId(el.cells[0].children[0].href);

function buffAll(target) {
  const titanTable = target.parentNode.parentNode.parentNode.parentNode;
  const shortList = dataRows(titanTable, 3, 0).map(memberId).join();
  openQuickBuffById(shortList);
}

function buffEvent(e) {
  const { target } = e;
  if (containsText('[b]', target)) {
    buffIndividual(target);
  }
  if (containsText('all', target)) {
    buffAll(target);
  }
}

function evtHdl(e) {
  if (hasClass('fshBl', e.target)) { buffEvent(e); }
}

function playerBufflink(el) {
  insertHtmlBeforeEnd(el.cells[0], ' <button class="fshBl fshXSmall">[b]</button>');
}

function doBuffLinks(titanTable) {
  dataRows(titanTable, 3, 0).forEach(playerBufflink);
  insertHtmlBeforeEnd(titanTable.rows[0].cells[0], ' <button class="fshBl fshXSmall">all</button>');
}

function myTables(el, i) { return el.rows.length > 1 && i > 1; }

function gotTables(titanTables) {
  arrayFrom(titanTables).filter(myTables).forEach(doBuffLinks);
  onclick(titanTables[1], evtHdl);
}

export default function injectScouttowerBuffLinks(titanTables) {
  if (titanTables.length > 2) { gotTables(titanTables); }
}
