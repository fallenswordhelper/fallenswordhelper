import { bi as ahSearchUrl, bJ as getValueJSON, z as getElementById, B as setInnerHtml, bK as setValueJSON, bc as jsonParse, Q as isArray, ar as defaults, o as onclick, p as pCC } from './calfSystem-d5c49dc8.js';
import { e as eventHandler5 } from './eventHandler5-81413543.js';
import { i as isChecked } from './isChecked-6d3ab351.js';
import { a as makePageHeader, m as makePageTemplate } from './makePageTemplate-98b04ddb.js';
import { s as selfIdIs } from './selfIdIs-d35ad641.js';

var css = ".fshLists {\n  table-layout: fixed;\n  overflow-wrap: break-word;\n}\n";
var modules_0d55bf2f = {};

const auctionSearchBlurb = '<div>This screen allows you to set up some quick '
  + 'search templates for the Auction House. The Display on AH column '
  + 'indicates if the quick search will show on the short list on the '
  + 'Auction House main screen. A maximum of 36 items can show on this '
  + 'list (It will not show more than 36 even if you have more than 36 '
  + 'flagged). To edit items, either use the large text area below, or '
  + 'add a new entry and delete the old one. You can always reset the '
  + 'list to the default values.</div>'
  + '<div class="fshSmall" id="fshAso">'
  + '</div>';

function auctionSearchParams() {
  return {
    id: 'fshAso',
    headers: ['Category', 'Nickname', 'Quick Search Text',
      'Display in AH?'],
    fields: ['category', 'nickname', 'searchname', 'displayOnAH'],
    tags: ['text', 'text', 'text', 'checkbox'],
    url: ['', '',
      `${ahSearchUrl}@replaceme@`, ''],
    currentItems: getValueJSON('quickSearchList') || [],
    gmname: 'quickSearchList',
    categoryField: 'category',
  };
}

let param;

function hasUrl(j) {
  return param.url && param.url[j] !== '';
}

function detailRow(j, itemField) { // Legacy
  if (param.tags[j] === 'checkbox') {
    return `<input type="checkbox"${isChecked(itemField)
    } disabled>`;
  }
  if (hasUrl(j)) {
    return `<a href="${param.url[j].replace('@replaceme@', itemField)
    }">${itemField}</a>`;
  }
  return itemField;
}

function itemRow(item) { // Legacy
  let result = '';
  for (let j = 0; j < param.fields.length; j += 1) {
    result += '<td class="fshCenter">';
    if (param.fields[j] !== param.categoryField) {
      result += `${detailRow(j, item[param.fields[j]])}`;
    }
    result += '</td>';
  }
  return result;
}

function headersToHtml(acc, curr) {
  return `${acc}<th>${curr}</th>`;
}

function needsCat(item, i, currentItems) {
  return param.categoryField && (i === 0
    || currentItems[i - 1][param.categoryField] !== item[param.categoryField]);
}

function itemRows(acc, item, i, currentItems) {
  let result = '<tr>';
  if (needsCat(item, i, currentItems)) {
    result += `<td><span class="fshQs">${item[param.categoryField]
    }</span></td><td></td><td></td><td></td><td></td></tr><tr>`;
  }
  result += itemRow(item);
  result += `<td><span class="HelperTextLink" data-itemId="${i
  }" id="fshDel${i}">[Del]</span></td></tr>`;
  return acc + result;
}

function doInputs() { // Legacy
  let result = '<tr>';
  for (let i = 0; i < param.tags.length; i += 1) {
    result += `<td align=center><input type="${param.tags[i]
    }" class="custominput" id="fshIn${param.fields[i]}"></td>`;
  }
  return result;
}

function generateManageTable() { // Legacy
  let result = '<table cellspacing="2" cellpadding="2" class="fshLists" '
    + 'width="100%"><tr class="fshOr">';
  result += param.headers.reduce(headersToHtml, '');
  result += '<th>Action</th></tr>';
  result += param.currentItems.reduce(itemRows, '');
  result += doInputs();
  result += '<td><span class="HelperTextLink" id="fshAdd">'
    + '[Add]</span></td></tr></table>'
    + '<table width="100%"><tr><td class="fshCenter">'
    + `<textarea cols=70 rows=20 id="fshEd">${
      JSON.stringify(param.currentItems)}</textarea></td></tr>`
    + '<tr><td class="fshCenter"><input id="fshSave" '
    + 'type="button" value="Save" class="custombutton">'
    + '&nbsp;<input id="fshReset" type="button" value="Reset" '
    + 'class="custombutton"></td></tr>'
    + '</tbody></table>';
  const target = getElementById(param.id);
  if (target) {
    setInnerHtml(result, getElementById(param.id));
    setValueJSON(param.gmname, param.currentItems);
  }
}

function deleteQuickItem(target) { // Legacy
  const itemId = target.getAttribute('data-itemId');
  param.currentItems.splice(itemId, 1);
  generateManageTable();
}

function buildNewItem() { // Legacy
  const newItem = {};
  for (let i = 0; i < param.fields.length; i += 1) {
    if (param.tags[i] === 'checkbox') {
      newItem[param.fields[i]] = getElementById(`fshIn${param.fields[i]}`).checked;
    } else {
      newItem[param.fields[i]] = getElementById(`fshIn${param.fields[i]}`).value;
    }
  }
  return newItem;
}

function addQuickItem() { // Legacy
  const isArrayOnly = param.fields.length === 0;
  let newItem = {};
  if (isArrayOnly) {
    newItem = getElementById('fshIn0').value;
  } else {
    newItem = buildNewItem();
  }
  param.currentItems.push(newItem);
  generateManageTable();
}

function saveRawEditor() { // Legacy
  const userInput = jsonParse(getElementById('fshEd').value);
  if (isArray(userInput)) {
    param.currentItems = userInput;
    generateManageTable();
  }
}

function resetRawEditor() { // Legacy
  if (param.id === 'fshAso') {
    param.currentItems = jsonParse(defaults.quickSearchList);
  } else { param.currentItems = []; }
  generateManageTable();
}

function listEvents() {
  return [
    [selfIdIs('fshReset'), resetRawEditor],
    [selfIdIs('fshSave'), saveRawEditor],
    [selfIdIs('fshAdd'), addQuickItem],
    [(target) => target.id.startsWith('fshDel'), deleteQuickItem],
  ];
}

function setupEventHandler(content) {
  onclick(content, eventHandler5(listEvents()));
}

function injectAuctionSearch(injector) { // Legacy
  const content = injector || pCC;
  setInnerHtml(makePageHeader('Trade Hub Quick Search', '', '', '')
    + auctionSearchBlurb, content);
  // global parameters for the meta function generateManageTable
  param = auctionSearchParams();
  generateManageTable();
  setupEventHandler(content);
}

function injectQuickLinkManager(injector) { // Legacy
  const content = injector || pCC;
  setInnerHtml(makePageTemplate({
    title: 'Quick Links',
    comment: '',
    spanId: '',
    button: '',
    divId: 'qla',
  }), content);

  // global parameters for the meta function generateManageTable
  param = {
    id: 'qla',
    headers: ['Name', 'URL',
      'New [<span class="fshLink tip-static" '
      + 'data-tipped="Open page in a new window">?</span>]'],
    fields: ['name', 'url', 'newWindow'],
    tags: ['text', 'text', 'checkbox'],
    currentItems: getValueJSON('quickLinks') || [],
    gmname: 'quickLinks',
  };
  generateManageTable();
  setupEventHandler(content);
}

export { injectAuctionSearch, injectQuickLinkManager };
//# sourceMappingURL=lists-867be5bd.js.map
