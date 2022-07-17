import './hall.css';
import createDiv from '../../common/cElement/createDiv';
import collapse from '../../common/collapse';
import insertElement from '../../common/insertElement';
import { simpleCheckboxHtml } from '../../settings/simpleCheckbox';
import { pcc } from '../../support/layout';

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
  const theTable = pcc().lastElementChild;
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
