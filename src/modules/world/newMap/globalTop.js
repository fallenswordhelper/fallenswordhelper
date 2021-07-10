import { cdn } from '../../system/system';
import getElementById from '../../common/getElementById';
import onclick from '../../common/onclick';
import setInnerHtml from '../../dom/setInnerHtml';
import toprated from '../../app/toprated';
import { guildViewUrl, showPlayerUrl } from '../../support/constants';

async function getData(worldEventContrib) {
  const json = await toprated('globalquest'); // TODO DataAccess/fallback
  // console.log(json);
  const data = json.r.list;
  let html = '<table id="world-event-contrib-table" style="width: 270px;"><tr>'
    + '<td class="header"></td>'
    + '<td class="header"></td>'
    + '<td class="header">Username</td>'
    + '<td class="header">Kills</td></tr>';
  const l = data.length;
  for (let i = 0; i < l; i++) {
    html += '<tr style="border-top:1px solid #CD9E4B;">'
      + `<td>${i + 1}</td>`
      + `<td><a href="${guildViewUrl}${data[i].guild.id}">`
      + `<img src="${cdn}guilds/${data[i].guild.id}_mini.png" width="16" height="16"></a></td>`
      + `<td><a href="${showPlayerUrl}${data[i].player.name}">${data[i].player.name}</a></td>`
      + `<td>${data[i].value}</td></tr>`;
  }
  html += '</table>';
  setInnerHtml(html, worldEventContrib);
}

function show() {
  const worldEventContrib = getElementById('world-event-contrib');
  setInnerHtml('Loading...', worldEventContrib);
  getData(worldEventContrib);
  $(worldEventContrib).dialog({
    title: 'Top 100 Event Contributers',
    minWidth: 300,
    height: 300,
    zIndex: 9999,
  });
}

export default function globalTop() {
  const worldEventBadge = $('#world-event-badge');
  if (!worldEventBadge.length) { return; }
  worldEventBadge.off();
  onclick(worldEventBadge[0], show);
}
