import QuickInvent from './QuickInvent.svelte';
import { pCC } from '../support/layout';
import parseRecipe from './parseRecipe';
import querySelector from '../common/querySelector';

function startApp(props, target) {
  return new QuickInvent({
    props,
    target,
  });
}

function addSep(injector) {
  const sepRow = injector.insertRow(-1);
  const sepCell = sepRow.insertCell(-1);
  sepCell.className = 'header';
  sepCell.setAttribute('height', '1');
}

function injectRow(injector) {
  const myRow = injector.insertRow(-1);
  const myCell = myRow.insertCell(-1);
  myCell.className = 'fshCenter';
  return myCell;
}

export default function injectInvent() {
  const inputRecipeId = querySelector('input[name="recipe_id"]');
  if (!inputRecipeId) { return; }
  const max = parseRecipe();
  const injector = pCC.lastElementChild;
  addSep(injector);
  startApp({ max, recipeID: inputRecipeId.value }, injectRow(injector));
}
