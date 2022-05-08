import { bountyUrl } from '../../support/constants';
import createDiv from '../../common/cElement/createDiv';
import createSpan from '../../common/cElement/createSpan';
import insertElement from '../../common/insertElement';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import setInnerHtml from '../../dom/setInnerHtml';
import setValueJSON from '../../system/setValueJSON';
import { wantedList } from './lists';
import { wantedListDiv } from './createDivs';

export let wantedListReset = 0;

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

export function injectWantedList() { // Legacy
  setValueJSON('wantedList', wantedList);
  setInnerHtml('', wantedListDiv);
  const heading = createDiv(
    { innerHTML: `<a class="fshBountyHeader" href="${bountyUrl}">Wanted Bounties</a> ` },
  );
  wantedListReset = createSpan({ className: 'xxsLink', textContent: 'Reset' });
  insertElement(heading, wantedListReset);
  insertElement(wantedListDiv, heading);
  let output = '';
  if (wantedList.bounty.length === 0) {
    output += '<div class="xsOrange">[No wanted bounties]</div>';
  } else {
    for (const bounty of wantedList.bounty) {
      output += `${acceptBtn(bounty)}<a class="xsKhaki tip-static" data-tipped="${
        makeMouseOver(bounty)}" href="${bounty.link}">${bounty.target}</a><br>`;
    }
  }
  insertHtmlBeforeEnd(wantedListDiv, output);
}
