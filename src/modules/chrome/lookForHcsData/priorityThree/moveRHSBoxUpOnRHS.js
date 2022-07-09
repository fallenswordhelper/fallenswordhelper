import getElementById from '../../../common/getElementById';
import { getPcr } from '../../../support/layout';
import insertElementAfterBegin from '../../../common/insertElementAfterBegin';

export default function moveRHSBoxUpOnRHS(title) {
  const box = getElementById(title);
  if (box) {
    insertElementAfterBegin(getPcr(), box);
  }
}
