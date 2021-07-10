import getArrayByTagName from '../common/getArrayByTagName';
import getTextTrim from '../common/getTextTrim';
import { pCC } from '../support/layout';
import uniq from '../common/uniq';
import { defTable, guildRE } from '../support/constants';

function getGuild(tbl) {
  if (tbl.rows[0].cells[0].children[0]) {
    return Number(guildRE.exec(tbl.rows[0].cells[0].children[0].href)[1]);
  }
  return -1;
}

const enumeratePlayers = (playerTable) => [
  playerTable,
  getTextTrim(playerTable),
  getGuild(playerTable),
];

export default function getPlayersByGuild() {
  const playersWithGuilds = getArrayByTagName(defTable, pCC).slice(4).map(enumeratePlayers);
  const playersByGuild = uniq(playersWithGuilds.map(([,, guildId]) => guildId))
    .map((guildId) => [
      guildId,
      playersWithGuilds.filter(([,, guildNo]) => guildNo === guildId),
    ]);
  return [
    ...playersByGuild
      .filter(([guild, members]) => guild !== -1 && members.length > 4),
    [-1, playersByGuild
      .filter(([guild, members]) => guild === -1 || members.length < 5)
      .flatMap(([, members]) => members)],
  ];
}
