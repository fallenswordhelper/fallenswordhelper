import backpack from '../../ajaxQueue/backpack';
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
  return { r: itemsByFolder, s: true };
}

// TODO out of date
export default function fetchinv() {
  return backpack().then(formatResponse);
}
