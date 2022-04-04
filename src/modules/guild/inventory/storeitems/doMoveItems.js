import MoveItems from '../../../profile/dropitems/MoveItems.svelte';
import chunk from '../../../common/chunk';
import closestTr from '../../../common/closestTr';
import daSendToFolder from '../../../_dataAccess/daSendToFolder';
import entries from '../../../common/entries';
import partial from '../../../common/partial';
import querySelectorArray from '../../../common/querySelectorArray';
import sendEvent from '../../../analytics/sendEvent';
import toggleForce from '../../../common/toggleForce';

function startMoveItems(inv, form) {
  const folders = [
    { id: '-1', name: 'Main' },
    ...entries(inv.folders).map(([id, name]) => ({ id, name })),
  ];
  return new MoveItems({
    anchor: form,
    props: { folders },
    target: form.parentNode,
  });
}

function setFolder(ctx, folderId, itemId) {
  ctx.items[itemId].folder_id = Number(folderId);
}

function removeRow(inv, folderId, ctx) {
  ctx.checked = false;
  setFolder(inv, folderId, ctx.value);
  const tr = closestTr(ctx);
  toggleForce(tr, true);
  toggleForce(tr.nextElementSibling, true);
}

async function doMove(inv, folderId, list) {
  const json = await daSendToFolder(folderId, list.map((c) => c.value));
  if (json.s) {
    list.forEach(partial(removeRow, inv, folderId));
  }
}

function moveHandler(inv, e) {
  sendEvent('storeitems', 'Move to Folder');
  const checkedItems = querySelectorArray('[name="storeIndex[]"]:checked');
  chunk(30, checkedItems).forEach(partial(doMove, inv, e.detail));
}
export default function doMoveItems(inv, form) {
  const moveItems = startMoveItems(inv, form);
  moveItems.$on('move', partial(moveHandler, inv));
}
