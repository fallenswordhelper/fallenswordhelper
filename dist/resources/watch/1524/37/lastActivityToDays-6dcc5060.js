import { $ as $dataAccess, V as nowSecs } from './calfSystem-6840a38e.js';
import { g as guild } from './guild-4cc45ab1.js';
import { c as currentGuildId } from './currentGuildId-00d4d0e4.js';
import { g as guildView } from './guildView-671cc457.js';

let cache;

function guildManage$1() {
  if (!cache) {
    cache = guild({ subcmd: 'manage' });
  }
  return cache;
}

// Incomplete
function guildManage() {
  const guildId = currentGuildId();
  if (guildId) {
    return guildView(currentGuildId());
  }
  return Promise.reject(new Error('no guild id'));
}

function daGuildManage() {
  return $dataAccess(guildManage$1, guildManage);
}

function lastActivityToDays(lastActivity) {
  return Math.floor(Math.max(0, nowSecs - lastActivity) / 86400);
}

export { daGuildManage as d, lastActivityToDays as l };
//# sourceMappingURL=lastActivityToDays-6dcc5060.js.map
