import { mount } from 'svelte';
import sendEvent from '../../../analytics/sendEvent';
import batch from '../../../common/batch';
import closestTr from '../../../common/closestTr';
import partial from '../../../common/partial';
import toggleForce from '../../../common/toggleForce';
import FolderFilter from './FolderFilter.svelte';
import getCheckboxesArray from './getCheckboxesArray';

function updateList(inv, id, ctx) {
  ctx.checked = false;
  const tr = closestTr(ctx);
  const folder = inv.items[ctx.value]?.folder_id;
  const force = id !== -2 && id !== folder;
  toggleForce(tr, force);
  toggleForce(tr.nextElementSibling, force);
}

function filterHandler(inv, folderId) {
  sendEvent('storeitems', 'Filter Folder');
  batch([
    3,
    getCheckboxesArray(),
    0,
    partial(updateList, inv, Number(folderId)),
  ]);
}

export default function doFolderFilter(inv, form) {
  mount(FolderFilter, {
    anchor: form,
    props: { doFilter: partial(filterHandler, inv), inv },
    target: form.parentNode,
  });
}
