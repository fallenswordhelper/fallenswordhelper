import { c as collapse } from './collapse-8cde9541.js';
import { I as getValue, a7 as defLastLadderReset, g as getElementsByTagName, p as pCC, d as defTable, aM as containsText, C as getText, X as setValue } from './calfSystem-23094c64.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-1704b1c7.js';
import { p as parseDateAsTimestamp } from './parseDateAsTimestamp-aba398b8.js';
import { s as simpleCheckbox } from './simpleCheckbox-5f548ee6.js';
import './hideElement-3be61495.js';
import './toggleForce-46f497a3.js';
import './isChecked-5630e19a.js';

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
//# sourceMappingURL=viewArchive-f105cc2d.js.map
