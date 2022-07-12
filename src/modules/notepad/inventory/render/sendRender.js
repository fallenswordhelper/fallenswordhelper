function cantSend(row) {
  return row.equipped || (row.guild_tag === -1 && row.bound);
}

export default function sendRender(_data, type, row) {
  if (cantSend(row)) { return; }
  if (type !== 'display') { return 'Send'; }
  return '<span class="sendItem sendLink" '
    + 'data-tooltip="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! '
    + `Use at own risk." data-inv="${row.inv_id}">Send</span>`;
}
