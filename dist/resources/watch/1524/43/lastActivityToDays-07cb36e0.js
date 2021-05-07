import { $ as $dataAccess, W as nowSecs } from './calfSystem-476ab75d.js';
import { g as guild } from './guild-223136b1.js';
import { c as currentGuildId } from './currentGuildId-1f42e657.js';
import { g as guildView } from './guildView-24d7d71e.js';

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
//# sourceMappingURL=lastActivityToDays-07cb36e0.js.map
