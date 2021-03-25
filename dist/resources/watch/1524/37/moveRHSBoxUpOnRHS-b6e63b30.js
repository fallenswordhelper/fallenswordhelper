import { z as getElementById, bM as pCR } from './calfSystem-6840a38e.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-7817ee91.js';
import './insertElementBefore-656c48d5.js';

function moveRHSBoxUpOnRHS(title) {
  const box = getElementById(title);
  if (box) {
    insertElementAfterBegin(pCR, box);
  }
}

export default moveRHSBoxUpOnRHS;
//# sourceMappingURL=moveRHSBoxUpOnRHS-b6e63b30.js.map
