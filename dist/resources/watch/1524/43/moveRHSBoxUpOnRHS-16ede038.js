import { z as getElementById, bM as pCR } from './calfSystem-476ab75d.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-7c55ba28.js';
import './insertElementBefore-23d4e956.js';

function moveRHSBoxUpOnRHS(title) {
  const box = getElementById(title);
  if (box) {
    insertElementAfterBegin(pCR, box);
  }
}

export default moveRHSBoxUpOnRHS;
//# sourceMappingURL=moveRHSBoxUpOnRHS-16ede038.js.map
