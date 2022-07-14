import profile from '../_dataAccess/export/profile';

const cache = {};

export default function getProfile(username) {
  if (!cache[username]) {
    cache[username] = profile(username);
  }
  return cache[username];
}
