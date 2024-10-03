import backpack from '../../ajaxQueue/backpack';
import backpackOk from '../../ajaxQueue/backpackOk';
import partial from '../../common/partial';

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
export default async function fetchinv() {
  const json = await backpack();
  if (!backpackOk(json))
    return { e: { code: 0, message: 'Server Error' }, s: false };
  return formatResponse(json);
}
