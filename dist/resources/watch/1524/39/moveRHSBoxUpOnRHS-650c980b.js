import { z as getElementById, bM as pCR } from './calfSystem-d5c49dc8.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-c68ff582.js';
import './insertElementBefore-68b894c4.js';

function moveRHSBoxUpOnRHS(title) {
  const box = getElementById(title);
  if (box) {
    insertElementAfterBegin(pCR, box);
  }
}

export default moveRHSBoxUpOnRHS;
//# sourceMappingURL=moveRHSBoxUpOnRHS-650c980b.js.map
