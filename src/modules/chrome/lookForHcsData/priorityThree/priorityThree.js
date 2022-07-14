import asyncPThree from '../../../common/asyncPThree';
import getValue from '../../../system/getValue';
import injectMenu from '../../accordion/injectMenu';
import messaging from '../../messaging/messaging';
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
import guildActivityTracker from './guildActivityTracker';
import joinAll from './joinAll';
import levelCalc from './levelCalc';
import moveRHSBoxToLHS from './moveRHSBoxToLHS';
import moveRHSBoxUpOnRHS from './moveRHSBoxUpOnRHS';
import scoutTower from './scoutTower';
import seTracker from './seTracker';
import staminaCalc from './staminaCalc';
import statbar from './statbar';

function doMoveGuildList() {
  if (getValue('moveGuildList')) { moveRHSBoxUpOnRHS('minibox-guild'); }
}

function doMoveAllyList() {
  if (getValue('moveOnlineAlliesList')) { moveRHSBoxUpOnRHS('minibox-allies'); }
}

function doMoveFsBox() {
  if (getValue('moveFSBox')) { moveRHSBoxToLHS('minibox-fsbox'); }
}

function doMoveDailyQuest() {
  if (getValue('moveDailyQuest')) { moveRHSBoxToLHS('minibox-daily-quest'); }
}

function doMoveXmas() {
  if (getValue('moveXmasBox')) { moveRHSBoxToLHS('minibox-xmas'); }
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
  messaging,
  statbar,
  staminaCalc,
  levelCalc,
  fsBoxLog,
  expandQb,
  joinAll,
  gameStats,
  scoutTower,
  guildActivityTracker,
  seTracker,
];

export default function priorityThree() {
  asyncPThree(p3functions);
}
