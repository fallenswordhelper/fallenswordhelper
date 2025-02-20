import { mount } from 'svelte';
import querySelector from '../../common/querySelector';
import { pcc } from '../../support/layout';
import parseRecipe from './parseRecipe';
import QuickInvent from './QuickInvent.svelte';

export default function injectInvent() {
  const inputRecipeId = querySelector('input[name="recipe_id"]');
  if (!inputRecipeId) return;
  const max = parseRecipe();
  mount(QuickInvent, { props: { max, recipeID: inputRecipeId.value }, target: pcc() });
}
