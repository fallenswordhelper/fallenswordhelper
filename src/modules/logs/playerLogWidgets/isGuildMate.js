import getMembrList from '../../ajax/getMembrList';
import currentGuildId from '../../common/currentGuildId';
import entries from '../../common/entries';
import isObject from '../../common/isObject';

let memberPrm = 0;

async function getKeys() {
  return entries(await getMembrList(false))
    .filter(([, value]) => isObject(value))
    .map(([key]) => key);
}

export default async function isGuildMate(playerName) {
  if (currentGuildId() && !memberPrm) memberPrm = getKeys();
  return (await memberPrm)?.includes(playerName);
}
