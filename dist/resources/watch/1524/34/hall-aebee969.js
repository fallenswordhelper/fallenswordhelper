import { c as collapse } from './collapse-374bd108.js';
import { b as createDiv, i as insertElement, p as pCC } from './calfSystem-d1de1997.js';
import { b as simpleCheckboxHtml } from './simpleCheckbox-d91a8af3.js';
import './hideElement-7b9c883f.js';
import './toggleForce-f376374b.js';
import './isChecked-d96c8dec.js';

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
//# sourceMappingURL=hall-aebee969.js.map
