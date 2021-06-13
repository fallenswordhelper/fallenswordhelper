import { $ as $dataAccess, V as nowSecs } from './calfSystem-02fd040d.js';
import { g as guild } from './guild-7df4620b.js';
import { c as currentGuildId } from './currentGuildId-b6506645.js';
import { g as guildView } from './guildView-a18c169e.js';

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
//# sourceMappingURL=lastActivityToDays-c7e9ad94.js.map
