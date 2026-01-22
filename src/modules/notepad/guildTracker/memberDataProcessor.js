import profile from '../../_dataAccess/export/profile';
import lastActivityToDays from '../../common/lastActivityToDays';
import {
  ACTIVE_PLAYER_THRESHOLD_DAYS,
  GUILD_ACTIVITY_UPDATE_INTERVAL,
  SECONDS_PER_DAY,
} from '../../support/constants';
import devStdOut from '../../support/devStdOut';
import { realtimeSecs } from '../../support/now';
import { act, created, cur, gxp, lvl, max, utc, vl } from './indexConstants';

function hasSignificantChanges(memberHistory, member, prof, daysSinceActivity) {
  if (memberHistory.length === 0) return true;

  const last = memberHistory.at(-1);
  const isActive = daysSinceActivity <= ACTIVE_PLAYER_THRESHOLD_DAYS;

  return (
    last[cur] !== prof.current_stamina ||
    last[lvl] !== member.level ||
    (isActive && last[max] !== prof.stamina) ||
    last[vl] !== member.vl ||
    last[gxp] !== (member.guild_xp || 0)
  );
}

function createMemberRecord(member, prof, daysSinceActivity) {
  const now = realtimeSecs();
  const record = [];
  record[act] = daysSinceActivity;
  record[cur] = prof.current_stamina;
  record[lvl] = member.level;
  record[max] = prof.stamina;
  record[utc] = now;
  record[vl] = member.vl;
  record[gxp] = member.guild_xp || 0;
  record[created] = now; // Track when record was created

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

function updateExistingRecord(history, member, prof, daysSinceActivity) {
  const lastRecord = history.at(-1);
  lastRecord[act] = daysSinceActivity;
  lastRecord[cur] = prof.current_stamina;
  lastRecord[lvl] = member.level;
  lastRecord[max] = prof.stamina;
  lastRecord[utc] = realtimeSecs(); // Update when data was last verified
  lastRecord[vl] = member.vl;
  lastRecord[gxp] = member.guild_xp || 0;
  // Don't update [created] - keep original creation time for 24h check
}

function processMemberDataUpdate(member, prof, history) {
  const daysSinceActivity = lastActivityToDays(member.last_activity);
  const lastRecord = history.length > 0 ? history.at(-1) : null;

  // First check if there are significant changes
  const significantChanges = hasSignificantChanges(history, member, prof, daysSinceActivity);

  if (!significantChanges) {
    // No significant changes - just update the check timestamp
    lastRecord[utc] = realtimeSecs();
    lastRecord[act] = daysSinceActivity;
    devStdOut(
      `Guild Tracker: ${member.name} - no changes, updating check timestamp`,
    );
  } else {
    // Significant changes detected - check if record is over 24 hours old
    // Don't fallback to utc - if created doesn't exist, treat as old to create a proper new record
    const recordCreationTime = lastRecord?.[created];
    const recordIsOld =
      !recordCreationTime ||
      realtimeSecs() - recordCreationTime > SECONDS_PER_DAY;

    if (recordIsOld) {
      // Create new record
      const record = createMemberRecord(member, prof, daysSinceActivity);
      history.push(record);
      devStdOut(
        `Guild Tracker: ${member.name} - significant changes + 24h elapsed, adding new record`,
      );
    } else {
      // Update existing record
      updateExistingRecord(history, member, prof, daysSinceActivity);
      devStdOut(
        `Guild Tracker: ${member.name} - significant changes, updating existing record`,
      );
    }
  }
}

export async function processMemberBatch(batch, guildData) {
  for (const member of batch) {
    try {
      devStdOut(`Guild Tracker: Fetching profile for ${member.name}`);
      const prof = await fetchMemberProfile(member.name);
      if (!prof) {
        devStdOut(`Guild Tracker: No profile data for ${member.name}`);
        continue;
      }

      const history = ensureMemberHistory(guildData, member.name);
      processMemberDataUpdate(member, prof, history);
    } catch (e) {
      devStdOut(
        `Guild Tracker: Failed to fetch ${member.name}: ${e.message}`,
      );
    }
  }
}

export function getMembersNeedingUpdate(allMembers, guildData) {
  return allMembers.filter((member) => {
    const history = guildData.members[member.name];
    if (!history || history.length === 0) return true;

    const lastRecord = history.at(-1);
    // Use utc (last verified time) to check if we need to check this member again
    return realtimeSecs() - lastRecord[utc] > GUILD_ACTIVITY_UPDATE_INTERVAL;
  });
}
