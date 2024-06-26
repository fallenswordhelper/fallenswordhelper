import Honeybadger from '@honeybadger-io/js';
import playerName from '../common/playerName';

const substrings = [
  'attackplayer.min.js',
  'dynamically imported module',
  'fs.min.js',
  'hcsBar',
  'index.php?cmd=auctionhouse&subcmd=quickcreate',
  'index.php?cmd=composing&subcmd=breakdown',
  'index.php?cmd=trade&target_player=',
  'layerClick',
  'play method is not allowed',
  'world.min.js',
  'openuserjs.org',
];

const dontSend = (msg) => substrings.some((ss) => msg.includes(ss));

function hbBeforeNotify(notice) {
  if (dontSend(notice.stack)) return false;
}

function hbSetup() {
  Honeybadger.configure({
    apiKey: 'hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP',
    environment: defineEnvironment,
    maxErrors: 20,
    revision: defineVersion,
  });
  const pid = playerName();
  if (pid) {
    Honeybadger.setContext({ user_id: pid });
  }
  Honeybadger.beforeNotify(hbBeforeNotify);
}

export default function exceptions() {
  const hbEnabled = true;
  if (hbEnabled) hbSetup();
}
