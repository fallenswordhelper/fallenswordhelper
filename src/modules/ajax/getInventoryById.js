import fromEntries from '../common/fromEntries';
import getInventory from './getInventory';

function rekeyInventory(data) {
  return {
    items: {
      ...fromEntries(data.items.map((i) => [i.inv_id, i])),
      ...(data.items.filter((i) => i.is_in_st).length && { fshHasST: true }),
    },
    folders: data.folders,
  };
}

export default async function getInventoryById() {
  const inv = await getInventory();
  return rekeyInventory(inv);
}
