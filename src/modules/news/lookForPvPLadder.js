import containsText from '../common/containsText';
import getArrayByClassName from '../common/getArrayByClassName';
import getText from '../common/getText';
import { defLastLadderReset } from '../support/constants';
import { getPcc } from '../support/layout';
import getValue from '../system/getValue';
import parseDateAsTimestamp from '../system/parseDateAsTimestamp';
import setValue from '../system/setValue';

const pvpLadder = (head) => containsText('PvP Ladder', head.children[1]);

const timestamp = (head) => parseDateAsTimestamp(getText(head.children[2]));

export default function lookForPvPLadder() {
  const rumours = getArrayByClassName('news_head_tavern', getPcc());
  const pvpTimes = rumours.filter(pvpLadder).map(timestamp);
  const logTime = Math.max.apply(null, pvpTimes);
  if (logTime > getValue(defLastLadderReset)) {
    setValue(defLastLadderReset, logTime);
  }
}
