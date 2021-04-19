import addCommas from '../system/addCommas';
import contains from '../common/contains';
import getArrayByTagName from '../common/getArrayByTagName';
import getPlayers from '../common/getPlayers';
import lastActivityMins from '../common/lastActivityMins';
import { lastActivityRE } from '../support/constants';
import { pCC } from '../support/layout';
import setTipped from '../common/setTipped';

const ACTIVE = 0;
const STAMINA = 1;

function countActive(acc, curr) {
  const lastActivity = lastActivityRE.exec(curr.dataset.tipped);
  const mins = lastActivityMins({
    min: lastActivity[3],
    hour: lastActivity[2],
    day: lastActivity[1],
  });
  if (mins < 44640) {
    acc[ACTIVE] += 1;
    acc[STAMINA]
      += Number(/Stamina:<\/td><td>(\d+)/.exec(curr.dataset.tipped)[1]);
  }
  return acc;
}

function getActive(dots) {
  return dots.reduce(countActive, [0, 0]);
}

export default function activeMembers() {
  const members = getArrayByTagName('b', pCC).find(contains('Members'));
  if (members) {
    const dots = getPlayers();
    const memberStats = getActive(dots);
    members.classList.add('tip-static');
    setTipped(`Active: ${memberStats[ACTIVE]}/${dots.length}<br>Stamina: ${
      addCommas(memberStats[STAMINA])}`, members);
  }
}
