import closestTr from '../../common/closestTr';
import getText from '../../common/getText';
import getTextTrim from '../../common/getTextTrim';
import querySelectorArray from '../../common/querySelectorArray';
import { defLastLadderReset, noteSelector } from '../../support/constants';
import getValue from '../../system/getValue';
import parseDateAsTimestamp from '../../system/parseDateAsTimestamp';
import setValue from '../../system/setValue';

let lastLadderReset = 0;
const ladderRe = /You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/;

function pvp(r) {
  return ladderRe.test(getText(r.cells[2]));
}

function saveLastResetTime(r) {
  const logTime = parseDateAsTimestamp(getTextTrim(r.cells[1]));
  if (logTime > lastLadderReset) {
    setValue(defLastLadderReset, logTime);
    lastLadderReset = logTime;
  }
}

export default function processLadder(logTable) {
  lastLadderReset = getValue(defLastLadderReset);
  const noteImgs = querySelectorArray(noteSelector, logTable);
  const noteRows = noteImgs.map(closestTr);
  const pvpImgs = noteRows.filter(pvp);
  pvpImgs.forEach(saveLastResetTime);
}
