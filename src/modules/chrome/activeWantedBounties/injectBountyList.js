import { bountyUrl } from '../../support/constants';
import createDiv from '../../common/cElement/createDiv';
import createSpan from '../../common/cElement/createSpan';
import { getBountyList } from './lists';
import { getBountyListDiv } from './createDivs';
import insertElement from '../../common/insertElement';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import setInnerHtml from '../../dom/setInnerHtml';
import setValueJSON from '../../system/setValueJSON';

let bountyListReset = 0;

export const getBountyListReset = () => bountyListReset;

function makeMouseOver(el) {
  return `Level:  ${el.lvl
  }<br>Reward: ${el.reward} ${el.rewardType
  }<br>XP Loss Remaining: ${el.xpLoss
  }<br>Progress:  ${el.progress}`;
}

function bountyRow(bounty) {
  return `<a href="${bounty.link}" class="xsKhaki tip-static" data-tipped="${
    makeMouseOver(bounty)}">${bounty.target}</a><br>`;
}

function buildHtml() {
  const bounties = getBountyList().bounty;
  if (bounties.length === 0) {
    return '<div class="xsOrange">[No active bounties]</div>';
  }
  return bounties.map(bountyRow).join('');
}

export function injectBountyList() { // Legacy
  const bountyListDiv = getBountyListDiv();
  setValueJSON('bountyList', getBountyList());
  setInnerHtml('', bountyListDiv);
  const heading = createDiv(
    { innerHTML: `<a class="fshBountyHeader" href="${bountyUrl}">Active Bounties</a> ` },
  );
  bountyListReset = createSpan({ className: 'xxsLink', textContent: 'Reset' });
  insertElement(heading, bountyListReset);
  insertElement(bountyListDiv, heading);
  insertHtmlBeforeEnd(bountyListDiv, buildHtml());
}
