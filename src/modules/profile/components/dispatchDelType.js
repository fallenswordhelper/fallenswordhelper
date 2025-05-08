import { get } from 'svelte/store';
import closestTd from '../../common/closestTd';
import querySelector from '../../common/querySelector';
import { compStore } from './componentsStore';
import deleteBatch from './deleteBatch';

const getIds = (itemId) => get(compStore).get(itemId).get('del');
const getTd = (ctx, i) =>
  closestTd(querySelector(`img[data-tipped*="&inv_id=${i}&"]`, ctx));

export default function dispatchDelType(thisInvTable, itemId) {
  deleteBatch(
    getIds(itemId).map((invId) => [getTd(thisInvTable, invId), itemId, invId]),
  );
}
