import createDocument from '../../system/createDocument';
import dataRows from '../../common/dataRows';
import getElementById from '../../common/getElementById';
import getElementsByTagName from '../../common/getElementsByTagName';
import getTextTrim from '../../common/getTextTrim';
import indexAjaxData from '../../ajax/indexAjaxData';
import intValue from '../../system/intValue';
import { nowSecs } from '../../support/now';
import uniq from '../../common/uniq';
import { defTable, lastActivityRE, playerIDRE } from '../../support/constants';

const cache = {};

function lastActivity(tipped) {
  const activity = tipped.match(lastActivityRE);
  return nowSecs - (
    Number(activity[1]) * 24 * 60 * 60
    + Number(activity[2]) * 60 * 60
    + Number(activity[3]) * 60
    + Number(activity[4])
  );
}

function fromTip(row) {
  const { tipped } = row.cells[1].children[0].dataset;
  const stamina = tipped.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</);
  return {
    current_stamina: Number(stamina[1]),
    max_stamina: Number(stamina[2]),
    vl: Number(tipped.match(/VL:<\/td><td>(\d+)</)[1]),
    last_activity: lastActivity(tipped),
  };
}

function fromRow(row) {
  return {
    id: Number(row.cells[1].children[0].href.match(playerIDRE)[1]),
    name: getTextTrim(row.cells[1].children[0]),
    level: Number(getTextTrim(row.cells[2])),
    xp: 0,
    guild_xp: intValue(getTextTrim(row.cells[4])),
    rankName: getTextTrim(row.cells[3]),
  };
}

function formatRow(row, i) {
  return { rankIndex: i, ...fromTip(row), ...fromRow(row) };
}

function membersByRank(memberData) {
  return uniq(memberData, 'rankName').map(({ rankIndex: id, rankName: name }) => ({
    id,
    name,
    members: memberData.filter((member) => member.rankName === name),
  }));
}

function rankData(memberList) {
  return membersByRank(dataRows(memberList.rows, 5, 1).map(formatRow));
}

function parseReport(html) {
  const doc = createDocument(html);
  const pCC = getElementById('pCC', doc);
  const tables = getElementsByTagName(defTable, pCC);
  const memberList = tables[tables.length - 1];
  if (memberList) { return { r: { ranks: rankData(memberList) }, s: true }; }
  return { s: false };
}

// Incomplete
export default async function guildView(guildId) {
  if (!cache[guildId]) {
    const html = await indexAjaxData({
      cmd: 'guild',
      subcmd: 'view',
      guild_id: guildId,
    });
    cache[guildId] = parseReport(html);
  }
  return cache[guildId];
}
