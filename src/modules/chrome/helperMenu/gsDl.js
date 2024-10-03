import guildStore from '../../_dataAccess/export/guildStore';
import currentGuildId from '../../common/currentGuildId';
import download from '../../common/download';
import { getAttr } from '../../notepad/inventory/footer/utils';
import { get } from '../../system/idb';

const header =
  'item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,' +
  'in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,' +
  'set_name,set_attack,set_defense,set_armor,set_hp,set_damage,cached\n';
const mainFields = (item) => [
  item.item_id,
  item.inv_id,
  item.item_name,
  item.rarity,
  item.type,
  item.durability,
  item.max_durability,
  item.guild_tag,
  item.in_guide,
  item.player_id,
  item.equipped,
  item.craft,
  item.forge,
];
const statFields = (stats) => [
  stats?.attack ?? '',
  stats?.defense ?? '',
  stats?.armor ?? '',
  stats?.hp ?? '',
  stats?.damage ?? '',
  stats?.stamina ?? '',
  stats?.min_level ?? '',
  stats?.set_name ?? '',
  stats?.set_attack ?? '',
  stats?.set_defense ?? '',
  stats?.set_armor ?? '',
  stats?.set_hp ?? '',
  stats?.set_damage ?? '',
];
const fields = (item) =>
  [...mainFields(item), ...statFields(item.stats), item.cached].join(',');

const toCsv = (items) => items.map(fields).join('\n');
const csvBlob = (csv) => new Blob([csv], { type: 'text/csv' });

const addCachedStats = (cache) => (item) => {
  const lookup = cache.find(({ inv_id: invId }) => invId === item.inv_id);
  if (!lookup?.attributes) {
    return {
      ...item,
      cached: false,
    };
  }
  return {
    ...item,
    stats: {
      ...item.stats,
      armor: getAttr(lookup, 2),
      attack: getAttr(lookup, 0),
      damage: getAttr(lookup, 4),
      defense: getAttr(lookup, 1),
      hp: getAttr(lookup, 3),
      set_name: lookup.set_name ?? '',
      ...(lookup.set_name && { set_armor: getAttr(lookup.set_bonuses, 2) }),
      ...(lookup.set_name && { set_attack: getAttr(lookup.set_bonuses, 0) }),
      ...(lookup.set_name && { set_damage: getAttr(lookup.set_bonuses, 4) }),
      ...(lookup.set_name && { set_defense: getAttr(lookup.set_bonuses, 1) }),
      ...(lookup.set_name && { set_hp: getAttr(lookup.set_bonuses, 3) }),
    },
    cached: true,
  };
};

export default async function gsDl() {
  if (!currentGuildId()) return;
  const json = await guildStore();
  const cache = (await get('fsh_guildinvmgr_cache')) ?? [];
  const updatedItems = json.items.map(addCachedStats(cache));
  download(csvBlob(`${header}${toCsv(updatedItems)}\n`), 'gs_export.csv');
}
