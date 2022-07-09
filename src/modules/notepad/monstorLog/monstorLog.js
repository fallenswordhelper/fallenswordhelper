import buildHtml from './buildHtml';
import calf from '../../support/calf';
import doSortParams from '../../common/doSortParams';
import getElementById from '../../common/getElementById';
import { getPcc } from '../../support/layout';
import hasClass from '../../common/hasClass';
import jQueryPresent from '../../common/jQueryPresent';
import keys from '../../common/keys';
import numberSort from '../../system/numberSort';
import onclick from '../../common/onclick';
import partial from '../../common/partial';
import setInnerHtml from '../../dom/setInnerHtml';
import stringSort from '../../system/stringSort';
import { get, set } from '../../system/idb';

let content = 0;
let monsterAry = 0;

function noMobs() {
  setInnerHtml('<span>No monster information! Please enable entity log '
    + 'and travel a bit to see the world</span>', content);
}

function makeRow(el) {
  return '<tr>'
    + `<td class="fshCenter">${el.image}</td>`
    + `<td>${el.name}</td>`
    + `<td class="fshCenter">${el.creature_class}</td>`
    + `<td class="fshCenter">${el.level}</td>`
    + `<td class="fshCenter">${el.attack}</td>`
    + `<td class="fshCenter">${el.defense}</td>`
    + `<td class="fshCenter">${el.armor}</td>`
    + `<td class="fshCenter">${el.damage}</td>`
    + `<td class="fshCenter">${el.hp}</td>`
    + `<td class="fshCenter">${el.enhancements}</td></tr>`;
}

function mobRows() {
  return monsterAry.map(makeRow).join('');
}

function drawMobs() {
  const inject = getElementById('entityTableOutput');
  if (!monsterAry || !inject) { return; }
  setInnerHtml(mobRows(), inject);
}

function findSortType(target) {
  return target.getAttribute('sortType') || 'string';
}

function sortMonsterAry(sortType) {
  if (sortType === 'string') {
    monsterAry.sort(stringSort);
  } else {
    monsterAry.sort(numberSort);
  }
}

function sortCol(target) {
  doSortParams(target);
  const sortType = findSortType(target);
  sortMonsterAry(sortType);
  drawMobs();
}

function isSortHeader(target) {
  return hasClass('fshLink', target)
    && target.hasAttribute('sortkey');
}

function doHandlers(evt) {
  const { target } = evt;
  if (target.id === 'clearEntityLog') {
    set('fsh_monsterLog', '');
    noMobs();
    return;
  }
  if (isSortHeader(target)) {
    sortCol(target);
  }
}

function drawTable() {
  if (!monsterAry) { return; }
  setInnerHtml('<table cellspacing="0" cellpadding="0" border="0" '
    + 'width="100%"><tr class="fshBlack fshWhite">'
    + '<td width="90%" class="fshCenter"><b>Entity Information</b></td>'
    + '<td width="10%">[<span id="clearEntityLog" class="fshPoint">Clear'
    + '</span>]</td></tr></table>'
    + '<table cellspacing="1" cellpadding="2" border="0"><thead>'
    + '<tr class="fshVerySoftOrange">'
    + '<th width="25%" class="fshLink" sortkey="name" colspan="2">Entity</th>'
    + '<th class="fshCenter fshLink" sortkey="creature_class">Class</th>'
    + '<th class="fshCenter fshLink" sortkey="level" sorttype="number">Lvl</th>'
    + '<th class="fshCenter">Attack</th>'
    + '<th class="fshCenter">Defence</th>'
    + '<th class="fshCenter">Armor</th>'
    + '<th class="fshCenter">Damage</th>'
    + '<th class="fshCenter">HP</th>'
    + '<th class="fshCenter">Enhancements</th>'
    + '</tr></thead><tbody id="entityTableOutput"></tbody></table>', content);
  onclick(content, doHandlers);
}

function prepMonster(data) {
  monsterAry = keys(data).map(partial(buildHtml, data));
}

function prepAry(data) {
  if (!data) {
    noMobs();
    return;
  }
  prepMonster(data);
  calf.sortBy = 'level';
  calf.sortAsc = true;
  monsterAry.sort(numberSort);
  drawTable();
  drawMobs();
}

function haveJquery(injector) { // jQuery.min
  content = injector || getPcc();
  if (!content) { return; }
  get('fsh_monsterLog').then(prepAry);
}

export default function monstorLog(injector) {
  if (jQueryPresent()) { haveJquery(injector); }
}
