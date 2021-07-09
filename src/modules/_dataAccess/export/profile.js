import cmdExport from './cmdExport';

const cache = {};

export default function profile(username) {
  if (!cache[username]) {
    cache[username] = cmdExport({ player_username: username, subcmd: 'profile' });
  }
  return cache[username];
}
