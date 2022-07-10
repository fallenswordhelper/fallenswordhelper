import currentGuildId from '../common/currentGuildId';
import regExpFirstCapture from '../common/regExpFirstCapture';
import { guildRE } from '../support/constants';
import getGuildALink from './getGuildALink';

let haveIsOwnGuild;
let isOwnGuild;

function findGuildId() {
  const guildALink = getGuildALink();
  if (guildALink) {
    const id = regExpFirstCapture(guildRE, guildALink.href);
    if (id) return Number(id);
  }
}

export default function getIsOwnGuild() {
  if (!haveIsOwnGuild) {
    isOwnGuild = findGuildId() === currentGuildId();
    haveIsOwnGuild = true;
  }
  return isOwnGuild;
}
