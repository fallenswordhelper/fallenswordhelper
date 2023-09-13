import daLoadInventory from '../../../_dataAccess/daLoadInventory';
import basicItem from '../../../_dataAccess/export/basicItem';
import enumFolders from '../../../_dataAccess/export/enumFolders';
import flattenItems from '../../../_dataAccess/export/flattenItems';
import fromEntries from '../../../common/fromEntries';

let invPrm = null;

async function refactorInv() {
  const data = await daLoadInventory();
  if (!data?.s) return;
  return {
    folders: enumFolders(data.r),
    items: fromEntries(
      flattenItems(data.r)
        .map(basicItem)
        .map((o) => [o.inv_id, o]),
    ),
  };
}

export default function getInv() {
  if (!invPrm) {
    invPrm = refactorInv();
  }
  return invPrm;
}
