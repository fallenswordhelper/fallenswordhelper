import { c as createInput } from './createInput-6dd456d3.js';
import { n as cElement, w as callApp, A as setInnerHtml, D as querySelector, i as insertElement, o as onclick, p as pCC, aD as guideUrl, ar as defSubcmd, E as querySelectorArray, j as jQueryPresent } from './calfSystem-d1de1997.js';
import { c as createSpan } from './createSpan-630374f0.js';
import { i as insertTextBeforeEnd } from './insertTextBeforeEnd-8fbb3463.js';
import { j as jsonFail, o as outputResult } from './jsonFail-e7f70f88.js';
import { c as createAnchor } from './createAnchor-0401add1.js';
import { i as insertElementBefore } from './insertElementBefore-9e5d02cd.js';
import { x as xPath } from './xPath-f5be7d4c.js';

function createOl(props) {
  return cElement('ol', props);
}

function doinvent(recipe) {
  return callApp({
    cmd: 'inventing',
    subcmd: 'doinvent',
    recipe_id: recipe,
  });
}

// import { $dataAccess } from './_dataAccess';
// import invent from './fallbacks/invent';

function daDoInvent(recipe) {
  // return $dataAccess(doinvent, invent, recipe);
  return doinvent(recipe);
}

let invAmount;
let invResultHeader;
let invResults;

function processResult(r) {
  if (r.item) {
    return `<span class="fshGreen">You successfully invented the item [${
      r.item.n}].</span>`;
  }
  return '<span class="fshRed">You have failed to invent the item.</span>';
}

function quickInventDone(json) {
  if (jsonFail(json, invResults)) { return; }
  outputResult(processResult(json.r), invResults);
}

function initResults(str) {
  setInnerHtml(str, invResultHeader);
  setInnerHtml('', invResults);
}

function quickInvent() {
  const amountToInvent = Number(invAmount.value);
  if (!amountToInvent) {
    initResults('');
    return;
  }
  const recipeID = querySelector('input[name="recipe_id"]').value;
  initResults(`Inventing ${String(amountToInvent)} Items`);
  for (let i = 0; i < amountToInvent; i += 1) {
    daDoInvent(recipeID).then(quickInventDone);
  }
}

function makeCell(injector) {
  const myRow = injector.insertRow(-1);
  const myCell = myRow.insertCell(-1);
  myCell.className = 'fshCenter';
  return myCell;
}

function makeInvAmount(myCell) {
  insertTextBeforeEnd(myCell, 'Select how many to quick invent');
  invAmount = createInput({
    className: 'custominput fshNumberInput',
    min: 0,
    type: 'number',
    value: 1,
  });
  insertElement(myCell, invAmount);
}

function makeQuickInv(myCell) {
  const quickInv = createInput({
    className: 'custombutton',
    type: 'button',
    value: 'Quick invent items',
  });
  insertElement(myCell, quickInv);
  onclick(quickInv, quickInvent);
}

function makeInvResultHeader(myCell) {
  invResultHeader = createSpan();
  insertElement(myCell, invResultHeader);
}

function makeInvResults(myCell) {
  invResults = createOl();
  insertElement(myCell, invResults);
}

function resultContainer(myCell) {
  makeInvResultHeader(myCell);
  makeInvResults(myCell);
}

function makeLayout(injector) {
  makeInvAmount(makeCell(injector));
  makeQuickInv(makeCell(injector));
  resultContainer(makeCell(injector));
}

function injectInvent() {
  makeLayout(pCC.lastElementChild);
}

function getItemId(el) {
  if (!el) { return; }
  const match = el.src.match(/\/items\/(\d+)\.gif/);
  if (match) { return match[1]; }
}

function guideItemHref(itemId) {
  return `${guideUrl}items${defSubcmd}view&item_id=${itemId}`;
}

function makeGuideItemAnchor(itemId) {
  return createAnchor({
    href: guideItemHref(itemId),
    target: '_blank',
  });
}

function wrapInGuideLink(el, source) {
  const itemId = getItemId(source);
  if (!itemId) { return; }
  const myLink = makeGuideItemAnchor(itemId);
  insertElementBefore(myLink, el);
  insertElement(myLink, el);
}

function wrapImgInGuideLink(el) {
  wrapInGuideLink(el, el);
}

function makeNameLink() {
  const source = xPath(
    './/b[.="Target Invention"]/../../following-sibling::*[1]//img',
  );
  const recipe = querySelector('#pCC b');
  wrapInGuideLink(recipe, source);
}

function makeIngredientLinks() {
  const ingredients = querySelectorArray('#pCC img[src*="/items/"]');
  ingredients.forEach(wrapImgInGuideLink);
}

function injectViewRecipe() {
  makeNameLink();
  makeIngredientLinks();
}

function inventing() {
  if (jQueryPresent()) {
    injectViewRecipe();
    injectInvent();
  }
}

export default inventing;
//# sourceMappingURL=inventing-5f7d3fb0.js.map
