import './bazaar.css';
import daBazaarBuy from '../_dataAccess/daBazaarBuy';
import getArrayByTagName from '../common/getArrayByTagName';
import getElementById from '../common/getElementById';
import getElementsByTagName from '../common/getElementsByTagName';
import getText from '../common/getText';
import hasClass from '../common/hasClass';
import insertElement from '../common/insertElement';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import jQueryNotPresent from '../common/jQueryNotPresent';
import jsonFail from '../common/jsonFail';
import on from '../common/on';
import onclick from '../common/onclick';
import outputResult from '../common/outputResult';
import querySelector from '../common/querySelector';
import regExpGroups from '../common/regExpGroups';
import setInnerHtml from '../dom/setInnerHtml';
import setText from '../dom/setText';
import { fetchItemRe } from '../support/constants';
import { getPcc } from '../support/layout';
import testQuant from '../system/testQuant';

let bazaarTable = '<table class="fshBazaar"><tr><td colspan="5">Select an item to quick-buy:'
  + '</td></tr><tr><td colspan="5">Select how many to quick-buy</td></tr>'
  + '<tr><td colspan="5"><input id="buy_amount" class="fshNumberInput" '
  + 'type="number" min="0" max="99" value="1"></td></tr><tr><td>@0@</td>'
  + '<td>@1@</td><td>@2@</td><td>@3@</td><td>@4@</td></tr><tr><td>@5@</td>'
  + '<td>@6@</td><td>@7@</td><td>@8@</td><td>@9@</td></tr><tr>'
  + '<td colspan="3">Selected item:</td><td id="selectedItem" colspan="2">'
  + '</td></tr><tr><td colspan="5">'
  + '<span class="fshBazaarWarning fshHide">'
  + 'Warning:<br>pressing [<span id="fshBuy" class="fshLink">This button'
  + '</span>] now will buy the <span id="quantity">1</span> item(s) WITHOUT '
  + 'confirmation!</span></td></tr><tr><td colspan="5">'
  + '<span id="buyResultLabel"></span><ol id="buy_result"></ol>'
  + '</td>'
  + '</tr></table>';
const bazaarItem = '<span class="bazaarButton tip-dynamic" style="background-image: '
  + 'url(\'@src@\');" itemid="@itemid@" data-tipped="@tipped@"></span>';

let itemId = 0;
let inputBuyAmount = 0;
let tdSelected = 0;
let spanWarning = 0;
let spanQuantity = 0;
let spanResultLabel = 0;
let olResults = 0;

function testBuyAmount() {
  return testQuant(inputBuyAmount.value);
}

function buyTarget(target, theValue) {
  setText(theValue, spanQuantity);
  itemId = target.getAttribute('itemid');
  spanWarning.classList.remove('fshHide');
  const dupNode = target.cloneNode(false);
  dupNode.className = 'bazaarSelected tip-dynamic';
  const selected = tdSelected;
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
    setText(theValue, spanQuantity);
  }
}

function done(json) {
  const buyResult = olResults;
  if (jsonFail(json, buyResult)) { return; }
  if (json.s) {
    outputResult(`You purchased ${json.r.length} item(s)!`, buyResult);
  }
}

async function buy() { // jQuery.min
  if (!itemId) { return; }
  const buyAmount = getText(spanQuantity);
  setText(`Buying ${buyAmount} items`, spanResultLabel);
  const json = await daBazaarBuy(itemId, buyAmount);
  done(json);
}

function doMiniatures(el, i) {
  const item = el.children[0];
  const { tipped } = item.dataset;
  const { itemId: itmId } = regExpGroups(fetchItemRe, tipped);
  bazaarTable = bazaarTable
    .replace(`@${i}@`, bazaarItem)
    .replace('@src@', item.getAttribute('src'))
    .replace('@itemid@', itmId)
    .replace('@tipped@', tipped);
}

function setVars() {
  inputBuyAmount = getElementById('buy_amount');
  tdSelected = getElementById('selectedItem');
  spanWarning = querySelector('.fshBazaarWarning');
  spanQuantity = getElementById('quantity');
  spanResultLabel = getElementById('buyResultLabel');
  olResults = getElementById('buy_result');
}

function evtHandlers() {
  setVars();
  onclick(querySelector('.fshBazaar'), select);
  on(inputBuyAmount, 'input', quantity);
  onclick(getElementById('fshBuy'), buy);
}

export default function bazaar() {
  if (jQueryNotPresent()) { return; }
  const pbImg = getElementsByTagName('img', getPcc())[0];
  pbImg.className = 'fshFloatLeft';
  getArrayByTagName('a', getPcc()).forEach(doMiniatures);
  bazaarTable = bazaarTable.replace(/@\d@/g, '');
  insertHtmlBeforeEnd(pbImg.parentNode, bazaarTable);
  evtHandlers();
}
