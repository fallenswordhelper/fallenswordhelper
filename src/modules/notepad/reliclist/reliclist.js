import partial from '../../common/partial';
import splitTime from '../../common/splitTime';
import setInnerHtml from '../../dom/setInnerHtml';
import { defSubcmd, guideUrl, guildViewUrl } from '../../support/constants';
import { pcc } from '../../support/layout';
import getValue from '../../system/getValue';
import padZ from '../../system/padZ';
import getRelicList from './getRelicList';

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
  const [day, hour, min, sec] = splitTime(time);
  return `${padZ(day)}d ${padZ(hour)}h ${padZ(min)}m ${padZ(sec)}s`;
}

function makeRow(relic) {
  return `<tr><td>${relic.location.realm.min_level}</td>`
    + `<td>${relicName(relic)}</td>`
    + `<td>${guildName(relic.guild)}</td>`
    + `<td>${allAttribs(relic.attributes)}</td>`
    + `<td>${formatTime(relic.time)}</td></tr>`;
}

const relicStyle = `#pCC .reliclist {
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
}`;

function makeTable(thisRelicList) {
  return '<style>'
    + `${relicStyle}`
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
  thisRelicList.sort((a, b) => a.location.realm.min_level - b.location.realm.min_level);
  setInnerHtml(makeTable(thisRelicList), pcc());
}

export default function reliclist() {
  if (!getValue('betaOptIn')) { return; }
  setInnerHtml('Loading...', pcc());
  getRelicList().then(processRelicList);
}
