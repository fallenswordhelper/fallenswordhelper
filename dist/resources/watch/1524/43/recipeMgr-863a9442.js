import { d as doSortParams } from './doSortParams-aa67813d.js';
import { aG as playerId, B as setInnerHtml, I as getValue, z as getElementById, m as getArrayByTagName, C as getText, s as partial, t as createDocument, f as insertHtmlBeforeEnd, ai as getCustomUrlParameter, aI as retryAjax, M as getElementsByClassName, u as indexAjaxData, b as createDiv, i as insertElement, y as jQueryNotPresent, o as onclick, p as pCC } from './calfSystem-476ab75d.js';
import { s as set, g as get } from './idb-07a4f1ba.js';
import { s as shouldBeArray } from './shouldBeArray-0b8365a6.js';
import { a as stringSort } from './stringSort-630a15f5.js';
import { a as all } from './all-0d44a747.js';
import './csvSplit-4a4cc559.js';
import './alpha-b51f7102.js';
import './toLowerCase-999f3196.js';

let currentPlayerId;
let hideRecipes = [];

function itemImg(itm) {
  return '<div class="rmItem"><img class="tip-dynamic" '
    + `data-tipped="fetchitem.php?item_id=${
      itm.id}&inv_id=-1&t=2&p=${
      currentPlayerId}&vcode=${
      itm.verify}" src="${
      itm.img}" height="20px" width="20px"><p>${
      itm.amountPresent}/${
      itm.amountNeeded}</p></div>`;
}

function getRecipeItems(recipe) {
  if (recipe.items) {
    return recipe.items.map(itemImg).join('');
  }
  return '';
}

function componentImg(comp) {
  return '<div class="rmItem"><img class="tip-dynamic" '
    + `data-tipped="fetchitem.php?item_id=${
      comp.id}&inv_id=-1&t=2&p=${
      currentPlayerId}&vcode=${
      comp.verify}" src="${
      comp.img}" height="20px" width="20px"><p>${
      comp.amountPresent}/${
      comp.amountNeeded}</p></div>`;
}

function getComponents(recipe) {
  if (recipe.components) {
    return recipe.components.map(componentImg).join('');
  }
  return '';
}

function getImg(recipe) {
  if (recipe.target) {
    return ` <img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${
      recipe.target.id}&inv_id=-1&t=2&p=${currentPlayerId}&vcode=${
      recipe.target.verify}" src="${
      recipe.target.img}" height="30px" width="30px"><br/>`;
  }
  return '';
}

function hidden(recipe) {
  return !hideRecipes.includes(recipe.name);
}

function makeRow(recipe) {
  return '<tr class="rmTr">'
      + '<td class="rmTd">'
        + `<a href="${recipe.link}">`
          + `<img src="${recipe.img}" height="30px" width="30px">`
        + '</a>'
      + '</td>'
      + '<td class="rmTd">'
        + `<a href="${recipe.link}">${recipe.name}</a>`
      + '</td>'
      + `<td class="rmTd">${getRecipeItems(recipe)}</td>`
      + `<td class="rmTd">${getComponents(recipe)}</td>`
      + `<td class="rmTd">${getImg(recipe)}</td>`
    + '</tr>';
}

function drawRecipeTable(output, recipebook) { // Legacy
  currentPlayerId = playerId();
  let result = '<table width="100%"><tr class="rmTh"><th>Recipe</th>'
    + '<th><span id="sortName" class="fshLink" sortkey="name">Name</span>'
    + '</th><th>Items</th><th>Components</th><th>Target</th></tr>';
  result += recipebook.recipe.filter(hidden).map(makeRow).join('');
  result += '</table>';
  setInnerHtml(result, output);
  set('fsh_recipeBook', recipebook);
}

function generateRecipeTable(output, recipebook) { // Legacy
  if (recipebook) {
    if (getValue('hideRecipes')) {
      hideRecipes = shouldBeArray('hideRecipeNames');
    }
    drawRecipeTable(output, recipebook);
  }
}

