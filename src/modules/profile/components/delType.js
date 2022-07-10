import { get } from 'svelte/store';
import closestTd from '../../common/closestTd';
import querySelector from '../../common/querySelector';
import { compStore } from './componentsStore';
import deleteBatch from './deleteBatch';

const getIds = (e) => get(compStore).get(e.detail).get('del');
const getTd = (ctx, i) => closestTd(querySelector(`img[data-tipped*="&inv_id=${i}&"]`, ctx));

export default function delType(thisInvTable, e) {
  deleteBatch(getIds(e).map((invId) => [getTd(thisInvTable, invId), e.detail, invId]));
}
