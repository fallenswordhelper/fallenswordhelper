import getApp from '../getApp';

export default function viewItemByVCode(itemId, invId, vcode) {
  return getApp({
    cmd: 'fetchitem',
    item_id: itemId,
    inv_id: invId,
    v: vcode,
    t: 2,
  });
}
