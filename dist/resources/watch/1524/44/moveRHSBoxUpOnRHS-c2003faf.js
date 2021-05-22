import { z as getElementById, bO as pCR } from './calfSystem-23094c64.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-8efe6da6.js';
import './insertElementBefore-7c440c87.js';

function moveRHSBoxUpOnRHS(title) {
  const box = getElementById(title);
  if (box) {
    insertElementAfterBegin(pCR, box);
  }
}

export default moveRHSBoxUpOnRHS;
//# sourceMappingURL=moveRHSBoxUpOnRHS-c2003faf.js.map
