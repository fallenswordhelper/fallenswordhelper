import {
  MIN_UPDATE_INTERVAL_SECS,
  MIN_WAIT_TIME_SECS,
  MS_PER_SECOND,
  SECONDS_PER_DAY,
} from '../../support/constants';
import { nowSecs } from '../../support/now';
import { utc } from './indexConstants';
import { getMembersNeedingUpdate } from './memberDataProcessor';

function findOldestMemberUpdateTime(guildData, currentMemberNames) {
  let oldestUpdateTime = null;

  if (guildData?.members) {
    for (const [memberName, history] of Object.entries(guildData.members)) {
      if (!currentMemberNames.has(memberName)) continue;

      if (history.length > 0) {
        const lastRecord = history.at(-1);
        const memberUpdateTime = lastRecord[utc];
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
    return SECONDS_PER_DAY * MS_PER_SECOND;
  }

  const nextUpdateTime = oldestUpdateTime + SECONDS_PER_DAY;
  const waitTime = Math.max(MIN_WAIT_TIME_SECS, nextUpdateTime - nowSecs());

  return waitTime * MS_PER_SECOND;
}

function calculateNextUpdateTime(guildData, currentMembers) {
  const currentMemberNames = new Set(currentMembers.map((m) => m.name));
  const oldestUpdateTime = findOldestMemberUpdateTime(
    guildData,
    currentMemberNames,
  );
  return calculateWaitTimeFromOldest(oldestUpdateTime);
}

export function calculateWaitTime(guildData, allMembers) {
  const needsUpdate = getMembersNeedingUpdate(allMembers, guildData);

  if (needsUpdate.length > 0) {
    const timeSinceLastUpdate = nowSecs() - guildData.lastUpdate;
    const waitTime = Math.max(
      0,
      (MIN_UPDATE_INTERVAL_SECS - timeSinceLastUpdate) * MS_PER_SECOND,
    );

    return waitTime;
  }

  return calculateNextUpdateTime(guildData, allMembers);
}
