import { c as collapse } from './collapse-111d9110.js';
import { I as getValue, a8 as defLastLadderReset, g as getElementsByTagName, p as pCC, d as defTable, aD as containsText, C as getText, X as setValue } from './calfSystem-c08399e5.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-5f5e185f.js';
import { p as parseDateAsTimestamp } from './parseDateAsTimestamp-b11b00f4.js';
import { s as simpleCheckbox } from './simpleCheckbox-7d7d14cc.js';
import './hideElement-f0e898f0.js';
import './toggleForce-a73479b0.js';
import './isChecked-d75e63a5.js';

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
//# sourceMappingURL=viewArchive-86435679.js.map
