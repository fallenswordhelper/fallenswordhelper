import regExpGroups from '../../common/regExpGroups';
import { fetchItemRe } from '../../support/constants';

export default function getProps(target) {
  const { itemId, invId } = regExpGroups(fetchItemRe, target.dataset.tipped);
  return [Number(itemId), Number(invId)];
}
