import getMembrList from '../../ajax/getMembrList';
import currentGuildId from '../../common/currentGuildId';
import entries from '../../common/entries';
import isObject from '../../common/isObject';

let memberPrm = null;

async function getKeys() {
  const json = await getMembrList(false);
  if (!json) return;
  return entries(json)
    .filter(([, value]) => isObject(value))
    .map(([key]) => key);
}

export default async function isGuildMate(playerName) {
  if (currentGuildId() && !memberPrm) memberPrm = getKeys();
  return (await memberPrm)?.includes(playerName);
}
