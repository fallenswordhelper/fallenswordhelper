import './guildReport.css';
import equipItem from '../../../ajax/equipItem';
import { queueRecallItem } from '../../../ajaxQueue/queue';
import sendEvent from '../../../analytics/sendEvent';
import classHandler from '../../../common/classHandler';
import classPair from '../../../common/classPair';
import closestTr from '../../../common/closestTr';
import getElementsByTagName from '../../../common/getElementsByTagName';
import onclick from '../../../common/onclick';
import partial from '../../../common/partial';
import playerId from '../../../common/playerId';
import regExpFirstCapture from '../../../common/regExpFirstCapture';
import setInnerHtml from '../../../dom/setInnerHtml';
import { playerIDRE } from '../../../support/constants';
import { getPcc } from '../../../support/layout';
import { cdn } from '../../../system/system';
import itemId from './itemId';

const spinner = '<span class="guildReportSpinner" '
  + `style="background-image: url('${cdn}ui/misc/spinner.gif');"></span>`;

function recalled(theTd) {
  setInnerHtml('<span class="fastWorn">You successfully recalled the item'
    + '</span>', theTd);
}

function wornItem(theTd) {
  setInnerHtml('<span class="fastWorn">Worn</span>', theTd);
}

function replyTo(target) {
  window.openQuickMsgDialog(target.getAttribute('target_player'));
}

function recallResult(action, theTd, data) {
  if (data.r === 1) { return; }
  if (action === 'recall') {
    recalled(theTd);
  } else {
    wornItem(theTd);
  }
}

function doRecall(theTd, href, mode, action) {
  queueRecallItem(itemId(href), regExpFirstCapture(playerIDRE, href), mode, action)
    .then(partial(recallResult, action, theTd));
}

function recallTo(theTd, href, mode) {
  doRecall(theTd, href, mode, 'recall');
}

function doFastBp(theTd, href) {
  sendEvent('GuildReport', 'Fast BP');
  recallTo(theTd, href, 0);
}

function doFastGs(theTd, href) {
  sendEvent('GuildReport', 'Fast GS');
  recallTo(theTd, href, 1);
}

function doFastWear(theTd, href) {
  sendEvent('GuildReport', 'Fast Wear');
  if (Number(regExpFirstCapture(playerIDRE, href)) === playerId()) {
    equipItem(itemId(href)).then(partial(wornItem, theTd));
  } else {
    doRecall(theTd, href, 0, 'wear');
  }
}

const subClass = [
  ['fast-bp', doFastBp],
  ['fast-gs', doFastGs],
  ['fast-wear', doFastWear],
];

function doFastRecall(target) {
  const theTd = target.parentNode.parentNode;
  if (!theTd) { return; }
  const [{ href }] = theTd.children;
  if (!href) { return; }
  subClass.find(partial(classPair, target))[1](theTd, href);
  setInnerHtml(spinner, theTd);
}

function collapsible(target) {
  sendEvent('GuildReport', 'Collapsible');
  let tr = closestTr(target).nextElementSibling;
  const mode = tr.className === 'fshHide' ? '' : 'fshHide';
  while (tr && !tr.children[0].hasAttribute('bgcolor')) {
    tr.className = mode;
    tr = tr.nextElementSibling;
  }
}

const classEvts = [
  ['sendLink', doFastRecall],
  ['a-reply', replyTo],
  ['fshBl', collapsible],
];

export default function eventHandlers() {
  onclick(getElementsByTagName('table', getPcc())[1], classHandler(classEvts));
}
