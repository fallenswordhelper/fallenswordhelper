import { c as collapse } from './collapse-8cde9541.js';
import { b as createDiv, i as insertElement, p as pCC } from './calfSystem-23094c64.js';
import { b as simpleCheckboxHtml } from './simpleCheckbox-5f548ee6.js';
import './hideElement-3be61495.js';
import './toggleForce-46f497a3.js';
import './isChecked-5630e19a.js';

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
//# sourceMappingURL=hall-1ecd6c4d.js.map
