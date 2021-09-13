import createAnchor from '../../common/cElement/createAnchor';
import guildStore from '../../_dataAccess/export/guildStore';
import insertElement from '../../common/insertElement';

const header = 'item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,'
  + 'in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,min_level\n';

const toCsv = (json) => json.items.map(
  (item) => [
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
    item.stats?.attack ?? '',
    item.stats?.defense ?? '',
    item.stats?.armor ?? '',
    item.stats?.hp ?? '',
    item.stats?.damage ?? '',
    item.stats?.min_level ?? '',
  ].join(','),
).join('\n');

function downloadCsv(csv) {
  const href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
  const a = createAnchor({
    download: 'gs_export.csv',
    href,
    style: { display: 'none' },
  });
  insertElement(document.body, a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => { URL.revokeObjectURL(href); }, 0);
}

export default async function gsDl() {
  const json = await guildStore();
  downloadCsv(`${header}${toCsv(json)}`);
}
