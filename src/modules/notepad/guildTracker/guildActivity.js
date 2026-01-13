import ranksView from '../../_dataAccess/fallbacks/ranksView';
import delay from '../../common/delay';
import jQueryPresent from '../../common/jQueryPresent';
import {
  defEnableGuildActivityTracker,
  GUILD_ACTIVITY_BATCH_SIZE,
} from '../../support/constants';
import devStdOut from '../../support/devStdOut';
import { realtimeSecs } from '../../support/now';
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

  devStdOut(
    `Guild Tracker: ${needsUpdate.length} members need update, processing batch of ${batch.length}`,
  );

  await processMemberBatch(batch, guildData);

  guildData.lastUpdate = realtimeSecs();
  await set(fshGuildActivity, guildData);

  const remaining = needsUpdate.length - batch.length;

  devStdOut(`Guild Tracker: Batch complete, ${remaining} members remaining`);

  return { remaining };
}

async function startBackgroundProcess() {
  if (state.running) {
    devStdOut('Guild Tracker: Already running');
    return;
  }

  devStdOut('Guild Tracker: Starting background process');
  state.running = true;

  const guildDataResult = await get(fshGuildActivity);
  const guildData = guildDataResult || {
    lastUpdate: realtimeSecs(),
    members: {},
  };

  const allMembers = await getGuildMembers();

  if (!allMembers) {
    devStdOut('Guild Tracker: Failed to get guild members, stopping');
    state.running = false;
    return;
  }

  devStdOut(`Guild Tracker: Monitoring ${allMembers.length} guild members`);

  while (state.running) {
    try {
      const waitTime = calculateWaitTime(guildData, allMembers);
      const targetTime = Date.now() + waitTime;

      // Break long waits into 5-minute chunks for reliability
      const chunkSize = 5 * 60 * 1000; // 5 minutes

      while (Date.now() < targetTime && state.running) {
        const remaining = targetTime - Date.now();
        if (remaining <= 0) break;

        const thisWait = Math.min(remaining, chunkSize);
        await delay(thisWait);

        // Check actual time elapsed (handles inactive tabs)
        const stillRemaining = targetTime - Date.now();
        if (stillRemaining > chunkSize && state.running) {
          devStdOut(`Guild Tracker: Still waiting... ${Math.round(stillRemaining / 1000 / 60)} min remaining`);
        }
      }

      if (state.running) {
        await collectGuildData(guildData, allMembers);
      }
    } catch (e) {
      devStdOut(`Guild Tracker: Error in main loop: ${e.message}`);
      // Wait a bit before retrying
      await delay(60000); // 1 minute
    }
  }
}

export function start() {
  if (jQueryPresent()) {
    startBackgroundProcess();
  }
}

export function stop() {
  devStdOut('Guild Tracker: Stopping background process');
  state.running = false;
}

export function init() {
  if (jQueryPresent() && getValue(defEnableGuildActivityTracker)) {
    start();
  }
}
