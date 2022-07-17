import getElementById from '../common/getElementById';

let thisPcl = 0;
let thisPcc = 0;
let thisPcr = 0;

export function pcl() {
  if (!thisPcl) thisPcl = getElementById('pCL');
  return thisPcl;
}

export function pcc() {
  if (!thisPcc) thisPcc = getElementById('pCC');
  return thisPcc;
}

export function pcr() {
  if (!thisPcr) thisPcr = getElementById('pCR');
  return thisPcr;
}
