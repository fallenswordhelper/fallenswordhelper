import closestTr from '../../../common/closestTr';
import entries from '../../../common/entries';
import fromEntries from '../../../common/fromEntries';
import getTextTrim from '../../../common/getTextTrim';
import getCheckboxesArray from './getCheckboxesArray';
import getInv from './getInv';

let itemsprm = 0;

function updateName(checkboxes, item) {
  if (item.item_id !== 13699) return item.item_name;
  const thisItem = checkboxes.find((cb) => cb.value === String(item.inv_id));
  if (!thisItem) return item.item_name;
  return getTextTrim(thisItem.parentNode.parentNode.children[2]);
}

async function updateNamesForComposedPots(checkboxes) {
  const inv = await getInv();
  if (!inv.items) return {};
  return fromEntries(entries(inv.items).map(([key, obj]) => [key, {
    ...obj,
    item_name: updateName(checkboxes, obj),
  }]));
}

function getItemsFromInventory(checkboxes) {
  if (!itemsprm) itemsprm = updateNamesForComposedPots(checkboxes);
  return itemsprm;
}

export default async function getItems() {
  const checkboxes = getCheckboxesArray();
  if (!checkboxes.length) return [];
  const items = await getItemsFromInventory(checkboxes);
  return checkboxes
    .map((cb) => [
      closestTr(cb).cells[2],
      items[cb.value],
    ])
    .filter(([, invItem]) => invItem);
}
