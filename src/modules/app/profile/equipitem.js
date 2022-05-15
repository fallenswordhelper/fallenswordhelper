import profile from './profile';

export default function equipitem(item) {
  return profile({
    subcmd: 'equipitem',
    inventory_id: item,
  });
}
