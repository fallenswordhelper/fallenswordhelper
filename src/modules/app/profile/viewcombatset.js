import alpha from '../../common/alpha';
import profile from './profile';

export default async function viewcombatset() {
  const json = await profile({ subcmd: 'viewcombatset' });
  if (json?.r)
    return { ...json, r: json.r.sort((a, b) => alpha(a.name, b.name)) };
  return json;
}
