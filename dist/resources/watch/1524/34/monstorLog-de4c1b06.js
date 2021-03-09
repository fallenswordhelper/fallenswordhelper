import { a as addCommas } from './addCommas-4b913655.js';
import { al as cdn, aR as keys, e as entries, q as extend, aJ as isUndefined, c as calf, j as jQueryPresent, A as setInnerHtml, y as getElementById, h as hasClass, o as onclick, s as partial, p as pCC } from './calfSystem-d1de1997.js';
import { d as doSortParams } from './doSortParams-299c5e3d.js';
import { p as path, s as sortDesc, a as stringSort } from './stringSort-17df71b9.js';
import { s as set, g as get } from './idb-261893ee.js';
import './alpha-18b53f44.js';
import './toLowerCase-82b2a5d7.js';

function imgHtml(imageId) {
  return `<img class="tip-static" src="${cdn
  }creatures/${imageId}.png" data-tipped="<img src='${
    cdn}creatures/${imageId
  }.png' width=200 height=200>" width=40 height=40>`;
}

function hazEnhancements(enhancements) {
  return enhancements && keys(enhancements).length > 0;
}

function statMinMax(stat) {
  return `${stat.min.toString()} - ${stat.max.toString()}`;
}

function buildEnhancements(pair) {
  return `<span class="fshNoWrap">${pair[0]}: ${
    statMinMax(pair[1])}</span>`;
}

function formatEnhancements(enhancements) {
  if (hazEnhancements(enhancements)) {
    let tmp = '<span class="fshXXSmall">';
    tmp += entries(enhancements).map(buildEnhancements).join('<br>');
    return `${tmp}</span>`;
  }
  return '<span class="fshGrey">**Missing**</span>';
}

function buildHtml(data, key) {
  return extend(data[key], {
    name: key,
    image: imgHtml(data[key].image_id),
    level: addCommas(data[key].level),
    attack: statMinMax(data[key].attack),
    defense: statMinMax(data[key].defense),
    armor: statMinMax(data[key].armor),
    damage: statMinMax(data[key].damage),
    hp: statMinMax(data[key].hp),
    enhancements: formatEnhancements(data[key].enhancements),
  });
}

function intFromString(val) {
  if (typeof val === 'string') {
    return parseInt(val.replace(/,|#/g, ''), 10);
  }
  return val;
}

function aIsNotEquipment(a) {
  return !isUndefined(a.type) && a.type > 8;
}

function bIsNotEquipment(a, b) {
  return !isUndefined(a.type) && b.type > 8;
}

function numberSort(a, b) {
  if (aIsNotEquipment(a)) { return 1; } // non equipment items
  if (bIsNotEquipment(a, b)) { return -1; }
  let valueA = path(a, calf.sortBy, 1);
  let valueB = path(b, calf.sortBy, 1);
  valueA = intFromString(valueA);
  valueB = intFromString(valueB);
  const result = valueA - valueB;
  return sortDesc(result);
}

let content;
let monsterAry;

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
  content = injector || pCC;
  if (!content) { return; }
  get('fsh_monsterLog').then(prepAry);
}

function injectMonsterLog(injector) {
  if (jQueryPresent()) { haveJquery(injector); }
}

export default injectMonsterLog;
//# sourceMappingURL=monstorLog-de4c1b06.js.map