function getFolderImgs(doc) {
  const el = getElementById('pCC', doc).children[0].rows[4].cells[0].children[0];
  return getArrayByTagName('img', el);
}

const itmRE = /fetchitem.php\?item_id=(\d+)&inv_id=-1&t=2&p=(\d+)&vcode=([a-z0-9]+)/i;

function getTblCells(doc) {
  return getArrayByTagName('td', getElementById('pCC', doc));
}

function background(bgGif, el) {
  const bg = el.getAttribute('background');
  return bg && bg.includes(bgGif);
}

function splitMouseover(img) {
  const mouseOver = img.dataset.tipped;
  return mouseOver.match(itmRE);
}

function buildResult(img, mouseOverRX) {
  return {
    img: img.getAttribute('src'),
    id: mouseOverRX[1],
    verify: mouseOverRX[3],
  };
}

function hasAmounts(result, amounts) {
  if (amounts) {
    const resultAmounts = getText(amounts).split('/');
    // eslint-disable-next-line no-param-reassign
    result.amountPresent = parseInt(resultAmounts[0], 10);
    // eslint-disable-next-line no-param-reassign
    result.amountNeeded = parseInt(resultAmounts[1], 10);
  }
}

function attribs(el) {
  const img = el.children[0].children[0];
  const mouseOverRX = splitMouseover(img);
  const result = buildResult(img, mouseOverRX);
  hasAmounts(result, el.parentNode.nextElementSibling);
  return result;
}

function parseRecipe(tblCells, bgGif) {
  return tblCells
    .filter(partial(background, bgGif))
    .map(attribs);
}

function processRecipe(output, recipebook, recipe, html) {
  const doc = createDocument(html);
  insertHtmlBeforeEnd(output,
    `Parsing blueprint ${recipe.name}...<br>`);
  const tblCells = getTblCells(doc);
  // eslint-disable-next-line no-param-reassign
  recipe.items = parseRecipe(tblCells, '/inventory/2x3.');
  // eslint-disable-next-line no-param-reassign
  recipe.components = parseRecipe(tblCells, '/inventory/1x1mini.');
  // eslint-disable-next-line no-param-reassign
  [recipe.target] = parseRecipe(tblCells, '/hellforge/2x3.');
  recipebook.recipe.push(recipe);
}

function recipeAry(doc) {
  const innerPcc = getElementById('pCC', doc);
  const scope = innerPcc.children[0].rows[6].cells[0].children[0];
  return getArrayByTagName('a', scope);
}

function makeRecipe(el) {
  return {
    img: el.parentNode.previousElementSibling.children[0].getAttribute('src'),
    link: el.href,
    name: getText(el),
    id: getCustomUrlParameter(el.search, 'recipe_id'),
  };
}

function getRecipe(output, recipebook, el) {
  insertHtmlBeforeEnd(output, `Found blueprint "${getText(el)}".<br>`);
  const recipe = makeRecipe(el);
  return retryAjax(el.href)
    .then(partial(processRecipe, output, recipebook, recipe));
}

function processFolderAnyPage(output, recipebook, html) { // jQuery.min
  const doc = createDocument(html);
  const prm = recipeAry(doc).map(partial(getRecipe, output, recipebook));
  return all(prm);
}

function thisInventFolder(el) {
  return /\/folder_on\./.test(el.getAttribute('src'));
}

function thisFolderHref(doc) {
  return getFolderImgs(doc).find(thisInventFolder).parentNode.href;
}

function notThisPage(el, i) { return i !== 0; }

function pageNumber(el) { return el.value; }

function otherPages(doc) {
  return getArrayByTagName('option',
    getElementsByClassName('customselect', getElementById('pCC', doc))[0])
    .filter(notThisPage).map(pageNumber);
}

