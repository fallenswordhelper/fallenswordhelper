import guildInventory from './guildInventory';

export default function dostoreitems(invIdAry) {
  return guildInventory({
    subcmd2: 'dostoreitems',
    items: invIdAry,
  });
}
