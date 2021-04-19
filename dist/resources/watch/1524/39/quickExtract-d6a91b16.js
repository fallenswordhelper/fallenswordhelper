import { y as jQueryNotPresent, B as setInnerHtml, i as insertElement, o as onclick, s as partial, br as composingFragmentType, aw as cdn, aY as keys, z as getElementById, p as pCC } from './calfSystem-d5c49dc8.js';
import { c as createTable } from './createTable-3b73c3e3.js';
import { d as daUseItem } from './daUseItem-748a4fe1.js';
import { e as eventHandler5 } from './eventHandler5-81413543.js';
import { g as getInventory } from './getInventory-a5c93479.js';
import { j as jConfirm } from './jConfirm-f61827ec.js';
import { j as jsonFail, o as outputResult } from './jsonFail-4b9cd9be.js';
import { s as selfIdIs } from './selfIdIs-d35ad641.js';
import './guildStore-2b65051c.js';
import './cmdExport-7bf7ec6d.js';
import './indexAjaxJson-bce38bad.js';

let extTbl;
let playerId;
let extractInv;
let selectST;
let selectMain;
let resourceList;
let buyResult;

function thisItem(invId, el) { return el.inv_id === invId; }

function backpackRemove(invId) {
  const thisIndex = extractInv.findIndex(partial(thisItem, invId));
  if (thisIndex >= 0) {
    extractInv.splice(thisIndex, 1);
  }
}

function expandFrags(frag) {
  return `${frag.amount} x ${composingFragmentType[frag.type]}`;
}

function processResult(r) {
  if (r.item) {
    return `You successfully extracted 1 '${r.item.n
    }' component(s) from 1 resource(s).</span>`;
  }
  if (r.frags) {
    return `You gained ${r.frags.map(expandFrags).join(', ')
    } Fragments by opening the Fragment Stash.`;
  }
  return '<span class="fshRed">You failed to extract any components from '
    + 'resource(s).</span>';
}

function quickDoneExtracted(invId, json) {
  if (jsonFail(json, buyResult)) { return; }
  backpackRemove(invId);
  outputResult(processResult(json.r), buyResult);
}

function ajaxExtract(el) { daUseItem(el).then(partial(quickDoneExtracted, el)); }

function doExtract(target) {
  const inventoryIDs = resourceList[target.id.replace('fshExtr', '')].invIDs;
  setInnerHtml(`extracting all ${inventoryIDs.length} resources`,
    target.parentNode);
  inventoryIDs.forEach(ajaxExtract);
}

function extractAllSimilar(target) {
  jConfirm('Extract Resources',
    'Are you sure you want to extract all similar items?',
    partial(doExtract, target));
}

function inMain(item) {
  return selectMain && item.folder_id !== -1;
}

function inSt(item) {
  return !selectST && item.is_in_st;
}

function checkFlags(item) {
  return inMain(item) || inSt(item);
}

function resources(acc, item) {
  if (checkFlags(item)) { return acc; }
  if (acc[item.item_id]) {
    acc[item.item_id].invIDs.push(item.inv_id);
  } else {
    acc[item.item_id] = {
      invIDs: [item.inv_id],
      inv_id: item.inv_id,
      item_name: item.item_name,
    };
  }
  return acc;
}

function tableRows(acc, itemId) {
  const res = resourceList[itemId];
  return `${acc}<tr><td class="fshCenter"><span class="smallLink"`
    + ` id="fshExtr${itemId
    }">Extract all ${res.invIDs.length}</span></td>`
    + `<td><img src="${cdn}items/${
      itemId}.gif" class="tip-dynamic" data-tipped="`
    + `fetchitem.php?item_id=${itemId}&inv_id=${
      res.inv_id}&t=1&p=${playerId
    }" border=0></td><td>${res.item_name}</td></tr>`;
}

function showQuickExtract() {
  if (!extractInv) { return; }
  resourceList = extractInv.reduce(resources, {});
  let output = '<tr><th width="20%">Actions</th><th colspan="2">Items</th></tr>'
    + '<tr><td colspan="3"><ol id="qeresult"></ol></td></tr>';
  output += keys(resourceList).reduce(tableRows, '');
  setInnerHtml(output, extTbl);
  buyResult = getElementById('qeresult');
}

function isExtractable(item) {
  return item.item_name === 'Zombie Coffin'
    || item.type === 12
    || item.type === 16;
}

function prepInv(data) {
  playerId = data.player_id;
  extractInv = data.items.filter(isExtractable);
  showQuickExtract();
}

function toggleSelectSt() {
  selectST = !selectST;
  showQuickExtract();
}

function toggleSelectMain() {
  selectMain = !selectMain;
  showQuickExtract();
}

function extractable(target) { return target.id.startsWith('fshExtr'); }

function extractEvents() {
  return [
    [selfIdIs('fshInSt'), toggleSelectSt],
    [selfIdIs('fshInMain'), toggleSelectMain],
    [extractable, extractAllSimilar],
  ];
}

function insertQuickExtract(injector) { // jQuery.min
  if (jQueryNotPresent()) { return; }
  const content = injector || pCC;
  setInnerHtml('<div class="qeHead"><b>Quick Extract</b></div>'
    + 'Select which type of plants you wish to extract all of. Only '
    + 'select extractable resources.<br>'
    + '<label><input type="checkbox" id="fshInSt" checked>'
    + ' Select items in ST</label>&nbsp;&nbsp;'
    + '<label><input type="checkbox" id="fshInMain" checked>'
    + ' Only extract items in Main Folder</label>', content);
  extTbl = createTable({ width: '100%' });
  insertElement(content, extTbl);
  selectST = true;
  selectMain = true;
  onclick(content, eventHandler5(extractEvents()));
  getInventory().then(prepInv);
}

export default insertQuickExtract;
//# sourceMappingURL=quickExtract-d6a91b16.js.map
