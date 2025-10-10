import ranksView from '../../_dataAccess/fallbacks/ranksView';
import delay from '../../common/delay';
import jQueryPresent from '../../common/jQueryPresent';
import {
  defEnableGuildActivityTracker,
  GUILD_ACTIVITY_BATCH_SIZE,
} from '../../support/constants';
import { nowSecs } from '../../support/now';
import getValue from '../../system/getValue';
import { get, set } from '../../system/idb';
import { fshGuildActivity } from './indexConstants';
import {
  getMembersNeedingUpdate,
  processMemberBatch,
} from './memberDataProcessor';
import { calculateWaitTime } from './waitTimeCalculator';

const state = {
  running: false,
};

async function getGuildMembers() {
  const ranks = await ranksView();
  if (!ranks.s) return null;
  return ranks.r.flatMap((rank) => rank.members);
}

async function collectGuildData(guildData, allMembers) {
  const needsUpdate = getMembersNeedingUpdate(allMembers, guildData);
  const batch = needsUpdate.slice(0, GUILD_ACTIVITY_BATCH_SIZE);

  await processMemberBatch(batch, guildData);

  guildData.lastUpdate = nowSecs();
  await set(fshGuildActivity, guildData);

  const remaining = needsUpdate.length - batch.length;

  return { remaining };
}

async function startBackgroundProcess() {
  if (state.running) return;

  state.running = true;

  const guildDataResult = await get(fshGuildActivity);
  const guildData = guildDataResult || {
    lastUpdate: nowSecs(),
    members: {},
  };

  const allMembers = await getGuildMembers();

  if (!allMembers) {
    state.running = false;
    return;
  }

  while (state.running) {
    const waitTime = calculateWaitTime(guildData, allMembers);
    await delay(waitTime);
    await collectGuildData(guildData, allMembers);
  }
}

export function start() {
  if (jQueryPresent()) {
    startBackgroundProcess();
  }
}

export function stop() {
  state.running = false;
}

export function init() {
  if (jQueryPresent() && getValue(defEnableGuildActivityTracker)) {
    start();
  }
}
