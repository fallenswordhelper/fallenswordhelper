import getCalfPrefs from '../../common/getCalfPrefs';
import calf from '../../support/calf';
import getValue from '../../system/getValue';
import useNewGuildLog from '../useNewGuildLog';
import priorityThree from './priorityThree/priorityThree';

const calfPrefs = [
  'enableAllyOnlineList',
  'enableEnemyOnlineList',
  'enableGuildInfoWidgets',
  'enableOnlineAlliesWidgets',
  'enableSeTracker',
  'hideGuildInfoTrade',
  'hideGuildInfoSecureTrade',
  'hideGuildInfoBuff',
  'hideGuildInfoMessage',
  'hideBuffSelected',
  'enableTempleAlert',
  'enableUpgradeAlert',
  'enableComposingAlert',
  'enableActiveBountyList',
  'enableWantedList',
  'wantedGuildMembers',
  'enableMaxGroupSizeToJoin',
  'maxGroupSizeToJoin',
  'useNewGuildLog',
];

function getEnvVars() {
  calfPrefs.forEach(getCalfPrefs);
  calf.allyEnemyOnlineRefreshTime = getValue('allyEnemyOnlineRefreshTime')
    * 1000;
}

export default function notHuntMode() {
  if (calf.huntingMode) { return; }
  getEnvVars();
  if (calf.useNewGuildLog) useNewGuildLog();
  priorityThree();
}
