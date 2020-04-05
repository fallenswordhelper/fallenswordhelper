import { bountyUrl } from '../../support/constants';
import insertElement from '../../common/insertElement';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import setValueJSON from '../../system/setValueJSON';
import { wantedList } from './lists';
import { wantedListDiv } from './createDivs';
import { createDiv, createSpan } from '../../common/cElement';

export var wantedListReset;

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
  wantedListDiv.innerHTML = '';
  const heading = createDiv(
    { innerHTML: `<a href="${bountyUrl}">Wanted Bounties</a> ` },
  );
  wantedListReset = createSpan({ className: 'xxsLink', textContent: 'Reset' });
  insertElement(heading, wantedListReset);
  insertElement(wantedListDiv, heading);
  let output = '';
  if (wantedList.bounty.length === 0) {
    output += '<div class="xsOrange">[No wanted bounties]</div>';
  } else {
    for (let i = 0; i < wantedList.bounty.length; i += 1) {
      output += `${acceptBtn(wantedList.bounty[i])
      }<a class="xsKhaki tip-static" data-tipped="${
        makeMouseOver(wantedList.bounty[i])
      }" href="${wantedList.bounty[i].link}">${
        wantedList.bounty[i].target}</a><br>`;
    }
  }
  insertHtmlBeforeEnd(wantedListDiv, output);
}
