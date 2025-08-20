import profile from './profile';

export default function dodropitems(itemsAry) {
  return profile({
    subcmd: 'dodropitems',
    items: itemsAry,
  });
}
