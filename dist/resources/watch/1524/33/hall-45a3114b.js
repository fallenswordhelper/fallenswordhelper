import { c as collapse } from './collapse-fddf7981.js';
import { b as createDiv, i as insertElement, p as pCC } from './calfSystem-cc2b30b5.js';
import { b as simpleCheckboxHtml } from './simpleCheckbox-6bfaf11b.js';
import './hideElement-eb117e0e.js';
import './toggleForce-6831dfcc.js';
import './isChecked-622b73bf.js';

var css = ".fshHallPref {\n  position: absolute;\n  right: 1em;\n  top: 0.2em;\n}\n";
var modules_f2f10a1c = {};

function testArticle(rowType) { return rowType === 1; }

function setupPref(prefName, injector) {
  const flDiv = createDiv({
    className: 'fshHallPref',
    innerHTML: simpleCheckboxHtml(prefName),
  });
  injector.classList.add('fshRelative');
  insertElement(injector, flDiv);
}

function guildHall() {
  const prefName = 'collapseHallPosts';
  const theTable = pCC.lastElementChild;
  if (theTable instanceof HTMLTableElement) {
    setupPref(prefName, theTable.previousElementSibling.previousElementSibling);
    collapse({
      prefName,
      theTable,
      headInd: 3,
      articleTest: testArticle,
    });
  }
}

export default guildHall;
//# sourceMappingURL=hall-45a3114b.js.map
