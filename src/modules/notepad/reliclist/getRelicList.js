import reliclist from '../../app/guild/reliclist';

export default async function getRelicList(offset = 0, limit = 100) {
  const thisChunk = await reliclist(null, offset, limit);
  if (!thisChunk?.s) return;
  if (thisChunk.r.remaining_relics) {
    return thisChunk.r.relics.concat(await getRelicList(
      offset + thisChunk.r.relics.length,
      Math.min(100, thisChunk.r.remaining_relics),
    ));
  }
  return thisChunk.r.relics;
}
