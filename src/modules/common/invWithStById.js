import fromEntries from './fromEntries';
import invWithSt from './invWithSt';

function rekeyInventory(data) {
  return {
    items: {
      ...fromEntries(data.items.map((i) => [i.inv_id, i])),
      ...(data.items.filter((i) => i.is_in_st).length && { fshHasST: true }),
    },
  };
}

export default async function invWithStById() {
  const inv = await invWithSt();
  if (inv?.items) return rekeyInventory(inv);
  return inv;
}
