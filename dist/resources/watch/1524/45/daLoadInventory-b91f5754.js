import { s as partial, bv as profile, $ as $dataAccess } from './calfSystem-02fd040d.js';
import { b as backpack } from './backpack-86439dfc.js';

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
//# sourceMappingURL=daLoadInventory-b91f5754.js.map
