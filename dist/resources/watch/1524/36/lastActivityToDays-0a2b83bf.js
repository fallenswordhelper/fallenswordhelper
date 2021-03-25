import { $ as $dataAccess, V as nowSecs } from './calfSystem-c08399e5.js';
import { g as guild } from './guild-5c91beb3.js';
import { c as currentGuildId } from './currentGuildId-915d45b4.js';
import { g as guildView } from './guildView-f2313ded.js';

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
//# sourceMappingURL=lastActivityToDays-0a2b83bf.js.map
