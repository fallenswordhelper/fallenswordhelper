import uniq from '../../common/uniq';
import { cdn } from '../../system/system';

const tip = (playerId, itemId, invId) => `fetchitem.php?item_id=${itemId}&inv_id=${invId}&t=1&p=${
  playerId}`;
const style = (itemId) => `background-image: url(${cdn}items/${itemId}.gif)`;

export default function rollupExtractable(playerId, filteredExtractable) {
  return uniq(filteredExtractable, 'item_name').map((i) => ({
    ...i,
    count: filteredExtractable.filter((e) => e.item_name === i.item_name).length,
    delPending: false,
    extractIds: filteredExtractable.filter((e) => e.item_name === i.item_name).map((e) => e.inv_id),
    style: style(i.item_id),
    tip: tip(playerId, i.item_id, i.inv_id),
  }));
}