function getPage(thisFolder, bindFolderAnyPage, i) {
  return retryAjax(`${thisFolder}&page=${i}`)
    .then(bindFolderAnyPage);
}

function ajaxOtherPages(doc, thisFolder, bindFolderAnyPage) {
  return otherPages(doc).map(partial(getPage, thisFolder, bindFolderAnyPage));
}

function processFolderFirstPage(output, recipebook, html) { // jQuery.min
  const doc = createDocument(html);
  const thisFolder = thisFolderHref(doc);
  const bindFolderAnyPage = partial(processFolderAnyPage, output, recipebook);
  const prm = ajaxOtherPages(doc, thisFolder, bindFolderAnyPage);
  prm.push(bindFolderAnyPage(html));
  return all(prm);
}

function notUnassigned(el) {
  return getCustomUrlParameter(el.parentNode.search, 'folder_id') !== '-1';
}

function noQuests(output, el) {
  const folderName = getText(
    el.parentNode.nextElementSibling.nextElementSibling.firstChild,
  ); // Text Node
  const hasQuest = /quest/i.test(folderName);
  if (hasQuest) {
    insertHtmlBeforeEnd(output, `Skipping folder "${
      folderName}"  as it has the word "quest" in folder name.<br>`);
  }
  return !hasQuest;
}

function doAjax(bindFolderFirstPage, el) {
  return retryAjax(el.parentNode.href).then(bindFolderFirstPage);
}

function buildPrm(output, html, bindFolderFirstPage) {
  const doc = createDocument(html);
  const folderImgs = getFolderImgs(doc);
  return folderImgs
    .filter(notUnassigned)
    .filter(partial(noQuests, output))
    .map(partial(doAjax, bindFolderFirstPage));
}

function processFirstPage(output, recipebook, html) { // jQuery.min
  const bindFolderFirstPage = partial(processFolderFirstPage, output, recipebook);
  const prm = buildPrm(output, html, bindFolderFirstPage);
  prm.push(bindFolderFirstPage(html));
  return all(prm);
}

let recipebook;
let output;

function displayStuff() {
  insertHtmlBeforeEnd(output, 'Finished parsing ... formatting ...');
  set('fsh_recipeBook', recipebook);
  generateRecipeTable(output, recipebook);
}

function parseInventingStart() { // jQuery.min
  recipebook = {};
  recipebook.recipe = [];
  setInnerHtml('<br>Parsing inventing screen ...<br>', output);
  indexAjaxData({ cmd: 'inventing' })
    .then(partial(processFirstPage, output, recipebook))
    .then(displayStuff);
}

function gotRecipeBook(content, data) {
  recipebook = data;
  setInnerHtml('<table class="fshInvFilter"><thead><tr>'
    + '<th width="90%"><b>&nbsp;Recipe Manager</b></th>'
    + '<th width="10%" class="fshBtnBox">['
    + '<span id="rfsh" class="fshLink">'
    + 'Refresh</span>]</th>'
    + '</tr></thead></table>', content);
  output = createDiv();
  insertElement(content, output);
  if (!recipebook) {
    parseInventingStart();
  } else {
    generateRecipeTable(output, recipebook);
  }
}

function sortRecipeTable(evt) { // Legacy
  doSortParams(evt.target);
  recipebook.recipe.sort(stringSort);
  generateRecipeTable(output, recipebook);
}

function rmEvtHdl(evt) {
  if (evt.target.id === 'rfsh') {
    parseInventingStart();
  }
  if (evt.target.id === 'sortName') {
    sortRecipeTable(evt);
  }
}

function injectRecipeManager(injector) { // jQuery.min
  if (jQueryNotPresent()) { return; }
  const content = injector || pCC;
  get('fsh_recipeBook').then(partial(gotRecipeBook, content));
  onclick(content, rmEvtHdl);
}

export default injectRecipeManager;
//# sourceMappingURL=recipeMgr-863a9442.js.map
