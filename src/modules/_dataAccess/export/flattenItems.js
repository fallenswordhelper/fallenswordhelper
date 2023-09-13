const inventoryMap = ({ id, items }) => items.map((o) => ({ ...o, folder_id: id }));

export default function flattenItems(backpack) {
  return backpack.inventories.flatMap(inventoryMap);
}
