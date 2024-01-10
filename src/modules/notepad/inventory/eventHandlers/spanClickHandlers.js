import daEquipItem from '../../../_dataAccess/daEquipItem';
import ajaxSendItems from '../../../ajax/ajaxSendItems';
import dropItem from '../../../ajax/dropItem';
import storeItems from '../../../ajax/storeItems';
import useItem from '../../../ajax/useItem';
import { queueRecallItem, queueTakeItem } from '../../../ajaxQueue/queue';
import partial from '../../../common/partial';
import doAction from './doAction';
import { invEvent } from './telemetry';

function setName(fshInv, target) { // jQuery
  invEvent('setName');
  $(fshInv).DataTable().search(target.attr('set')).draw();
  $(`#${fshInv.id}_filter input`).trigger('focus');
}

function takeItem(target) { // jQuery
  invEvent('takeItem');
  doAction(partial(queueTakeItem, target.attr('invid'), target.attr('action')), target);
}

function recallItem(target) { // jQuery
  invEvent('recallItem');
  doAction(
    partial(
      queueRecallItem,
      target.attr('invid'),
      target.attr('playerid'),
      target.attr('mode'),
      target.attr('action'),
    ),
    target,
  );
}

function genericEventAction(fn, someData, thisEvent, target) {
  invEvent(thisEvent);
  doAction(partial(fn, someData), target);
}

function doStoreItem(target) { // jQuery
  genericEventAction(storeItems, [target.attr('invid')], 'doStoreItem', target);
}

function useWear(fn, thisEvent, target) { // jQuery
  genericEventAction(fn, target.attr('invid'), thisEvent, target);
}

const doUseItem = (target) => useWear(useItem, 'doUseItem', target);
const doWearItem = (target) => useWear(daEquipItem, 'doWearItem', target);

function dropSend(fn, thisEvent, target) { // jQuery
  genericEventAction(fn, [target.data('inv')], thisEvent, target);
}

const doDropItem = (target) => dropSend(dropItem, 'doDropItem', target);
const doSendItem = (target) => dropSend(ajaxSendItems, 'doSendItem', target);

const genericHandler = (fn) => (e) => fn($(e.target)); // jQuery

function spanClick(fshInv, [className, fn]) { // jQuery
  $(fshInv).on('click', `span.${className}`, genericHandler(fn));
}

export default function spanClickHandlers(fshInv) {
  [
    ['dropItem', doDropItem],
    ['recallItem', recallItem],
    ['sendItem', doSendItem],
    ['setName', partial(setName, fshInv)],
    ['storeItem', doStoreItem],
    ['takeItem', takeItem],
    ['useItem', doUseItem],
    ['wearItem', doWearItem],
  ].forEach(partial(spanClick, fshInv));
}
