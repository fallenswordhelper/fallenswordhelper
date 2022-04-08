import getInventoryById from '../../../ajax/getInventoryById';

let invPrm = 0;

export default function getInv() {
  if (!invPrm) {
    invPrm = getInventoryById();
  }
  return invPrm;
}
