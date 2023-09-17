import daLoadInventory from '../_dataAccess/daLoadInventory';
import daTradeSecure from '../_dataAccess/daTradeSecure';
import basicItem from '../_dataAccess/export/basicItem';
import flattenItems from '../_dataAccess/export/flattenItems';
import all from './all';
import fromEntries from './fromEntries';
import playerId from './playerId';

const itemIds = ({ items }) => items.map(({ a }) => [a, true]);

export default async function invWithSt() {
  const [appInv, appSts] = await all([daLoadInventory(), daTradeSecure()]);
  if (!appInv?.s || !appSts?.s) return;
  const appInvItems = flattenItems(appInv.r).map(basicItem);
  const itemsInSt = fromEntries(appSts.r.sent.flatMap(itemIds));
  return {
    items: appInvItems.map((o) => ({
      ...o,
      ...(itemsInSt?.[o.inv_id] && { is_in_st: true }),
    })),
    player_id: playerId(),
  };
}
