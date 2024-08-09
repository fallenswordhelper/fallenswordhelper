import daAdvisor from '../../_dataAccess/daAdvisor';
import getMembrList from '../../ajax/getMembrList';
import all from '../../common/all';
import createTFoot from '../../common/cElement/createTFoot';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import isArray from '../../common/isArray';
import partial from '../../common/partial';
import playerLinkFromMembrList from '../../common/playerLinkFromMembrList';
import setInnerHtml from '../../dom/setInnerHtml';
import addCommas from '../../system/addCommas';
import { injectTable, playerLevel, playerRank } from './helpers';

function returnAdvisorPage(list, e, response) {
  insertHtmlBeforeEnd(list.lastElementChild.lastElementChild, ` day ${e},`);
  return response.r;
}

async function getAdvisorPage(list, e) {
  const response = await daAdvisor(e);
  return returnAdvisorPage(list, e, response);
}

function addElements(ary, v, i) {
  return v + ary[i];
}

function addAll(curr, el, i) {
  return {
    ...el,
    stats: el.stats.map(partial(addElements, curr[i].stats)),
  };
}

function addStuff(acc, curr) {
  return acc.map(partial(addAll, curr));
}

function reorgStats(el) {
  return {
    player: el.player,
    stats: [el.stats[6], el.stats[7], el.stats[6] + el.stats[7], el.stats[1],
      el.stats[2], el.stats[3], el.stats[4], el.stats[8], el.stats[5]],
  };
}

function addUpStats(args) {
  return args.slice(1).reduce(addStuff, args[0]).map(reorgStats);
}

function makeTotal(acc, curr) {
  return curr.stats.map(partial(addElements, acc));
}

function footerStats(acc, curr) {
  return `${acc}<td><u>${curr}</u></td>`;
}

function makeTfoot(added) {
  const stats = added.slice(1).reduce(makeTotal, added[0].stats).map(addCommas);
  return createTFoot({
    innerHTML: `<tr><td class="fshRight" colspan="3">Total: </td>${
      stats.reduce(footerStats, '')}</tr>`,
  });
}

function makeData(membrList, el) {
  const stats = el.stats.map(addCommas);
  return [
    playerLinkFromMembrList(membrList, el.player.name),
    playerLevel(el.player.name, membrList),
    playerRank(el.player.name, membrList),
  ].concat(stats);
}

function addAdvisorPages(list, [membrList, ...args]) {
  if (!args.every((ary) => isArray(ary))) return;
  const added = addUpStats(args);
  injectTable(list, makeTfoot(added), added.map(partial(makeData, membrList)));
}

async function injectAdvisor(list) {
  setInnerHtml('<span class="fshCurveContainer fshFlex">'
    + '<span class="fshCurveEle fshCurveLbl fshOldSpinner"></span>'
    + '<span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span>'
    + '</span>', list);

  const prm = [getMembrList(false)]
    .concat([1, 2, 3, 4, 5, 6, 7, 8].map(partial(getAdvisorPage, list)));

  const args = await all(prm);
  addAdvisorPages(list, args);
}

export default function injectAdvisorWeekly(list) {
  injectAdvisor(list);
}
