import sendEvent from '../../../analytics/sendEvent';
import batch from '../../../common/batch';
import closestTr from '../../../common/closestTr';
import partial from '../../../common/partial';
import toggleForce from '../../../common/toggleForce';
import FolderFilter from './FolderFilter.svelte';
import getCheckboxesArray from './getCheckboxesArray';

function startFolderFilter(inv, form) {
  return new FolderFilter({
    anchor: form,
    props: { inv },
    target: form.parentNode,
  });
}

function updateList(inv, id, ctx) {
  ctx.checked = false;
  const tr = closestTr(ctx);
  const folder = inv.items[ctx.value].folder_id;
  const force = id !== -2 && id !== folder;
  toggleForce(tr, force);
  toggleForce(tr.nextElementSibling, force);
}

function doFilter(inv, e) {
  sendEvent('storeitems', 'Filter Folder');
  batch([
    3,
    getCheckboxesArray(),
    0,
    partial(updateList, inv, Number(e.detail)),
  ]);
}

export default function doFolderFilter(inv, form) {
  const folderFilter = startFolderFilter(inv, form);
  folderFilter.$on('filter', partial(doFilter, inv));
}
