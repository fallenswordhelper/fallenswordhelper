import guild from './guild';

let cache;

export default function manage() {
  if (!cache) {
    cache = guild({ subcmd: 'manage' });
  }
  return cache;
}
