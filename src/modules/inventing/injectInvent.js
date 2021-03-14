import QuickInvent from './QuickInvent.svelte';
import { findMaxInv } from './parseRecipe';
import { pCC } from '../support/layout';
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

export default function injectInvent() {
  const recipeID = querySelector('input[name="recipe_id"]').value;
  const max = findMaxInv();
  const injector = pCC.lastElementChild;

  addSep(injector);

  const myRow = injector.insertRow(-1);
  const myCell = myRow.insertCell(-1);
  myCell.className = 'fshCenter';
  const props = { max, recipeID };
  startApp(props, myCell);
}
