import { b0 as profile } from './calfSystem-b0234231.js';

function loadInventory() {
  return profile({ subcmd: 'loadinventory' });
}

// import { $dataAccess } from './_dataAccess';

function daLoadInventory() {
  // return $dataAccess(loadInventory, fetchinv);
  return loadInventory();
}

export { daLoadInventory as d };
//# sourceMappingURL=daLoadInventory-0a0b9643.js.map
