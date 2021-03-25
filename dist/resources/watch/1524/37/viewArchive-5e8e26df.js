import { c as collapse } from './collapse-e2bce66f.js';
import { I as getValue, a8 as defLastLadderReset, g as getElementsByTagName, p as pCC, d as defTable, aD as containsText, C as getText, X as setValue } from './calfSystem-6840a38e.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-c42a1aa1.js';
import { p as parseDateAsTimestamp } from './parseDateAsTimestamp-4f7382a5.js';
import { s as simpleCheckbox } from './simpleCheckbox-9089359a.js';
import './hideElement-4575b6b4.js';
import './toggleForce-465fdd4f.js';
import './isChecked-7bdba1ab.js';

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
//# sourceMappingURL=viewArchive-5e8e26df.js.map
