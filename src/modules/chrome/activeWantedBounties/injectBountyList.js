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

export function injectBountyList() { // Legacy
  setValueJSON('bountyList', getBountyList());
  setInnerHtml('', getBountyListDiv());
  const heading = createDiv(
    { innerHTML: `<a class="fshBountyHeader" href="${bountyUrl}">Active Bounties</a> ` },
  );
  bountyListReset = createSpan({ className: 'xxsLink', textContent: 'Reset' });
  insertElement(heading, bountyListReset);
  insertElement(getBountyListDiv(), heading);
  let output = '';
  if (getBountyList().bounty.length === 0) {
    output += '<div class="xsOrange">[No active bounties]</div>';
  } else {
    for (const bounty of getBountyList().bounty) {
      output += `<a href="${bounty.link}" class="xsKhaki tip-static" data-tipped="${
        makeMouseOver(bounty)}">${bounty.target}</a><br>`;
    }
  }
  insertHtmlBeforeEnd(getBountyListDiv(), output);
}
