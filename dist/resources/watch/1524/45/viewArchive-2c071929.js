import { c as collapse } from './collapse-236198fc.js';
import { I as getValue, a7 as defLastLadderReset, g as getElementsByTagName, p as pCC, d as defTable, aN as containsText, C as getText, X as setValue } from './calfSystem-02fd040d.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-6372af07.js';
import { p as parseDateAsTimestamp } from './parseDateAsTimestamp-b803bda9.js';
import { s as simpleCheckbox } from './simpleCheckbox-d4128ffe.js';
import './hideElement-53ec58d4.js';
import './toggleForce-537064ea.js';
import './isChecked-1aa3d1a2.js';

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
//# sourceMappingURL=viewArchive-2c071929.js.map
