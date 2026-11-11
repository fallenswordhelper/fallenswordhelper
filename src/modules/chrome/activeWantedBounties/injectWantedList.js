import escapeHtml from '../../system/escapeHtml';
import { getWantedListDiv } from './createDivs';
import injectList from './injectList';
import listRow from './listRow';
import { getWantedList } from './lists';

let wantedListReset = 0;

export const getWantedListReset = () => wantedListReset;

function makeMouseOver(el) {
  return `Target Level:  ${el.lvl}<br>Offerer: ${
    el.offerer
  }<br>Reward: ${el.reward} ${el.rewardType}<br>XP Loss Remaining: ${
    el.xpLoss
  }<br>Posted: ${el.posted}<br>Tickets Req.:  ${el.tickets}`;
}

// The game's own [data-confirm] handler asks, then goes to the href.
// Lists stored before game 4.6 have an onclick string here; skip those.
function acceptBtn({ accept }) {
  if (!accept?.href) return '';
  return `<span class="xsGreen" data-confirm="${escapeHtml(
    accept.confirm ?? '',
  )}" data-confirm-href="${escapeHtml(accept.href)}">[a]</span>&nbsp;`;
}

function wantedRow(bounty) {
  return [acceptBtn(bounty), listRow(bounty, makeMouseOver)].join('');
}

export function injectWantedList() {
  // Legacy
  wantedListReset = injectList([
    getWantedListDiv,
    'wantedList',
    getWantedList,
    'Wanted',
    wantedRow,
  ]);
}
