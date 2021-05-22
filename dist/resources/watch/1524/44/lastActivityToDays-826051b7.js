import { $ as $dataAccess, V as nowSecs } from './calfSystem-23094c64.js';
import { g as guild } from './guild-0c0811d5.js';
import { c as currentGuildId } from './currentGuildId-b9442f48.js';
import { g as guildView } from './guildView-000b3b6e.js';

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
//# sourceMappingURL=lastActivityToDays-826051b7.js.map
