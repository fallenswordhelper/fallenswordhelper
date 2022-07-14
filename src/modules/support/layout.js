import getElementById from '../common/getElementById';

let pCL = 0;
let pCC = 0;
let pCR = 0;

export function getPcl() {
  if (!pCL) {
    pCL = getElementById('pCL');
  }
  return pCL;
}

export function getPcc() {
  if (!pCC) {
    pCC = getElementById('pCC');
  }
  return pCC;
}

export function getPcr() {
  if (!pCR) {
    pCR = getElementById('pCR');
  }
  return pCR;
}
