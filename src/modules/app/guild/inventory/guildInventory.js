import guild from '../guild';

export default function guildInventory(data) {
  return guild({ subcmd: 'inventory', ...data });
}
