import getElementById from '../../../common/getElementById';
import insertElement from '../../../common/insertElement';
import { getPcl } from '../../../support/layout';

export default function moveRHSBoxToLHS(title) {
  const boxDiv = getElementById(title);
  if (boxDiv) {
    boxDiv.classList.add('pCR');
    insertElement(getPcl(), boxDiv);
  }
}
