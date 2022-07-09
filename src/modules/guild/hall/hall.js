import './hall.css';
import collapse from '../../common/collapse';
import createDiv from '../../common/cElement/createDiv';
import { getPcc } from '../../support/layout';
import insertElement from '../../common/insertElement';
import { simpleCheckboxHtml } from '../../settings/simpleCheckbox';

function testArticle(rowType) { return rowType === 1; }

function setupPref(prefName, injector) {
  const flDiv = createDiv({
    className: 'fshHallPref',
    innerHTML: simpleCheckboxHtml(prefName),
  });
  injector.classList.add('fshRelative');
  insertElement(injector, flDiv);
}

export default function hall() {
  const prefName = 'collapseHallPosts';
  const theTable = getPcc().lastElementChild;
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
