import allthen from '../../common/allthen';
import calf from '../../support/calf';
import daGuildFetchInv from '../../_dataAccess/daGuildFetchInv';
import daGuildReport from '../../_dataAccess/daGuildReport';
import daLoadInventory from '../../_dataAccess/daLoadInventory';
import getInventory from '../../ajax/getInventory';
import isArray from '../../common/isArray';
import partial from '../../common/partial';

let composed = [];
let theInv = {};

export const getTheInv = () => theInv;

function cacheTheInv(data) {
  theInv = data;
}

function doInventory() {
  return getInventory().then(cacheTheInv);
}

const composedPot = (el) => el.t === 15;

function getComposedFromBp(data) {
  if (!isArray(data?.r?.inventories)) { return; }
  composed = Array.prototype.concat.apply([], data.r.inventories.map((el) => el.items))
    .filter(composedPot);
}

function doComposedFromBp() {
  return daLoadInventory().then(getComposedFromBp);
}

function getComposedFromGs(data) {
  if (!isArray(data.r)) { return; }
  composed = composed.concat(data.r.filter(composedPot));
}

function doGs() {
  return daGuildFetchInv().then(getComposedFromGs);
}

function doReport() {
  return daGuildReport().then(getComposedFromGs);
}

function thisPot(invId, pot) { return pot.a === invId; }

function addComposedName(item) {
  if (item.type === 15) {
    const cp = composed.find(partial(thisPot, item.inv_id));
    // eslint-disable-next-line no-param-reassign
    if (cp) { item.item_name = cp.n; }
  }
}

function gotSomeStuff() {
  theInv.items.forEach(addComposedName);
}

export function buildInv() {
  const prm = [doInventory()];
  if (calf.subcmd === 'invmanagernew') {
    prm.push(doComposedFromBp());
  }
  if (calf.subcmd === 'guildinvmgr') {
    prm.push(doGs());
    prm.push(doReport());
  }
  return allthen(prm, gotSomeStuff);
}
