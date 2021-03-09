import { c as cmdExport } from './cmdExport-52f81513.js';

const cache = {};

function profile(username) {
  // return cmdExport({player_username: username, subcmd: 'profile'});
  if (!cache[username]) {
    cache[username] = cmdExport({ player_username: username, subcmd: 'profile' });
  }
  return cache[username];
}

function getProfile(username) {
  return profile(username);
}

export { getProfile as g };
//# sourceMappingURL=getProfile-cf12d39d.js.map
