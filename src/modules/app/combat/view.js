import getApp from '../getApp';

export default function view(id) {
  return getApp({
    cmd: 'combat',
    subcmd: 'view',
    combat_id: id,
  });
}
