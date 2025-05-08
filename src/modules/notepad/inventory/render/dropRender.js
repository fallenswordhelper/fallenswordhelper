function taggedOrEquipped(row) {
  return row.guild_tag !== -1 || row.equipped;
}

export default function dropRender(_data, type, row) {
  if (taggedOrEquipped(row)) { return; }
  if (type !== 'display') { return 'Drop'; }
  return '<span class="dropItem dropLink" data-tooltip="INSTANTLY '
    + `DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${
      row.inv_id}">Drop</span>`;
}
