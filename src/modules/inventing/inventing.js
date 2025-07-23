import './inventing.css';
import daRecipeMove from '../_dataAccess/daRecipeMove';
import dynamicAlert from '../alert/dynamicAlert';
import sendEvent from '../analytics/sendEvent';
import arrayFromRadioNodeList from '../common/arrayFromRadioNodeList';
import createSpan from '../common/cElement/createSpan';
import closestTr from '../common/closestTr';
import eventHandler5 from '../common/eventHandler5';
import insertElementAfter from '../common/insertElementAfter';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import on from '../common/on';
import querySelector from '../common/querySelector';
import selfIdIs from '../common/selfIdIs';
import { simpleCheckboxHtml } from '../settings/simpleCheckbox';
import getValue from '../system/getValue';
import setValue from '../system/setValue';
import pagination from './pagination';
import getCurrentFolderId from './getCurrentFolderId';

const prefAjaxifyMoveRecipe = 'ajaxifyMoveRecipe';
let ajaxifyMove = 0;

function handleAjaxifyPref() {
  sendEvent('inventing', 'toggle ajaxify pref');
  ajaxifyMove = !ajaxifyMove;
  setValue(prefAjaxifyMoveRecipe, ajaxifyMove);
}

const changePref = [[selfIdIs(prefAjaxifyMoveRecipe), handleAjaxifyPref]];

function injectPrefs(moveBtn) {
  insertHtmlBeforeEnd(
    moveBtn.parentNode,
    `&nbsp;&nbsp;${simpleCheckboxHtml(prefAjaxifyMoveRecipe)}`,
  );
  on(moveBtn.parentNode, 'change', eventHandler5(changePref));
}

function addSpinner(i) {
  i.parentNode.classList.add('fshRelative');
  i.classList.add('hideCheckbox');
  insertElementAfter(createSpan({ className: 'fshSpinner fshSpinner12' }), i);
}

function removeRow(i) {
  const tr = closestTr(i);
  if (!tr) return;
  tr.nextElementSibling.remove();
  tr.remove();
}

function restoreCheckbox(i) {
  i.classList.remove('hideCheckbox');
  i.nextElementSibling.remove();
}

function handleResult(recipes, json) {
  if (json.s) {
    recipes.forEach(removeRow);
  } else {
    dynamicAlert(json.e.message);
    recipes.forEach(restoreCheckbox);
  }
}

async function ajaxMove(targetId, recipes) {
  sendEvent('inventing', 'Move recipes by AJAX');
  recipes.forEach(addSpinner);
  const json = await daRecipeMove(
    targetId,
    recipes.map((i) => Number(i.value)),
  );
  handleResult(recipes, json);
}

function getRecipes(elements, targetId) {
  const recipeSelected = elements['recipe_selected[]'];
  if (!recipeSelected) {
    return;
  }
  const recipes = arrayFromRadioNodeList(recipeSelected).filter(
    (i) => i.checked,
  );
  if (recipes.length) {
    ajaxMove(targetId, recipes);
  }
}

function submitHandler(e) {
  if (!ajaxifyMove) {
    return;
  }
  e.preventDefault();
  const folderId = getCurrentFolderId();
  const { elements } = e.target;
  const targetId = elements.target_folder_id.value;
  if (folderId !== targetId) {
    getRecipes(elements, targetId);
  }
}

export default function inventing() {
  const moveBtn = querySelector('input[value="Move Recipes"]');
  if (!moveBtn) return;
  injectPrefs(moveBtn);
  ajaxifyMove = getValue(prefAjaxifyMoveRecipe);
  on(moveBtn.form, 'submit', submitHandler);
  pagination();
}
