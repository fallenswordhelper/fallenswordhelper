import cElement from '../../common/cElement/cElement';
import insertElement from '../../common/insertElement';
import { pcc } from '../../support/layout';

let inventoryFailure = '';

export const getInvFail = () => inventoryFailure;

export function injectError(err) {
  if (!inventoryFailure) inventoryFailure = err.message;
  if (inventoryFailure) insertElement(pcc(), cElement('p', { className: 'fshRed', textContent: inventoryFailure }));
}
