import { c as collapse } from './collapse-236198fc.js';
import { b as createDiv, i as insertElement, p as pCC } from './calfSystem-02fd040d.js';
import { b as simpleCheckboxHtml } from './simpleCheckbox-d4128ffe.js';
import './hideElement-53ec58d4.js';
import './toggleForce-537064ea.js';
import './isChecked-1aa3d1a2.js';

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
//# sourceMappingURL=hall-c1663c9e.js.map
