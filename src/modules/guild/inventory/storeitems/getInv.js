import getInventoryById from '../../../ajax/getInventoryById';

let invPrm = null;

export default function getInv() {
  if (!invPrm) {
    invPrm = getInventoryById();
  }
  return invPrm;
}
