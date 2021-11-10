import { helpLink } from '../../settings/simpleCheckbox';

function header(o) {
  return `<tr><td rowspan="2" colspan="2" class="headCell"><h1>Find ${
    o.header}</h1></td><td class="findLabel">Select ${
    o.what} to search for:</td><td>${o.control()}</td></tr>`;
}

function cutoff(o) {
  return `<tr><td class="findLabel">Level ${
    o.cutoff}ers only:</td><td><input id="level175" type="checkbox"></td></tr>`;
}

function searchGuildMembers(o) {
  return `<tr><td class="leftLabel">${
    o.searched}:&nbsp;</td><td id="buffNicks">&nbsp;</td>`
    + '<td class="findLabel">Search guild members:</td>'
    + '<td><input id="guildMembers" type="checkbox" checked></td></tr>';
}

function allyHelpLink() {
  return helpLink(
    'Search Allies/Enemies',
    'The checkbox enables searching your own personal '
    + 'allies/enemies list for buffs.<br><br>'
    + 'Additional profiles to search can be added in the text '
    + 'field to the right, separated by commas.',
  );
}

function searchAlly(o, extraProfile) {
  return '<tr><td class="findLabel">'
    + `# potential ${o.potential}ers to search:&nbsp;</td>`
    + '<td id="potentialBuffers"></td>'
    + `<td class="findLabel">Search allies/enemies:${allyHelpLink()}</td>`
    + '<td><input id="alliesEnemies" type="checkbox" checked>'
    + '<input class="extraProfile" class="custominput" id="extraProfile" '
    + `type="text" title="Extra profiles to search" value="${
      extraProfile || ''}"></td></tr>`;
}

function onlineList(o) {
  return `<tr><td class="findLabel"># ${o.processed}ers processed:`
    + '&nbsp;</td><td id="buffersProcessed">0</td>'
    + '<td class="findLabel">Search online list:</td>'
    + '<td><select class="selectOnline" id="onlinePlayers">'
      + '<option value="0">Disabled</option>'
      + '<option value="49">Short (fastest)</option>'
      + '<option value="47">Medium (medium)</option>'
      + '<option value="45">Long (slowest)</option>'
    + '</select></td></tr>';
}

function progress(o) {
  return `<tr><td class="findLabel">Find ${o.progress} progress:`
    + '&nbsp;</td><td class="buffProg" id="bufferProgress">Idle</td>'
    + '<td align="center"><input id="clearresultsbutton" '
    + 'class="custombutton" type="button" value="Clear Results"></td>'
    + '<td align="center"><input id="findbuffsbutton" class="custombutton" '
    + 'type="button" value="Find Buffers"></td></tr>';
}

function outputTable(o) {
  return `<br><h1>Potential ${o.processed}ers and Bio Info</h1><br>`
    + '<table class="fshResult" id="buffTable"><tbody>'
    + '<tr><th class="nameCol">&nbsp;Name</th>'
    + '<th class="infoCol">&nbsp;Player Info</th>'
    + '<th>&nbsp;Notable Bio Text</th></tr>'
    + '</tbody></table><br>';
}

function disclaimer() {
  return '<div class="disclaim">Disclaimer: This '
    + 'functionality does a simple text search for the terms above. '
    + 'It is not as smart as you are, so please do not judge the results '
    + 'too harshly. It does not search all online players, just a subset '
    + 'of those that have been on recently. '
    + 'The aim is to be fast and still return a good set of results. This '
    + 'feature is a work in progress, so it may be tweaked and enhanced '
    + 'over time.</div>';
}

export default function pageLayout(o, extraProfile) { // Legacy
  return `<table class="fshFind"><tbody>${header(o)}${cutoff(o)}${
    searchGuildMembers(o)}${searchAlly(o, extraProfile)}${onlineList(o)}${
    progress(o)}</tbody></table>${outputTable(o)}${disclaimer()}`;
}
