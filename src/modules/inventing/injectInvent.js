import QuickInvent from './QuickInvent.svelte';
import { findMaxInv } from './parseRecipe';
import { pCC } from '../support/layout';
import querySelector from '../common/querySelector';

export default function injectInvent() {
  const recipeID = querySelector('input[name="recipe_id"]').value;
  const max = findMaxInv();
  const injector = pCC.lastElementChild;
  const myRow = injector.insertRow(-1);
  const myCell = myRow.insertCell(-1);
  myCell.className = 'fshCenter';
  const props = { max, recipeID };
  const app = new QuickInvent({
    props,
    target: myCell,
  });
  console.log(app);
}
