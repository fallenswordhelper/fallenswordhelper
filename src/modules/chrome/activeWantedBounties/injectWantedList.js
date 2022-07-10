import { getWantedList } from './lists';
import { getWantedListDiv } from './createDivs';
import injectList from './injectList';
import listRow from './listRow';

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
  return bounty.accept ? `<span class="xsGreen" onclick="${bounty.accept}">[a]</span>&nbsp;` : '';
}

function wantedRow(bounty) {
  return [
    acceptBtn(bounty),
    listRow(bounty, makeMouseOver),
  ].join('');
}

export function injectWantedList() { // Legacy
  wantedListReset = injectList([
    getWantedListDiv,
    'wantedList',
    getWantedList,
    'Wanted',
    wantedRow,
  ]);
}
