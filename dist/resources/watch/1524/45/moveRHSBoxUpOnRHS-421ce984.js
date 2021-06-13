import { z as getElementById, bQ as pCR } from './calfSystem-02fd040d.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-21fe50bb.js';
import './insertElementBefore-c442a2a7.js';

function moveRHSBoxUpOnRHS(title) {
  const box = getElementById(title);
  if (box) {
    insertElementAfterBegin(pCR, box);
  }
}

export default moveRHSBoxUpOnRHS;
//# sourceMappingURL=moveRHSBoxUpOnRHS-421ce984.js.map
