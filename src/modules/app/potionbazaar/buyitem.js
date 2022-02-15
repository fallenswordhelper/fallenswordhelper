import getApp from '../getApp';

export default function buyitem(item, quantity) {
  return getApp({
    cmd: 'potionbazaar',
    subcmd: 'buyitem',
    item_id: item,
    quantity,
  });
}
