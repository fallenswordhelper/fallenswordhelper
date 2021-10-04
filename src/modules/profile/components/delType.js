import closestTd from '../../common/closestTd';
import { compStore } from './componentsStore';
import deleteBatch from './deleteBatch';
import { get } from 'svelte/store';
import querySelector from '../../common/querySelector';

const getIds = (e) => get(compStore).get(e.detail).get('del');
const getTd = (ctx, i) => closestTd(querySelector(`img[data-tipped*="&inv_id=${i}&"]`, ctx));

export default async function delType(thisInvTable, e) {
  deleteBatch(getIds(e).map((invId) => [getTd(thisInvTable, invId), e.detail, invId]));
}
