import collapse from '../common/collapse';
import containsText from '../common/containsText';
import getElementsByTagName from '../common/getElementsByTagName';
import getText from '../common/getText';
import setupPref from '../guild/hall/setupPref';
import { defLastLadderReset, defTable } from '../support/constants';
import { pcc } from '../support/layout';
import getValue from '../system/getValue';
import parseDateAsTimestamp from '../system/parseDateAsTimestamp';
import setValue from '../system/setValue';

let lastLadderReset = 0;
let trackLadderReset = 0;

function checkForPvPLadder(row) {
  if (trackLadderReset && containsText('PvP Ladder', row.children[1].children[0])) {
    const logTime = parseDateAsTimestamp(
      getText(row.children[1].children[2]).replace('Posted: ', ''),
    );
    if (logTime > lastLadderReset) {
      setValue(defLastLadderReset, logTime);
      lastLadderReset = logTime;
    }
  }
}

const testArticle = (rowType) => rowType > 1;

export default function viewArchive() {
  lastLadderReset = getValue(defLastLadderReset);
  trackLadderReset = getValue('trackLadderReset');
  const prefName = 'collapseNewsArchive';
  const theTables = getElementsByTagName(defTable, pcc());
  if (theTables.length > 2) {
    setupPref(prefName, theTables[0].rows[1].cells[0]);
    collapse({
      prefName,
      theTable: theTables[2],
      headInd: 7,
      articleTest: testArticle,
      extraFn: checkForPvPLadder,
    });
  }
}
