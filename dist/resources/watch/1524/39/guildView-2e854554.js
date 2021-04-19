import { bw as lastActivityRE, V as nowSecs, bx as playerIDRE, H as getTextTrim, t as createDocument, z as getElementById, g as getElementsByTagName, d as defTable, u as indexAjaxData } from './calfSystem-d5c49dc8.js';
import { d as dataRows } from './dataRows-08660e1c.js';
import { i as intValue } from './intValue-f6303c59.js';

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
    rank_name: getTextTrim(row.cells[3]),
  };
}

function formatRow(row, i) {
  return { rank_index: i, ...fromTip(row), ...fromRow(row) };
}

function byRank(acc, member) {
  const thisRankName = member.rank_name;
  const thisRankIndex = member.rank_index;
  const thisRankObj = acc.find((e) => e.name === thisRankName);
  if (thisRankObj) {
    thisRankObj.members.push(member);
  } else {
    acc.push({ id: thisRankIndex, name: thisRankName, members: [member] });
  }
  return acc;
}

function rankData(memberList) {
  const memberRows = dataRows(memberList.rows, 5, 1);
  const memberData = memberRows.map(formatRow);
  return memberData.reduce(byRank, []); // FIXME
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
function guildView(guildId) {
  if (!cache[guildId]) {
    cache[guildId] = indexAjaxData({
      cmd: 'guild',
      subcmd: 'view',
      guild_id: guildId,
    }).then(parseReport);
  }
  return cache[guildId];
}

export { guildView as g };
//# sourceMappingURL=guildView-2e854554.js.map
