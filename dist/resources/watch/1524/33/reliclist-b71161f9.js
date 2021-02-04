import { g as guild } from './guild-b4b44a5f.js';
import { A as setInnerHtml, p as pCC, aD as guideUrl, ar as defSubcmd, bt as guildViewUrl, s as partial } from './calfSystem-cc2b30b5.js';
import { p as padZ } from './padZ-df568ed6.js';
import { s as splitTime } from './splitTime-9a7b345f.js';

function reliclist(guildId, offset, limit) {
  const data = {
    subcmd: 'reliclist',
    offset,
    limit,
  };

  if (guildId) { data.guild_id = guildId; }

  return guild(data);
}

async function getRelicList(offset = 0, limit = 100) {
  const thisChunk = await reliclist(null, offset, limit);
  if (thisChunk.r.remaining_relics) {
    return thisChunk.r.relics.concat(await getRelicList(
      offset + thisChunk.r.relics.length,
      Math.min(100, thisChunk.r.remaining_relics),
    ));
  }
  return thisChunk.r.relics;
}

function relicName(relic) {
  return `<a href="${guideUrl}relics${defSubcmd}view&relic_id=${relic.id}">`
    + `${relic.name}</a>`;
}

function guildName(relicGuild) {
  if (relicGuild) {
    return `<a href="${guildViewUrl}${relicGuild.id}">${relicGuild.name}</a>`;
  }
  return '';
}

function attrib(id, att) { return att.id === id; }

function stamGain(relic) {
  return relic.attributes && relic.attributes.find(partial(attrib, 6));
}

function makeAttrib(attribs, id) {
  if (attribs) {
    const thisAttrib = attribs.find(partial(attrib, id));
    if (thisAttrib) {
      return thisAttrib.value;
    }
  }
  return '';
}

function allAttribs(attribs) {
  return [6, 0, 4, 5, 7, 8].map(partial(makeAttrib, attribs)).join('</td><td>');
}

function formatTime(time) {
  if (!time) { return ''; }
  const t = splitTime(time);
  return `${padZ(t[0])}d ${padZ(t[1])}h ${padZ(t[2])}m ${padZ(t[3])}s`;
}

function makeRow(relic) {
  return `<tr><td>${relic.min_level}</td>`
    + `<td>${relicName(relic)}</td>`
    + `<td>${guildName(relic.guild)}</td>`
    + `<td>${allAttribs(relic.attributes)}</td>`
    + `<td>${formatTime(relic.time)}</td></tr>`;
}

function makeTable(thisRelicList) {
  return '<style>'
    + `#pCC .reliclist {
        border-collapse: collapse;
        border-spacing: 0;
        table-layout: fixed;
      }
      .reliclist, .reliclist th, .reliclist td {
        border: 1px solid black;
      }
      .reliclist th, .reliclist td {
        padding: 5px;
      }
      .reliclist th:nth-of-type(10), .reliclist td:nth-of-type(10) {
        width: 100px;
      }`
    + '</style><table class="reliclist"><thead><tr>'
    + '<th>Level</th>'
    + '<th>Name</th>'
    + '<th>Guild</th>'
    + '<th>Stam<br>Gain</th>'
    + '<th>Atk</th>'
    + '<th>Dmg</th>'
    + '<th>Stam</th>'
    + '<th>Gold<br>Gain</th>'
    + '<th>XP<br>Gain</th>'
    + '<th>Time</th>'
    + `</tr></thead><tbody>${
      thisRelicList.filter(stamGain).map(makeRow).join('')
    }</tbody></table>`;
}

function processRelicList(thisRelicList) {
  thisRelicList.sort((a, b) => a.min_level - b.min_level);
  setInnerHtml(makeTable(thisRelicList), pCC);
}

function reliclist$1() {
  setInnerHtml('Loading...', pCC);
  getRelicList().then(processRelicList);
}

export default reliclist$1;
//# sourceMappingURL=reliclist-b71161f9.js.map
