import mercs from './mercs';

export default function disband(id) {
  return mercs({ subcmd2: 'disband', merc_id: id });
}
