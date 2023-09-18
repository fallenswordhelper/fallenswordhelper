import isArray from '../../common/isArray';

const inventoryMap = ({ id, items }) => items.map((o) => ({ ...o, folder_id: id }));

export default function flattenItems(backpack) {
  return isArray(backpack?.inventories) ? backpack.inventories.flatMap(inventoryMap) : [];
}
