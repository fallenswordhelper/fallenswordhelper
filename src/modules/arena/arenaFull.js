import closestTr from '../common/closestTr';
import entries from '../common/entries';
import isObject from '../common/isObject';
import partial from '../common/partial';
import querySelectorArray from '../common/querySelectorArray';
import { set } from '../system/idb';

function func(withPvpId, acc, [key, value]) {
  const thisBtn = withPvpId.find(([, id]) => id === key);
  if (thisBtn) {
    closestTr(thisBtn[0]).style.backgroundColor = '#ff0000';
    acc[key] = value;
  }
  return acc;
}

export default function arenaFull(obj) {
  if (!isObject(obj)) {
    return;
  }
  const theButtons = querySelectorArray(
    '#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]',
  );
  const withPvpId = theButtons.map((e) => [e, e.previousElementSibling.value]);
  const newObj = entries(obj).reduce(partial(func, withPvpId), {});
  set('fsh_arenaFull', newObj);
}
