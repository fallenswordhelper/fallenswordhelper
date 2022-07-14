import daAjaxSendItemsToRecipient from '../../../_dataAccess/daAjaxSendItemsToRecipient';
import daDropItems from '../../../_dataAccess/daDropItems';
import sendEvent from '../../../analytics/sendEvent';
import closestTr from '../../../common/closestTr';
import errorDialog from '../../../common/errorDialog';
import getText from '../../../common/getText';
import hasClass from '../../../common/hasClass';
import querySelectorArray from '../../../common/querySelectorArray';
import getCheckboxesVisible from './getCheckboxesVisible';
import getInv from './getInv';

function getInvId(e) {
  return closestTr(e.target).cells[0].children[0].value;
}

async function doCheckAll(evt) {
  const { items } = await getInv();
  sendEvent('storeitems', 'Check All of Type');
  getCheckboxesVisible()
    .filter((cb) => items[cb.value] && items[cb.value].item_id === items[getInvId(evt)].item_id)
    .forEach((e) => { e.checked = !e.disabled && !e.checked; });
}

function startAction(target) {
  const thisRow = closestTr(target);
  thisRow.cells[0].children[0].disabled = true;
  querySelectorArray('.actionButton', thisRow)
    .forEach((e) => {
      e.disabled = true;
      e.textContent = '';
      e.removeAttribute('data-tooltip');
      e.classList.add('inProgress');
    });
  target.blur();
  target.classList.add('fshSpinner', 'fshSpinner12');
}

function endAction(e, success) {
  e.target.classList.remove('fshSpinner', 'fshSpinner12');
  e.target.classList.add('fshGreen');
  e.target.textContent = success;
}

async function actionHandler(e, fn, success) {
  startAction(e.target);
  const json = await fn([getInvId(e)]);
  if (json && json.s) {
    endAction(e, success);
  } else {
    errorDialog(json);
  }
}

const handler = [
  ['Check All', doCheckAll],
  ['Quick Send', (e) => {
    sendEvent('storeitems', 'Quick Send');
    actionHandler(e, daAjaxSendItemsToRecipient, 'Sent');
  }],
  ['Quick Drop', (e) => {
    sendEvent('storeitems', 'Quick Drop');
    actionHandler(e, daDropItems, 'Dropped');
  }],
];

export default function buttonPress(e) {
  if (e.target.tagName === 'A' && ['AH', 'UFSG'].includes(e.target.textContent)) {
    sendEvent('storeitems', e.target.textContent);
  }
  if (e.target.tagName !== 'BUTTON' || hasClass('custombutton', e.target)) { return; }
  const thisHandler = handler.find(([label]) => label === getText(e.target));
  if (thisHandler) { thisHandler[1](e); }
}
