import all from '../common/all';
import closestTable from '../common/closestTable';
import createSpan from '../common/cElement/createSpan';
import decoratePlayer from './decoratePlayer';
import { getPcc } from '../support/layout';
import getProfile from '../ajax/getProfile';
import getTextTrim from '../common/getTextTrim';
import hideQTip from '../common/hideQTip';
import { playerLinkSelector } from '../support/constants';
import querySelectorArray from '../common/querySelectorArray';
import sendEvent from '../analytics/sendEvent';

const addPlayerName = (a) => [closestTable(a), getTextTrim(a)];

function displaySpinner(target) {
  hideQTip(target);
  const spinner = createSpan({
    className: 'fshCurveContainer fshTopListSpinner',
    innerHTML: '<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>',
  });
  target.parentNode.replaceChild(spinner, target);
  return spinner;
}

async function ajaxPlayer([tbl, player]) {
  const thisPlayer = await getProfile(player);
  decoratePlayer(tbl, thisPlayer);
}

async function prepareAjax() {
  const players = querySelectorArray(playerLinkSelector, getPcc()).map(addPlayerName);
  await all(players.map(ajaxPlayer));
}

export default async function findOnlinePlayers(e) {
  sendEvent('toprated', 'FindOnlinePlayers');
  const spinner = displaySpinner(e.target);
  await prepareAjax();
  spinner.remove();
}
