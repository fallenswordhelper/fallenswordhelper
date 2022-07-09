import getElementById from '../../../common/getElementById';
import { getPcl } from '../../../support/layout';
import insertElement from '../../../common/insertElement';

export default function moveRHSBoxToLHS(title) {
  const boxDiv = getElementById(title);
  if (boxDiv) {
    boxDiv.classList.add('pCR');
    insertElement(getPcl(), boxDiv);
  }
}
