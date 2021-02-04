import { g as guild } from './guild-b4b44a5f.js';
import { U as nowSecs } from './calfSystem-cc2b30b5.js';

let cache;

function guildManage() {
  if (!cache) {
    cache = guild({ subcmd: 'manage' });
  }
  return cache;
}

// import { $dataAccess } from './_dataAccess';
// import guildManage from './fallbacks/guildManage';

function daGuildManage() {
  // return $dataAccess(appGuildManage, guildManage);
  return guildManage();
}

function lastActivityToDays(lastActivity) {
  return Math.floor(Math.max(0, nowSecs - lastActivity) / 86400);
}

export { daGuildManage as d, lastActivityToDays as l };
//# sourceMappingURL=lastActivityToDays-8a46fe1f.js.map
