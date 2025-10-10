import profile from '../../_dataAccess/export/profile';
import lastActivityToDays from '../../common/lastActivityToDays';
import {
  ACTIVE_PLAYER_THRESHOLD_DAYS,
  SECONDS_PER_DAY,
} from '../../support/constants';
import devStdOut from '../../support/devStdOut';
import { nowSecs } from '../../support/now';
import { act, cur, gxp, lvl, max, utc, vl } from './indexConstants';

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

function updateLastRecordTimestamp(history, daysSinceActivity) {
  if (history.length > 0) {
    const lastRecord = history.at(-1);
    lastRecord[utc] = nowSecs();
    lastRecord[act] = daysSinceActivity;
  }
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

export async function processMemberBatch(batch, guildData) {
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

export function getMembersNeedingUpdate(allMembers, guildData) {
  return allMembers.filter((member) => {
    const history = guildData.members[member.name];
    if (!history || history.length === 0) return true;

    const lastRecord = history.at(-1);
    return nowSecs() - lastRecord[utc] > SECONDS_PER_DAY;
  });
}
