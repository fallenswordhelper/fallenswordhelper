import insertHtmlAfterEnd from '../../common/insertHtmlAfterEnd';
import querySelectorArray from '../../common/querySelectorArray';
import { attackplayerUrl } from '../../support/constants';
import getCustomUrlParameter from '../../system/getCustomUrlParameter';
import isGuildMate from './isGuildMate';

const getPlayer = (t) => [t, getCustomUrlParameter(t.href, 'target_username')];
const guildTest = async ([t, name]) => [t, name, await isGuildMate(name)];
const pmClass = (privMsg) => (privMsg ? ' class="pmAttackUrl"' : '');

function addAttack(privMsg, [t, playerName]) {
  insertHtmlAfterEnd(t, ` | <a${pmClass(privMsg)} href="${
    attackplayerUrl}${playerName}">Attack</a>`);
}

export default async function addAttackLink(logTable, privMsg) {
  const trade = querySelectorArray('a[href*="=createsecure&"]', logTable);
  if (!trade.length) { return; }
  const withPlayer = trade.map(getPlayer);
  const guildMate = await Promise.all(withPlayer.map(guildTest));
  guildMate.filter(([, , gm]) => !gm).forEach((player) => addAttack(privMsg, player));
}
