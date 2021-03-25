import { c as collapse } from './collapse-111d9110.js';
import { b as createDiv, i as insertElement, p as pCC } from './calfSystem-c08399e5.js';
import { b as simpleCheckboxHtml } from './simpleCheckbox-7d7d14cc.js';
import './hideElement-f0e898f0.js';
import './toggleForce-a73479b0.js';
import './isChecked-d75e63a5.js';

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
//# sourceMappingURL=hall-1519fada.js.map
