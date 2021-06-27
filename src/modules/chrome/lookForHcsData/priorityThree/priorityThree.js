import asyncPThree from '../../../common/asyncPThree';
import callAllies from './callAllies';
import callAllyEnemy from './callAllyEnemy';
import callBounties from './callBounties';
import callComposing from './callComposing';
import callGuildInfo from './callGuildInfo';
import callTemple from './callTemple';
import callUpgrade from './callUpgrade';
import expandQb from './expandQb';
import fsBoxLog from './fsBoxLog';
import gameStats from './gameStats';
import getValue from '../../../system/getValue';
import guildActivityTracker from './guildActivityTracker';
import guildLogHref from './guildLogHref';
import injectMenu from '../../accordion/injectMenu';
import injectQuickMsgDialogJQ from '../../messaging/messaging';
import joinAll from './joinAll';
import levelCalc from './levelCalc';
import scoutTower from './scoutTower';
import seTracker from './seTracker';
import staminaCalc from './staminaCalc';
import statbar from './statbar';

function moveUp(title) {
  import('../moveRHSBoxUpOnRHS').then((m) => m.default(title));
}

function moveLeft(title) {
  import('../moveRHSBoxToLHS').then((m) => m.default(title));
}

function doMoveGuildList() {
  if (getValue('moveGuildList')) {
    moveUp('minibox-guild');
  }
}

function doMoveAllyList() {
  if (getValue('moveOnlineAlliesList')) {
    moveUp('minibox-allies');
  }
}

function doMoveFsBox() {
  if (getValue('moveFSBox')) {
    moveLeft('minibox-fsbox');
  }
}

function doMoveDailyQuest() {
  if (getValue('moveDailyQuest')) {
    moveLeft('minibox-daily-quest');
  }
}

function doMoveXmas() {
  if (getValue('moveXmasBox')) {
    moveLeft('minibox-xmas');
  }
}

// move boxes in opposite order that you want them to appear.
const p3functions = [
  doMoveGuildList,
  doMoveAllyList,
  doMoveXmas,
  doMoveDailyQuest,
  doMoveFsBox,
  callAllyEnemy,
  callBounties,
  callGuildInfo,
  callAllies,
  callTemple,
  callUpgrade,
  callComposing,
  injectMenu,
  injectQuickMsgDialogJQ,
  statbar,
  staminaCalc,
  levelCalc,
  fsBoxLog,
  expandQb,
  joinAll,
  guildLogHref,
  gameStats,
  scoutTower,
  guildActivityTracker,
  seTracker,
];

export default function priorityThree() {
  asyncPThree(p3functions);
}
