import { c as collapse } from './collapse-7ac84491.js';
import { b as createDiv, i as insertElement, p as pCC } from './calfSystem-d5c49dc8.js';
import { b as simpleCheckboxHtml } from './simpleCheckbox-8c4408ef.js';
import './hideElement-d197c06b.js';
import './toggleForce-5182a27d.js';
import './isChecked-6d3ab351.js';

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
//# sourceMappingURL=hall-61e1f21a.js.map
