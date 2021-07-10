import getElementById from '../../common/getElementById';
import insertElementAfterBegin from '../../common/insertElementAfterBegin';
import { pCR } from '../../support/layout';

export default function moveRHSBoxUpOnRHS(title) {
  const box = getElementById(title);
  if (box) {
    insertElementAfterBegin(pCR, box);
  }
}
