import { w as infoBoxFrom, u as indexAjaxData, x as callApp, $ as $dataAccess, y as jQueryNotPresent, g as getElementsByTagName, p as pCC, m as getArrayByTagName, f as insertHtmlBeforeEnd, z as getElementById, A as setText, B as setInnerHtml, i as insertElement, h as hasClass, C as getText, o as onclick, k as on } from './calfSystem-6840a38e.js';
import { j as jsonFail, o as outputResult } from './jsonFail-631b7832.js';
import { t as testQuant } from './testQuant-fb4cc4a6.js';
import './testRange-4b09bc47.js';
import './numberIsNaN-a6723163.js';

function formatResults(html) {
  const info = infoBoxFrom(html);
  if (info === 'You purchased the item!') { return { s: true }; }
  return { e: { message: info }, s: false };
}

function bazaarBuy(item) {
  return indexAjaxData({
    cmd: 'potionbazaar',
    subcmd: 'buyitem',
    item_id: item,
  }).then(formatResults);
}

function buyitem(item) {
  return callApp({
    cmd: 'potionbazaar',
    subcmd: 'buyitem',
    item_id: item,
  });
}

function daBazaarBuy(item) {
  return $dataAccess(buyitem, bazaarBuy, item);
}

let ItemId;
let bazaarTable = '<table id="fshBazaar"><tr><td colspan="5">Select an item to quick-buy:'
  + '</td></tr><tr><td colspan="5">Select how many to quick-buy</td></tr>'
  + '<tr><td colspan="5"><input id="buy_amount" class="fshNumberInput" '
  + 'type="number" min="0" max="99" value="1"></td></tr><tr><td>@0@</td>'
  + '<td>@1@</td><td>@2@</td><td>@3@</td><td>@4@</td></tr><tr><td>@5@</td>'
  + '<td>@6@</td><td>@7@</td><td>@8@</td><td>@9@</td></tr><tr>'
  + '<td colspan="3">Selected item:</td><td id="selectedItem" colspan="2">'
  + '</td></tr><tr><td colspan="5">'
  + '<span id="fshBazaarWarning" class="fshHide">'
  + 'Warning:<br>pressing [<span id="fshBuy" class="fshLink">This button'
  + '</span>] now will buy the <span id="quantity">1</span> item(s) WITHOUT '
  + 'confirmation!</span></td></tr><tr><td colspan="5">'
  + '<span id="buyResultLabel"></span><ol id="buy_result"></ol>'
  + '</td>'
  + '</tr></table>';
const bazaarItem = '<span class="bazaarButton tip-dynamic" style="background-image: '
  + 'url(\'@src@\');" itemid="@itemid@" data-tipped="@tipped@"></span>';

function testBuyAmount() {
  return testQuant(getElementById('buy_amount').value);
}

function buyTarget(target, theValue) {
  setText(theValue, getElementById('quantity'));
  ItemId = target.getAttribute('itemid');
  getElementById('fshBazaarWarning').removeAttribute('class');
  const dupNode = target.cloneNode(false);
  dupNode.className = 'bazaarSelected tip-dynamic';
  const selected = getElementById('selectedItem');
  setInnerHtml('', selected);
  insertElement(selected, dupNode);
}

function select(evt) {
  const { target } = evt;
  if (!hasClass('bazaarButton', target)) { return; }
  const theValue = testBuyAmount();
  if (!theValue) { return; }
  buyTarget(target, theValue);
}

function quantity() {
  const theValue = testBuyAmount();
  if (theValue) {
    setText(theValue, getElementById('quantity'));
  }
}

function done(json) {
  const buyResult = getElementById('buy_result');
  if (jsonFail(json, buyResult)) { return; }
  if (json.s) {
    outputResult('You purchased the item!', buyResult);
  }
}

function buy() { // jQuery.min
  if (!ItemId) { return; }
  const buyAmount = getText(getElementById('quantity'));
  setText(`Buying ${buyAmount} items`, getElementById('buyResultLabel'));
  for (let i = 0; i < buyAmount; i += 1) {
    daBazaarBuy(ItemId).then(done);
  }
}

function doMiniatures(el, i) {
  const item = el.children[0];
  const { tipped } = item.dataset;
  bazaarTable = bazaarTable
    .replace(`@${i}@`, bazaarItem)
    .replace('@src@', item.getAttribute('src'))
    .replace('@itemid@', tipped.match(/\?item_id=(\d+)/)[1])
    .replace('@tipped@', tipped);
}

function evtHandlers() {
  onclick(getElementById('fshBazaar'), select);
  on(getElementById('buy_amount'), 'input', quantity);
  onclick(getElementById('fshBuy'), buy);
}

function injectBazaar() { // TODO stop using getElementById
  if (jQueryNotPresent()) { return; }
  const pbImg = getElementsByTagName('img', pCC)[0];
  pbImg.className = 'fshFloatLeft';
  getArrayByTagName('a', pCC).forEach(doMiniatures);
  bazaarTable = bazaarTable.replace(/@\d@/g, '');
  insertHtmlBeforeEnd(pbImg.parentNode, bazaarTable);
  evtHandlers();
}

export default injectBazaar;
//# sourceMappingURL=bazaar-beb8de65.js.map
