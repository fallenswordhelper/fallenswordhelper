import currentGuildId from '../common/currentGuildId';
import isNull from '../common/isNull';
import regExpFirstCapture from '../common/regExpFirstCapture';
import { guildRE } from '../support/constants';
import getGuildALink from './getGuildALink';

let isOwnGuild = null;

function findGuildId() {
  const guildALink = getGuildALink();
  if (guildALink) {
    const id = regExpFirstCapture(guildRE, guildALink.href);
    if (id) return Number(id);
  }
}

export default function getIsOwnGuild() {
  if (isNull(isOwnGuild)) isOwnGuild = findGuildId() === currentGuildId();
  return isOwnGuild;
}
