import backpack from '../ajaxQueue/backpack';
import backpackOk from '../ajaxQueue/backpackOk';
import loadInventory from '../app/profile/loadInventory';
import partial from '../common/partial';
import $dataAccess from './$dataAccess';

function byFolder(items, folder) {
  return {
    id: folder.a,
    name: folder.n,
    items: items.filter((i) => i.f === folder.a),
  };
}

function formatResponse(json) {
  const itemsByFolder = json.folders.map(partial(byFolder, json.items));
  return { r: { inventories: itemsByFolder }, s: true };
}

// incomplete
async function fetchinv() {
  const json = await backpack();
  if (!backpackOk(json))
    return { e: { code: 0, message: 'Server Error' }, s: false };
  return formatResponse(json);
}

export default function daLoadInventory() {
  return $dataAccess(loadInventory, fetchinv);
}
