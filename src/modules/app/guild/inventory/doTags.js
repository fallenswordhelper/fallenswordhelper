import guildInventory from './guildInventory';

export default function doTags(subcmd2, invIdAry) {
  return guildInventory({
    subcmd2,
    tagIndex: invIdAry,
  });
}
