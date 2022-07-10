import daDestroyComponent from '../../_dataAccess/daDestroyComponent';
import dynamicAlert from '../../alert/dynamicAlert';
import all from '../../common/all';
import createDiv from '../../common/cElement/createDiv';
import chunk from '../../common/chunk';
import partial from '../../common/partial';
import uniq from '../../common/uniq';
import { compStore } from './componentsStore';

function updateItem(invIds, itemType) {
  if (!itemType) { return; }
  const items = itemType.get('del').filter((i) => !invIds.includes(i));
  itemType.set('del', items);
}

function deleteComponent(itemId, invIds) {
  compStore.update((m) => {
    updateItem(invIds, m.get(itemId));
    return m;
  });
}

function setValue(itemId, key, value) {
  compStore.update((m) => {
    m.get(itemId)?.set(key, value);
    return m;
  });
}

function spinner(container) {
  if (!container) { return; }
  const prev = container.children[0];
  prev.replaceWith(createDiv({
    className: 'compSumSpin',
    innerHTML: '<span class="fshSpinner fshSpinner12"></span>',
  }));
  return prev;
}

function setDelPending(flag, itemId) {
  setValue(itemId, 'delPending', flag);
}

function boxesRestore(boxes) {
  boxes.forEach(([b, p]) => { if (p) { b.children[0].replaceWith(p); } });
}

const boxesClear = (boxes) => boxes.forEach(([t]) => t?.children[0]?.remove());
const boxesSpinner = (boxes) => boxes.map(([b]) => [b, spinner(b)]);
const getItemId = ([, i]) => i;
const getUniqs = (imgData) => uniq(imgData.map(getItemId));
const getInvId = ([,, i]) => i;
const getRollup = (imgData) => getUniqs(imgData).map((i) => [
  i,
  imgData.filter(([, d]) => d === i).map(getInvId),
]);
const removeStored = (itemData) => deleteComponent(...itemData);

async function doDelete(imgData) {
  const boxesWithPrev = boxesSpinner(imgData);
  const json = await daDestroyComponent(imgData.map(getInvId));
  if (json?.s) {
    getRollup(imgData).forEach(removeStored);
    boxesClear(boxesWithPrev);
  } else {
    dynamicAlert(json?.e?.message ?? 'Unknown Error');
    boxesRestore(boxesWithPrev);
  }
}

export default async function deleteBatch(imgData) {
  const uniqItemIds = getUniqs(imgData);
  uniqItemIds.forEach(partial(setDelPending, true));
  await all(chunk(30, imgData).map(doDelete));
  uniqItemIds.forEach(partial(setDelPending, false));
}
