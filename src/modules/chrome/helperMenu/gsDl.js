import guildStore from '../../_dataAccess/export/guildStore';
import currentGuildId from '../../common/currentGuildId';
import download from '../../common/download';

const header = 'item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,'
  + 'in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,'
  + 'set_name\n';
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
];
const fields = (item) => [
  ...mainFields(item),
  ...statFields(item.stats),
].join(',');

const toCsv = (json) => json.items.map(fields).join('\n');
const csvBlob = (csv) => new Blob([csv], { type: 'text/csv' });

export default async function gsDl() {
  if (!currentGuildId()) return;
  const json = await guildStore();
  download(csvBlob(`${header}${toCsv(json)}\n`), 'gs_export.csv');
}
