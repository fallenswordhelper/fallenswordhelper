import { c as collapse } from './collapse-eec55c11.js';
import { I as getValue, a8 as defLastLadderReset, g as getElementsByTagName, p as pCC, d as defTable, aK as containsText, C as getText, Y as setValue } from './calfSystem-476ab75d.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-4fdce3d2.js';
import { p as parseDateAsTimestamp } from './parseDateAsTimestamp-b583d4e1.js';
import { s as simpleCheckbox } from './simpleCheckbox-6b20b115.js';
import './hideElement-0d0f9065.js';
import './toggleForce-aa6abab1.js';
import './isChecked-987a8a1c.js';

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
//# sourceMappingURL=viewArchive-f85e82dc.js.map
