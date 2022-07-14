import contains from '../common/contains';
import getArrayByTagName from '../common/getArrayByTagName';
import getPlayers from '../common/getPlayers';
import lastActivity from '../common/lastActivity';
import regExpFirstCapture from '../common/regExpFirstCapture';
import setTipped from '../common/setTipped';
import { stamRe } from '../support/constants';
import { getPcc } from '../support/layout';
import addCommas from '../system/addCommas';

const ACTIVE = 0;
const STAMINA = 1;

function countActive(acc, curr) {
  const { mins } = lastActivity(curr.dataset.tipped);
  if (mins < 44640) {
    acc[ACTIVE] += 1;
    acc[STAMINA] += Number(regExpFirstCapture(stamRe, curr.dataset.tipped));
  }
  return acc;
}

function getActive(dots) {
  return dots.reduce(countActive, [0, 0]);
}

export default function activeMembers() {
  const members = getArrayByTagName('b', getPcc()).find(contains('Members'));
  if (members) {
    const dots = getPlayers();
    const memberStats = getActive(dots);
    members.classList.add('tip-static');
    setTipped(`Active: ${memberStats[ACTIVE]}/${dots.length}<br>Stamina: ${
      addCommas(memberStats[STAMINA])}`, members);
  }
}
