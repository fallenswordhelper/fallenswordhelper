import createDiv from '../common/cElement/createDiv';
import getArrayByTagName from '../common/getArrayByTagName';
import insertElement from '../common/insertElement';
import setInnerHtml from '../dom/setInnerHtml';
import compressBio from '../profile/bio/compressBio';
import { defTable } from '../support/constants';
import { getPcc } from '../support/layout';

export default function compressHistory() {
  const bioTable = getArrayByTagName(defTable, getPcc()).slice(-2, -1)[0];
  if (!bioTable) return;
  const thisCell = bioTable.rows[0].cells[0];
  const newDiv = createDiv({
    id: 'profile-bio',
    innerHTML: thisCell.innerHTML,
  });
  setInnerHtml('', thisCell);
  insertElement(thisCell, newDiv);
  compressBio();
}
