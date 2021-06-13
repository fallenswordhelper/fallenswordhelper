import { z as getElementById, bQ as pCR } from './calfSystem-86663d02.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-b16d6c2a.js';
import './insertElementBefore-c2bb9234.js';

function moveRHSBoxUpOnRHS(title) {
  const box = getElementById(title);
  if (box) {
    insertElementAfterBegin(pCR, box);
  }
}

export default moveRHSBoxUpOnRHS;
//# sourceMappingURL=moveRHSBoxUpOnRHS-da2d9858.js.map
