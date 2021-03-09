import { c as collapse } from './collapse-374bd108.js';
import { H as getValue, a6 as defLastLadderReset, g as getElementsByTagName, p as pCC, d as defTable, aC as containsText, B as getText, W as setValue } from './calfSystem-d1de1997.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-5f5dac02.js';
import { p as parseDateAsTimestamp } from './parseDateAsTimestamp-b59a26e1.js';
import { s as simpleCheckbox } from './simpleCheckbox-d91a8af3.js';
import './hideElement-7b9c883f.js';
import './toggleForce-f376374b.js';
import './isChecked-d96c8dec.js';

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
//# sourceMappingURL=viewArchive-71628cf3.js.map
