import { c as collapse } from './collapse-e2bce66f.js';
import { b as createDiv, i as insertElement, p as pCC } from './calfSystem-6840a38e.js';
import { b as simpleCheckboxHtml } from './simpleCheckbox-9089359a.js';
import './hideElement-4575b6b4.js';
import './toggleForce-465fdd4f.js';
import './isChecked-7bdba1ab.js';

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
//# sourceMappingURL=hall-7a9456a4.js.map
