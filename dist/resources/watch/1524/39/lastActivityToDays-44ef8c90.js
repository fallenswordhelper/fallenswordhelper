import { $ as $dataAccess, V as nowSecs } from './calfSystem-d5c49dc8.js';
import { g as guild } from './guild-dd9e157d.js';
import { c as currentGuildId } from './currentGuildId-5c2ac6d6.js';
import { g as guildView } from './guildView-2e854554.js';

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
//# sourceMappingURL=lastActivityToDays-44ef8c90.js.map
