import { c as collapse } from './collapse-671e8689.js';
import { I as getValue, a7 as defLastLadderReset, g as getElementsByTagName, p as pCC, d as defTable, aN as containsText, C as getText, X as setValue } from './calfSystem-86663d02.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-0e0c4a8c.js';
import { p as parseDateAsTimestamp } from './parseDateAsTimestamp-168ca6a2.js';
import { s as simpleCheckbox } from './simpleCheckbox-5def93ce.js';
import './hideElement-452544d4.js';
import './toggleForce-70762365.js';
import './isChecked-e1880947.js';

let lastLadderReset;
let trackLadderReset;

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

function testArticle(rowType) { return rowType > 1; }

function setupPref(prefName, rowInjector) {
  insertHtmlAfterEnd(rowInjector, simpleCheckbox(prefName));
}

function viewArchive() {
  lastLadderReset = getValue(defLastLadderReset);
  trackLadderReset = getValue('trackLadderReset');
  const prefName = 'collapseNewsArchive';
  const theTables = getElementsByTagName(defTable, pCC);
  if (theTables.length > 2) {
    setupPref(prefName, theTables[0].rows[2]);
    collapse({
      prefName,
      theTable: theTables[2],
      headInd: 7,
      articleTest: testArticle,
      extraFn: checkForPvPLadder,
    });
  }
}

export default viewArchive;
//# sourceMappingURL=viewArchive-cd5ed9b7.js.map
