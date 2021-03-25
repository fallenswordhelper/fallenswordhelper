import { s as partial, bq as profile, $ as $dataAccess } from './calfSystem-c08399e5.js';
import { b as backpack } from './backpack-e785c28b.js';

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

function fetchinv() {
  return backpack().then(formatResponse);
}

function loadInventory() {
  return profile({ subcmd: 'loadinventory' });
}

function daLoadInventory() {
  return $dataAccess(loadInventory, fetchinv);
}

export { daLoadInventory as d };
//# sourceMappingURL=daLoadInventory-95c1ebf3.js.map
