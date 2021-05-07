import { c as collapse } from './collapse-eec55c11.js';
import { b as createDiv, i as insertElement, p as pCC } from './calfSystem-476ab75d.js';
import { b as simpleCheckboxHtml } from './simpleCheckbox-6b20b115.js';
import './hideElement-0d0f9065.js';
import './toggleForce-aa6abab1.js';
import './isChecked-987a8a1c.js';

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
//# sourceMappingURL=hall-70f8f127.js.map
