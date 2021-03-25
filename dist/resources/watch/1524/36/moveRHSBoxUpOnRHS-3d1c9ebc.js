import { z as getElementById, bM as pCR } from './calfSystem-c08399e5.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-220a9aed.js';
import './insertElementBefore-42a90ba9.js';

function moveRHSBoxUpOnRHS(title) {
  const box = getElementById(title);
  if (box) {
    insertElementAfterBegin(pCR, box);
  }
}

export default moveRHSBoxUpOnRHS;
//# sourceMappingURL=moveRHSBoxUpOnRHS-3d1c9ebc.js.map
