import asyncPThree from '../../../common/asyncPThree';
import guildActivity from '../../../notepad/guildTracker/guildActivity';
import getValue from '../../../system/getValue';
import injectMenu from '../../accordion/injectMenu';
import activeWantedBounties from '../../activeWantedBounties/activeWantedBounties';
import allyEnemy from '../../allyEnemy/allyEnemy';
import injectLevelupCalculator from '../../calcs/injectLevelupCalculator';
import injectStaminaCalculator from '../../calcs/injectStaminaCalculator';
import dailyQuest from '../../dailyQuest';
import fsbox from '../../fsbox/fsbox';
import injectServerNode from '../../injectServerNode';
import interceptQuickBuff from '../../interceptQuickBuff';
import messaging from '../../messaging/messaging';
import injectComposeAlert from '../../notification/injectComposeAlert';
import injectJoinAllLink from '../../notification/injectJoinAllLink';
import { injectTempleAlert } from '../../notification/templeAlert';
import { injectUpgradeAlert } from '../../notification/upgradeAlert';
import scoutTowerLink from '../../scoutTowerLink';
import statBarLinks from '../../statBarLinks';
import addGuildInfoWidgets from '../../widgets/addGuildInfoWidgets';
import addOnlineAlliesWidgets from '../../widgets/addOnlineAlliesWidgets';
import moveRHSBoxToLHS from './moveRHSBoxToLHS';
import moveRHSBoxUpOnRHS from './moveRHSBoxUpOnRHS';
import seTracker from './seTracker';

function doMoveGuildList() {
  if (getValue('moveGuildList')) {
    moveRHSBoxUpOnRHS('minibox-guild');
  }
}

function doMoveAllyList() {
  if (getValue('moveOnlineAlliesList')) {
    moveRHSBoxUpOnRHS('minibox-allies');
  }
}

function doMoveFsBox() {
  if (getValue('moveFSBox')) {
    moveRHSBoxToLHS('minibox-fsbox');
  }
}

function doMoveDailyQuest() {
  if (getValue('moveDailyQuest')) {
    moveRHSBoxToLHS('minibox-daily-quest');
  }
}

function doMoveXmas() {
  if (getValue('moveXmasBox')) {
    moveRHSBoxToLHS('minibox-xmas');
  }
}

// move boxes in opposite order that you want them to appear.
const p3functions = [
  doMoveGuildList,
  doMoveAllyList,
  doMoveXmas,
  doMoveDailyQuest,
  doMoveFsBox,
  allyEnemy,
  activeWantedBounties,
  addGuildInfoWidgets,
  addOnlineAlliesWidgets,
  injectTempleAlert,
  injectUpgradeAlert,
  injectComposeAlert,
  injectMenu,
  messaging,
  statBarLinks,
  injectStaminaCalculator,
  injectLevelupCalculator,
  fsbox,
  interceptQuickBuff,
  injectJoinAllLink,
  injectServerNode,
  scoutTowerLink,
  guildActivity,
  seTracker,
  dailyQuest,
];

export default function priorityThree() {
  asyncPThree(p3functions);
}
