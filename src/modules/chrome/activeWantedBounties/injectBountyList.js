import { getBountyList } from './lists';
import { getBountyListDiv } from './createDivs';
import injectList from './injectList';
import listRow from './listRow';

let bountyListReset = 0;

export const getBountyListReset = () => bountyListReset;

function makeMouseOver(el) {
  return `Level:  ${el.lvl
  }<br>Reward: ${el.reward} ${el.rewardType
  }<br>XP Loss Remaining: ${el.xpLoss
  }<br>Progress:  ${el.progress}`;
}

function bountyRow(bounty) {
  return listRow(bounty, makeMouseOver);
}

export function injectBountyList() { // Legacy
  bountyListReset = injectList([
    getBountyListDiv,
    'bountyList',
    getBountyList,
    'Active',
    bountyRow,
  ]);
}
