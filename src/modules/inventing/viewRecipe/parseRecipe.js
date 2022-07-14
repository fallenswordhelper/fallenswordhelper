import getText from '../../common/getText';
import querySelector from '../../common/querySelector';
import querySelectorArray from '../../common/querySelectorArray';
import { cdn } from '../../system/system';

function parseIngredientTable(table) {
  const [have, need] = getText(querySelector('tr:nth-child(2) td', table)).split('/').map((v) => parseInt(v, 10));
  return { have, need };
}

function ingredients() {
  const ingredientTables = querySelectorArray(
    `#pCC td[background^="${cdn}ui/inventory/"]`,
  ).map((td) => td.parentElement.parentElement);
  return ingredientTables.map(parseIngredientTable);
}

export default function parseRecipe() {
  const ingredientsArray = ingredients();
  return ingredientsArray.reduce(
    (max, ingred) => Math.min(max, Math.floor(ingred.have / ingred.need)),
    Infinity,
  );
}
