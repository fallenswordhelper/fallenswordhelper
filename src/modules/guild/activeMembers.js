import contains from '../common/contains';
import getArrayByTagName from '../common/getArrayByTagName';
import getPlayers from '../common/getPlayers';
import lastActivity from '../common/lastActivity';
import numberIsNaN from '../common/numberIsNaN';
import regExpFirstCapture from '../common/regExpFirstCapture';
import setTipped from '../common/setTipped';
import { stamRe } from '../support/constants';
import { pcc } from '../support/layout';
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
  const members = getArrayByTagName('b', pcc()).find(contains('Members'));
  if (members) {
    const dots = getPlayers();
    const memberStats = getActive(dots);
    members.classList.add('tip-static');
    const staminaText = numberIsNaN(memberStats[STAMINA])
      ? ''
      : `<br>Stamina: ${addCommas(memberStats[STAMINA])}`;
    setTipped(
      `Active: ${memberStats[ACTIVE]}/${dots.length}${staminaText}`,
      members,
    );
  }
}
