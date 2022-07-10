import { bountyUrl } from '../../support/constants';
import createDiv from '../../common/cElement/createDiv';
import createSpan from '../../common/cElement/createSpan';
import { getWantedList } from './lists';
import { getWantedListDiv } from './createDivs';
import insertElement from '../../common/insertElement';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import setInnerHtml from '../../dom/setInnerHtml';
import setValueJSON from '../../system/setValueJSON';

let wantedListReset = 0;

export const getWantedListReset = () => wantedListReset;

function makeMouseOver(el) {
  return `Target Level:  ${el.lvl
  }<br>Offerer: ${el.offerer
  }<br>Reward: ${el.reward} ${el.rewardType
  }<br>XP Loss Remaining: ${el.xpLoss
  }<br>Posted: ${el.posted
  }<br>Tickets Req.:  ${el.tickets}`;
}

function acceptBtn(bounty) {
  if (bounty.accept) {
    return `<span class="xsGreen" onclick="${bounty.accept
    }">[a]</span>&nbsp;`;
  }
  return '';
}

function wantedRow(bounty) {
  return `${acceptBtn(bounty)}<a class="xsKhaki tip-static" data-tipped="${
    makeMouseOver(bounty)}" href="${bounty.link}">${bounty.target}</a><br>`;
}

function buildHtml() {
  const bounties = getWantedList().bounty;
  if (bounties.length === 0) {
    return '<div class="xsOrange">[No wanted bounties]</div>';
  }
  return bounties.map(wantedRow).join('');
}

export function injectWantedList() { // Legacy
  const wantedListDiv = getWantedListDiv();
  setValueJSON('wantedList', getWantedList());
  setInnerHtml('', wantedListDiv);
  const heading = createDiv(
    { innerHTML: `<a class="fshBountyHeader" href="${bountyUrl}">Wanted Bounties</a> ` },
  );
  wantedListReset = createSpan({ className: 'xxsLink', textContent: 'Reset' });
  insertElement(heading, wantedListReset);
  insertElement(wantedListDiv, heading);
  insertHtmlBeforeEnd(wantedListDiv, buildHtml());
}
