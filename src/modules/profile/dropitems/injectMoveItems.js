import { mount } from 'svelte';
import daSendToFolder from '../../_dataAccess/daSendToFolder';
import sendEvent from '../../analytics/sendEvent';
import chunk from '../../common/chunk';
import closestTable from '../../common/closestTable';
import closestTr from '../../common/closestTr';
import getText from '../../common/getText';
import partial from '../../common/partial';
import querySelectorArray from '../../common/querySelectorArray';
import getCustomUrlParameter from '../../system/getCustomUrlParameter';
import getCheckedItems from './getCheckedItems';
import MoveItems from './MoveItems.svelte';
import removeRow from './removeRow';

const folderMap = (i) => ({
  id: getCustomUrlParameter(i.parentNode.href, 'folder_id'),
  name: getText(i.parentNode.parentNode),
});

async function moveList(folderId, list) {
  const json = await daSendToFolder(
    folderId,
    list.map((c) => c.value),
  );
  if (json?.s) list.forEach(removeRow);
}

function moveItemsToFolder(folderId) {
  sendEvent('dropitems', 'Move to Folder');
  chunk(30, getCheckedItems()).forEach(partial(moveList, folderId));
}

export default function injectMoveItems() {
  const folderImgs = querySelectorArray('#pCC img[src$="/folder.png"]');
  if (!folderImgs.length) return;
  const flrRow = closestTr(closestTable(folderImgs[0]));
  const folders = folderImgs.map(folderMap);
  mount(MoveItems, {
    anchor: flrRow.nextElementSibling,
    props: { folders, moveItemsToFolder },
    target: flrRow.parentNode,
  });
}
