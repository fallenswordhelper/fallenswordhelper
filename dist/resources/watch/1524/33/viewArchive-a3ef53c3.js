import { c as collapse } from './collapse-fddf7981.js';
import { H as getValue, a6 as defLastLadderReset, g as getElementsByTagName, p as pCC, d as defTable, aC as containsText, B as getText, W as setValue } from './calfSystem-cc2b30b5.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-270a1d76.js';
import { p as parseDateAsTimestamp } from './parseDateAsTimestamp-14489206.js';
import { s as simpleCheckbox } from './simpleCheckbox-6bfaf11b.js';
import './hideElement-eb117e0e.js';
import './toggleForce-6831dfcc.js';
import './isChecked-622b73bf.js';

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
//# sourceMappingURL=viewArchive-a3ef53c3.js.map
