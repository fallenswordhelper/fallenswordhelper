import getElementById from '../../../common/getElementById';
import insertElementAfterBegin from '../../../common/insertElementAfterBegin';
import { pcr } from '../../../support/layout';

export default function moveRHSBoxUpOnRHS(title) {
  const box = getElementById(title);
  if (box) {
    insertElementAfterBegin(pcr(), box);
  }
}
