import Honeybadger from '@honeybadger-io/js';
import playerName from '../common/playerName';
import stdout from '../support/stdout';

const substrings = [
  '(reading\'$$\')', // Why does this work?
  'attackplayer.min.js',
  'Discord-Message-Checks-for-Updates.user.js',
  'dynamically imported module', // Why does this work?
  'Fallen-Sword-Champion-and-Super-Elite-Alert.user.js',
  'Fallen-Sword-Message-Alert.user.js',
  'Fallen-Sword-Super-Elite-Notifier.user.js',
  'Fallensword-GvG-Target-Checker-with-Button-and-Buff-Check.user.js',
  'fs.min.js',
  'GVG-and-Relics-Notifications.user.js',
  'GvG-Initiate-Enhanced.user.js',
  'GvG-List-v2.user.js',
  'GVG%252FRelics-Discord.user.js',
  'GVG%252FRelics-Notifications.user.js',
  'hcsBar',
  'index.php?cmd=auctionhouse&subcmd=quickcreate',
  'index.php?cmd=composing&subcmd=breakdown',
  'index.php?cmd=trade&target_player=',
  'layerClick',
  'openuserjs.org',
  'Permission denied to access object', // Will this work?
  'play method is not allowed', // Why does this work?
  'Superelite-searcher.user.js',
  'world.min.js',
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
  Honeybadger.afterNotify((err) => {
    if (err) {
      return stdout(`Honeybadger notification failed: ${err}`);
    }
  });
  Honeybadger.beforeNotify(hbBeforeNotify);
}

export default function exceptions() {
  const hbEnabled = true;
  if (hbEnabled) hbSetup();
}
