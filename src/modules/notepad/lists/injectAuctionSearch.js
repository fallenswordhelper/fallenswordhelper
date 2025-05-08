import './lists.css';
import sendEvent from '../../analytics/sendEvent';
import eventHandler5 from '../../common/eventHandler5';
import getElementById from '../../common/getElementById';
import isArray from '../../common/isArray';
import jsonParse from '../../common/jsonParse';
import jsonStringify from '../../common/jsonStringify';
import onclick from '../../common/onclick';
import selfIdIs from '../../common/selfIdIs';
import setInnerHtml from '../../dom/setInnerHtml';
import defaults from '../../support/dataObj.json';
import { pcc } from '../../support/layout';
import isChecked from '../../system/isChecked';
import setValueJSON from '../../system/setValueJSON';
import { auctionSearchBlurb, auctionSearchParams } from './assets';
import makePageHeader from './makePageHeader';

let param = 0;

function hasUrl(j) {
  return param.url && param.url[j] !== '';
}

// Legacy
function detailRow(j, itemField) {
  if (param.tags[j] === 'checkbox') {
    return `<input type="checkbox"${isChecked(itemField)} disabled>`;
  }
  if (hasUrl(j)) {
    return `<a href="${param.url[j].replace(
      '@replaceme@',
      itemField,
    )}">${itemField}</a>`;
  }
  return itemField;
}

// Legacy
function itemRow(item) {
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
  return (
    param.categoryField &&
    (i === 0 ||
      currentItems[i - 1][param.categoryField] !== item[param.categoryField])
  );
}

function itemRows(acc, item, i, currentItems) {
  let result = '<tr>';
  if (needsCat(item, i, currentItems)) {
    result += `<td><span class="fshQs">${
      item[param.categoryField]
    }</span></td><td></td><td></td><td></td><td></td></tr><tr>`;
  }
  result += itemRow(item);
  result += `<td><span class="HelperTextLink" data-itemId="${
    i
  }" id="fshDel${i}">[Del]</span></td></tr>`;
  return acc + result;
}

// Legacy
function doInputs() {
  let result = '<tr>';
  for (let i = 0; i < param.tags.length; i += 1) {
    result += `<td align=center><input type="${
      param.tags[i]
    }" class="custominput" id="fshIn${param.fields[i]}"></td>`;
  }
  return result;
}

const ahTableStart =
  '<table cellspacing="2" cellpadding="2" ' +
  'class="fshLists" width="100%"><tr class="fshOr">';
const rawTableStart =
  '<td><span class="HelperTextLink" id="fshAdd">[Add]</span></td>' +
  '</tr></table><table width="100%"><tr><td class="fshCenter">' +
  '<textarea id="fshEd" class="fshEd">';
const rawTableEnd =
  '</textarea></td></tr><tr><td class="fshCenter">' +
  '<input id="fshSave" type="button" value="Save" class="custombutton">&nbsp;' +
  '<input id="fshReset" type="button" value="Reset" class="custombutton">' +
  '</td></tr></tbody></table>';

// Legacy
function generateManageTable() {
  const result = `${ahTableStart}${param.headers.reduce(
    headersToHtml,
    '',
  )}<th>Action</th></tr>${param.currentItems.reduce(itemRows, '')}${doInputs()}${
    rawTableStart
  }${jsonStringify(param.currentItems)}${rawTableEnd}`;
  const target = getElementById(param.id);
  if (target) {
    setInnerHtml(result, getElementById(param.id));
    setValueJSON(param.gmname, param.currentItems);
  }
}

// Legacy
function deleteQuickItem(target) {
  sendEvent('injectAuctionSearch', 'deleteQuickItem');
  const itemId = target.getAttribute('data-itemId');
  param.currentItems.splice(itemId, 1);
  generateManageTable();
}

const thisItem = (i) => getElementById(`fshIn${param.fields[i]}`);

// Legacy
function buildNewItem() {
  const newItem = {};
  for (let i = 0; i < param.fields.length; i += 1) {
    newItem[param.fields[i]] =
      param.tags[i] === 'checkbox' ? thisItem(i).checked : thisItem(i).value;
  }
  return newItem;
}

// Legacy
function addQuickItem() {
  sendEvent('injectAuctionSearch', 'addQuickItem');
  const isArrayOnly = param.fields.length === 0;
  const newItem = isArrayOnly ? getElementById('fshIn0').value : buildNewItem();
  param.currentItems.push(newItem);
  generateManageTable();
}

// Legacy
function saveRawEditor() {
  sendEvent('injectAuctionSearch', 'saveRawEditor');
  const userInput = jsonParse(getElementById('fshEd').value);
  if (isArray(userInput)) {
    param.currentItems = userInput;
    generateManageTable();
  }
}

// Legacy
function resetRawEditor() {
  sendEvent('injectAuctionSearch', 'resetRawEditor');
  if (param.id === 'fshAso') {
    param.currentItems = jsonParse(defaults.quickSearchList);
  } else {
    param.currentItems = [];
  }
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

// Legacy
export default function injectAuctionSearch(injector) {
  const content = injector || pcc();
  setInnerHtml(
    makePageHeader('Trade Hub Quick Search', '', '', '') + auctionSearchBlurb,
    content,
  );
  // global parameters for the meta function generateManageTable
  param = auctionSearchParams();
  generateManageTable();
  setupEventHandler(content);
}
