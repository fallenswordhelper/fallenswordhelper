import { realtime } from '../../support/now';
import cmdExport from './cmdExport';

export default function profile(username, force) {
  return cmdExport({
    subcmd: 'profile',
    player_username: username,
    ...(force && { _: realtime() }),
  });
}
