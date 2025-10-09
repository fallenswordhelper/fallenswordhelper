import profile from '../../_dataAccess/export/profile';
import ranksView from '../../_dataAccess/fallbacks/ranksView';
import delay from '../../common/delay';
import jQueryPresent from '../../common/jQueryPresent';
import lastActivityToDays from '../../common/lastActivityToDays';
import { defEnableGuildActivityTracker } from '../../support/constants';
import devStdOut from '../../support/devStdOut';
import { nowSecs } from '../../support/now';
import getValue from '../../system/getValue';
import { get, set } from '../../system/idb';
import {
  act,
  cur,
  lvl,
  max,
  utc,
  vl,
  gxp,
  fshGuildActivity,
} from './indexConstants';

let bgRunning = false;

async function getGuildMembers() {
  const ranks = await ranksView();
  if (!ranks.s) return null;
  return ranks.r.flatMap((rank) => rank.members);
}

function getMembersNeedingUpdate(allMembers, guildData) {
  return allMembers.filter((member) => {
    const history = guildData.members[member.name];
    if (!history || history.length === 0) return true;

    const lastRecord = history.at(-1);
    return nowSecs() - lastRecord[utc] > 86400; // 24 hours
  });
}

function hasSignificantChanges(memberHistory, member, prof, daysSinceActivity) {
  if (memberHistory.length === 0) return true;

  const last = memberHistory.at(-1);
  const isActive = daysSinceActivity <= 7;

  return (
    last[cur] !== prof.current_stamina || // Any current stamina change
    last[lvl] !== member.level || // Level change
    (isActive && last[max] !== prof.stamina) || // Max stamina change (only for active players)
    last[vl] !== member.vl || // Virtual level change
    last[gxp] !== (member.guild_xp || 0) // Guild XP change
  );
}

function createMemberRecord(member, prof, daysSinceActivity) {
  const record = [];
  record[act] = daysSinceActivity;
  record[cur] = prof.current_stamina;
  record[lvl] = member.level;
  record[max] = prof.stamina;
  record[utc] = nowSecs();
  record[vl] = member.vl;
  record[gxp] = member.guild_xp || 0;

  return record;
}

async function fetchMemberProfile(memberName) {
  const prof = await profile(memberName, true);
  return prof?.current_stamina ? prof : null;
}

function ensureMemberHistory(guildData, memberName) {
  if (!guildData.members[memberName]) {
    guildData.members[memberName] = [];
  }
  return guildData.members[memberName];
}

function processMemberDataUpdate(member, prof, history) {
  const daysSinceActivity = lastActivityToDays(member.last_activity);

  if (hasSignificantChanges(history, member, prof, daysSinceActivity)) {
    const record = createMemberRecord(member, prof, daysSinceActivity);
    history.push(record);
  } else {
    updateLastRecordTimestamp(history, daysSinceActivity);
  }
}

function updateLastRecordTimestamp(history, daysSinceActivity) {
  if (history.length > 0) {
    const lastRecord = history.at(-1);
    lastRecord[utc] = nowSecs();
    lastRecord[act] = daysSinceActivity;
  }
}

async function processMemberBatch(batch, guildData) {
  for (const member of batch) {
    try {
      const prof = await fetchMemberProfile(member.name);
      if (!prof) continue;

      const history = ensureMemberHistory(guildData, member.name);
      processMemberDataUpdate(member, prof, history);
    } catch (e) {
      devStdOut(
        `Simple Guild Tracker: Failed to fetch ${member.name}: ${e.message}`,
      );
    }
  }
}

function findOldestMemberUpdateTime(guildData, currentMemberNames) {
  let oldestUpdateTime = null;

  if (guildData?.members) {
    for (const [memberName, history] of Object.entries(guildData.members)) {
      // Skip members who are no longer in the guild
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
  const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000;
  const TWENTY_FOUR_HOURS_SEC = 86400;
  const MIN_WAIT_SEC = 60;

  // If no history data exists, wait 24 hours
  if (!oldestUpdateTime) {
    return TWENTY_FOUR_HOURS_MS;
  }

  // Wait until the oldest record is 24+ hours old
  const nextUpdateTime = oldestUpdateTime + TWENTY_FOUR_HOURS_SEC;
  const waitTime = Math.max(MIN_WAIT_SEC, nextUpdateTime - nowSecs());

  return waitTime * 1000; // Convert to milliseconds
}

function calculateNextUpdateTime(guildData, currentMembers) {
  const currentMemberNames = new Set(currentMembers.map((m) => m.name));
  const oldestUpdateTime = findOldestMemberUpdateTime(
    guildData,
    currentMemberNames,
  );
  return calculateWaitTimeFromOldest(oldestUpdateTime);
}

function calculateWaitTime(guildData, allMembers) {
  const needsUpdate = getMembersNeedingUpdate(allMembers, guildData);

  if (needsUpdate.length > 0) {
    const timeSinceLastUpdate = nowSecs() - guildData.lastUpdate;
    const waitTime = Math.max(0, (30 - timeSinceLastUpdate) * 1000);

    return waitTime;
  }

  const waitTime = calculateNextUpdateTime(guildData, allMembers);

  return waitTime;
}

async function collectGuildData(guildData, allMembers) {
  const needsUpdate = getMembersNeedingUpdate(allMembers, guildData);
  const batch = needsUpdate.slice(0, 3);

  await processMemberBatch(batch, guildData);

  guildData.lastUpdate = nowSecs();
  await set(fshGuildActivity, guildData);

  const remaining = needsUpdate.length - batch.length;

  return { remaining };
}

async function startBackgroundProcess() {
  if (bgRunning) return;

  bgRunning = true;

  const guildDataResult = await get(fshGuildActivity);
  const guildData = guildDataResult || {
    lastUpdate: nowSecs(),
    members: {},
  };

  const allMembers = await getGuildMembers();

  if (!allMembers) {
    bgRunning = false;
    return;
  }

  // skipcq: JS-0092
  while (bgRunning) {
    const waitTime = calculateWaitTime(guildData, allMembers);
    await delay(waitTime);
    await collectGuildData(guildData, allMembers);
  }
}

export default function guildActivity() {
  if (jQueryPresent() && getValue(defEnableGuildActivityTracker)) {
    startBackgroundProcess();
  }
}
