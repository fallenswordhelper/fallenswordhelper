import { z as getElementById, i as insertElement, bN as pCL } from './calfSystem-c08399e5.js';

function moveRHSBoxToLHS(title) {
  const boxDiv = getElementById(title);
  if (boxDiv) {
    boxDiv.classList.add('pCR');
    insertElement(pCL, boxDiv);
  }
}

export default moveRHSBoxToLHS;
//# sourceMappingURL=moveRHSBoxToLHS-3e898c1f.js.map
