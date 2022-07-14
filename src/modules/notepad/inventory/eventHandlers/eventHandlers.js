import ajaxSendItems from '../../../ajax/ajaxSendItems';
import dropItem from '../../../ajax/dropItem';
import equipItem from '../../../ajax/equipItem';
import moveItem from '../../../ajax/moveItem';
import storeItems from '../../../ajax/storeItems';
import useItem from '../../../ajax/useItem';
import { queueRecallItem, queueTakeItem } from '../../../ajaxQueue/queue';
import partial from '../../../common/partial';
import allChecks from './allChecks';
import changeLvls from './changeLvls';
import clearChecks from './clearChecks';
import doAction from './doAction';
import getChecks from './getChecks';
import resetChecks from './resetChecks';
import resetLvls from './resetLvls';

function setName(fshInv, e) { // jQuery
  $(fshInv).DataTable().search($(e.target).attr('set')).draw();
  $(`#${fshInv.id}_filter input`).trigger('focus');
}

function takeItem(e) { // jQuery
  const target = $(e.target);
  doAction(partial(queueTakeItem, target.attr('invid'), target.attr('action')), target);
}

function recallItem(e) { // jQuery
  const target = $(e.target);
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

function wearUse(e, fn) { // jQuery
  const target = $(e.target);
  doAction(partial(fn, target.attr('invid')), target);
}

function doMoveItem(e) { // jQuery
  const target = $(e.target);
  moveItem([target.data('inv')], target.val());
}

function doStoreItem(e) { // jQuery
  const target = $(e.target);
  doAction(partial(storeItems, [target.attr('invid')]), target);
}

function dropSend(e, fn) { // jQuery
  const target = $(e.target);
  doAction(partial(fn, [target.data('inv')]), target);
}

function elClick(fshInv, el) { // jQuery
  $(el[0]).on('click', partial(el[1], fshInv));
}

function elementClickHandlers(fshInv) {
  [
    ['#fshReset', resetLvls],
    ['#fshAll', allChecks],
    ['#fshNone', clearChecks],
    ['#fshDefault', resetChecks],
  ].forEach(partial(elClick, fshInv));
}

function spanClick(fshInv, el) { $(fshInv).on('click', `span.${el[0]}`, el[1]); } // jQuery

function spanClickHandlers(fshInv) {
  [
    ['setName', partial(setName, fshInv)],
    ['takeItem', takeItem],
    ['recallItem', recallItem],
    ['wearItem', (e) => wearUse(e, equipItem)],
    ['useItem', (e) => wearUse(e, useItem)],
    ['dropItem', (e) => dropSend(e, dropItem)],
    ['sendItem', (e) => dropSend(e, ajaxSendItems)],
    ['storeItem', doStoreItem],
  ].forEach(partial(spanClick, fshInv));
}

function setupClickHandlers(fshInv) { // jQuery
  elementClickHandlers(fshInv);
  $('table.fshInvFilter').on('click', 'input[type="checkbox"]', partial(getChecks, fshInv));
  spanClickHandlers(fshInv);
}

export default function eventHandlers(fshInv) { // jQuery
  $('#fshMinLvl, #fshMaxLvl').on('keyup', partial(changeLvls, fshInv));
  $(fshInv).on('change', 'select.fshMoveItem', doMoveItem);
  setupClickHandlers(fshInv);
}
