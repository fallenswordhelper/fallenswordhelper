import {
  GUILD_ACTIVITY_UPDATE_INTERVAL,
  MIN_UPDATE_INTERVAL_SECS,
  MIN_WAIT_TIME_SECS,
  MS_PER_SECOND,
} from '../../support/constants';
import devStdOut from '../../support/devStdOut';
import { realtimeSecs } from '../../support/now';
import { created, utc } from './indexConstants';
import { getMembersNeedingUpdate } from './memberDataProcessor';

function formatDuration(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function findOldestMemberUpdateTime(guildData, currentMemberNames) {
  let oldestUpdateTime = null;

  if (guildData?.members) {
    for (const [memberName, history] of Object.entries(guildData.members)) {
      if (!currentMemberNames.has(memberName)) continue;

      if (history.length > 0) {
        const lastRecord = history.at(-1);
        // Use created time for age check, fallback to utc for old records
        const memberUpdateTime = lastRecord[created] || lastRecord[utc];
        if (!oldestUpdateTime || memberUpdateTime < oldestUpdateTime) {
          oldestUpdateTime = memberUpdateTime;
        }
      }
    }
  }

  return oldestUpdateTime;
}

function calculateWaitTimeFromOldest(oldestUpdateTime) {
  if (!oldestUpdateTime) {
    return GUILD_ACTIVITY_UPDATE_INTERVAL * MS_PER_SECOND;
  }

  const nextUpdateTime = oldestUpdateTime + GUILD_ACTIVITY_UPDATE_INTERVAL;
  const waitTime = Math.max(MIN_WAIT_TIME_SECS, nextUpdateTime - realtimeSecs());

  return waitTime * MS_PER_SECOND;
}

function calculateNextUpdateTime(guildData, currentMembers) {
  const currentMemberNames = new Set(currentMembers.map((m) => m.name));
  const oldestUpdateTime = findOldestMemberUpdateTime(
    guildData,
    currentMemberNames,
  );
  return {
    waitTime: calculateWaitTimeFromOldest(oldestUpdateTime),
    oldestUpdateTime,
  };
}

export function calculateWaitTime(guildData, allMembers) {
  const needsUpdate = getMembersNeedingUpdate(allMembers, guildData);

  if (needsUpdate.length > 0) {
    const timeSinceLastUpdate = realtimeSecs() - guildData.lastUpdate;
    const waitTime = Math.max(
      0,
      (MIN_UPDATE_INTERVAL_SECS - timeSinceLastUpdate) * MS_PER_SECOND,
    );

    devStdOut(
      `Guild Tracker: Members need update, waiting ${formatDuration(waitTime)} (min interval)`,
    );

    return waitTime;
  }

  const { waitTime: nextUpdateTime, oldestUpdateTime } =
    calculateNextUpdateTime(guildData, allMembers);
  const ageHours = oldestUpdateTime
    ? ((realtimeSecs() - oldestUpdateTime) / 3600).toFixed(1)
    : 'N/A';
  devStdOut(
    `Guild Tracker: All members current, oldest update ${ageHours}h ago, next update in ${formatDuration(nextUpdateTime)}`,
  );
  return nextUpdateTime;
}
