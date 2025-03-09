import Honeybadger from '@honeybadger-io/js';
import playerName from '../common/playerName';
import stdout from '../support/stdout';

const substrings = [
  'attackplayer.min.js',
  'Auction-House-Monitor.user.js',
  'Compra-%2526-Venda-de-Recursos-%25E2%259C%2585.user.js',
  'cross-origin frame',
  'Discord-Message-Checks-for-Updates.user.js',
  'dynamically imported module',
  'Fallen-Sword-Auto-Invent.user.js',
  'Fallen-Sword-Auto-Skill-Caster.user.js',
  'Fallen-Sword-Champion-and-Super-Elite-Alert.user.js',
  'Fallen-Sword-Message-Alert.user.js',
  'Fallen-Sword-Super-Elite-%2526-Crate-Notifier.user.js',
  'Fallen-Sword-Super-Elite-Notifier.user.js',
  'Fallen-Sword-Win%252FLoss-Checker-with-Buffs-and-Buff-Levels.user.js',
  'Fallen-Sword-Win%252FLoss-Checker.user.js',
  'Fallensword-GvG-Target-Checker-with-Button-and-Buff-Check.user.js',
  'Fetch-Auction-and-Send-to-Discord.user.js',
  'FS-Fixer.user.js',
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
  'New-Userscript.user.js',
  'openuserjs.org',
  'Permission denied to access object',
  'play method is not allowed',
  'Quick-Kill.user.js',
  'se-searcher-v2-draft.user.js',
  'Superelite-searcher.user.js',
  'Titan-3.0.user.js',
  'Titan-Quick-Kill.user.js',
  'UFSG-dodatki.user.js',
  'UnhandledPromiseRejectionWarning: 404',
  'world.min.js',
  "(reading '$$')",
];

const dontSend = (msg) => substrings.some((ss) => msg.includes(ss));

function hbBeforeNotify(notice) {
  if (dontSend(notice.message) || dontSend(notice.stack)) return false;
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
