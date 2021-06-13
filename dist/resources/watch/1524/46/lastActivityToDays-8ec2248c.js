import { $ as $dataAccess, V as nowSecs } from './calfSystem-86663d02.js';
import { g as guild } from './guild-9779c2c4.js';
import { c as currentGuildId } from './currentGuildId-c3b232af.js';
import { g as guildView } from './guildView-06ff2d4b.js';

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
//# sourceMappingURL=lastActivityToDays-8ec2248c.js.map
