import daGsTake from '../../../_dataAccess/daGsTake';
import daTagItems from '../../../_dataAccess/daTagItems';
import createSpan from '../../../common/cElement/createSpan';
import classHandler from '../../../common/classHandler';
import clickThis from '../../../common/clickThis';
import closest from '../../../common/closest';
import closestTr from '../../../common/closestTr';
import onclick from '../../../common/onclick';
import partial from '../../../common/partial';
import querySelector from '../../../common/querySelector';
import querySelectorArray from '../../../common/querySelectorArray';
import setText from '../../../dom/setText';
import { pcc } from '../../../support/layout';
import actionType from './actionType';

const getCb = (ctx) => querySelector('input', closestTr(ctx));
const getInvId = (ctx) => closest('div', ctx).dataset.invId;

function doCheckAll() {
  querySelectorArray('#pCC input[name="tagIndex[]"]').forEach(clickThis);
}

function checkType(taggable, ctx) {
  const thisInvId = getInvId(ctx);
  const [, , itemId, itemName] = taggable.find(([, invId]) => invId === thisInvId);
  taggable
    .filter(([, , id, name]) => id === itemId && name === itemName)
    .filter(([cb]) => document.body.contains(cb))
    .map(([cb]) => cb)
    .forEach(clickThis);
}

function killButton(btn) {
  const blank = createSpan({ className: btn.className.replace('-btn', '') });
  btn.replaceWith(blank);
}

function killButtons(btnDiv) {
  const btns = querySelectorArray('button:not(.tag-bp-btn)', btnDiv);
  btns.forEach(killButton);
}

function makeSpinner(suffix, ctx) {
  const spinner = createSpan({ className: `tag-${suffix} fshSpinner fshSpinner12` });
  ctx.replaceWith(spinner);
  killButtons(closest('div', spinner));
  return spinner;
}

async function doAction(suffix, fn, success, ctx) {
  const invId = getInvId(ctx);
  getCb(ctx)?.remove();
  const spinner = makeSpinner(suffix, ctx);
  const json = await fn(invId);
  if (json.s) {
    spinner.classList.remove('fshSpinner');
    setText(success, spinner);
  }
}

function addRemoveTags(invId) {
  return daTagItems(actionType(), [invId]);
}

function getEvts(taggable) {
  return [
    ['tag-all-custom', doCheckAll],
    ['tag-bp-btn', partial(doAction, 'bp', daGsTake, 'Taken')],
    ['tag-all-btn', partial(checkType, taggable)],
    ['tag-add-btn', partial(doAction, 'add', addRemoveTags, 'Tagged')],
    ['tag-remove-btn', partial(doAction, 'remove', addRemoveTags, 'Removed')],
  ];
}

export default function clickHandler(taggable) {
  onclick(pcc(), classHandler(getEvts(taggable)));
}
