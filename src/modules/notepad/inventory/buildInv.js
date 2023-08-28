import daGuildFetchInv from '../../_dataAccess/daGuildFetchInv';
import daGuildReport from '../../_dataAccess/daGuildReport';
import daLoadInventory from '../../_dataAccess/daLoadInventory';
import getInventory from '../../ajax/getInventory';
import all from '../../common/all';
import isArray from '../../common/isArray';
import partial from '../../common/partial';
import calf from '../../support/calf';

let composed = [];
let theInv = {};

export const getTheInv = () => theInv;

function cacheTheInv(data) {
  theInv = data;
}

async function doInventory() {
  const data = await getInventory();
  cacheTheInv(data);
}

const composedPot = (el) => el.t === 15;

function getComposedFromBp(data) {
  if (!isArray(data?.r?.inventories)) return;
  composed = data?.r?.inventories.flatMap((el) => el.items).filter(composedPot);
}

async function doComposedFromBp() {
  const data = await daLoadInventory();
  getComposedFromBp(data);
}

function getComposedFromGs(data) {
  if (!isArray(data?.r)) return;
  composed = composed.concat(data.r.filter(composedPot));
}

async function doGs() {
  const data = await daGuildFetchInv();
  getComposedFromGs(data);
}

async function doReport() {
  const data = await daGuildReport();
  getComposedFromGs(data);
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
  if (isArray(theInv?.items)) theInv.items.forEach(addComposedName);
}

export async function buildInv() {
  const prm = [doInventory()];
  if (calf.subcmd === 'invmanagernew') {
    prm.push(doComposedFromBp());
  }
  if (calf.subcmd === 'guildinvmgr') {
    prm.push(doGs());
    prm.push(doReport());
  }
  await all(prm);
  gotSomeStuff();
}
