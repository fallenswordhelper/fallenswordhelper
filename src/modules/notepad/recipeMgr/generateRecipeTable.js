import playerId from '../../common/playerId';
import setInnerHtml from '../../dom/setInnerHtml';
import getValue from '../../system/getValue';
import { set } from '../../system/idb';
import shouldBeArray from '../../system/shouldBeArray';

let currentPlayerId = 0;
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

const getIngredients = (items) => (items ? items.map(itemImg).join('') : '');

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
      + `<td class="rmTd">${getIngredients(recipe.items)}</td>`
      + `<td class="rmTd">${getIngredients(recipe.components)}</td>`
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

export default function generateRecipeTable(output, recipebook) { // Legacy
  if (recipebook) {
    if (getValue('hideRecipes')) {
      hideRecipes = shouldBeArray('hideRecipeNames');
    }
    drawRecipeTable(output, recipebook);
  }
}
