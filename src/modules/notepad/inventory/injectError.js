import cElement from '../../common/cElement/cElement';
import insertElement from '../../common/insertElement';

let inventoryFailure = '';

export const getInvFail = () => inventoryFailure;

export function injectError(target, err) {
  if (!inventoryFailure) inventoryFailure = err.message;
  if (inventoryFailure) {
    insertElement(target, cElement('p', {
      className: 'fshRed',
      textContent: inventoryFailure,
    }));
  }
}
