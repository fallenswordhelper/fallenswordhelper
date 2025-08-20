import inventory from '../../../_dataAccess/export/inventory';
import fromEntries from '../../../common/fromEntries';

let invPrm = null;

async function refactorInv() {
  const data = await inventory();
  if (!data?.items) return;
  return {
    folders: data.folders,
    items: fromEntries(data.items.map((o) => [o.inv_id, o])),
  };
}

export default function getInv() {
  if (!invPrm) {
    invPrm = refactorInv();
  }
  return invPrm;
}
