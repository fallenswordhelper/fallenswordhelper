import collapse from '../../common/collapse';
import { pcc } from '../../support/layout';
import setupPref from './setupPref';

const testArticle = (rowType) => rowType === 1;

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
