import getText from '../common/getText';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';

export function parseIngredientTable(table) {
  const [have, need] = getText(querySelector('tr:nth-child(2) td', table)).split('/').map((v) => parseInt(v, 10));
  return Object({
    id: querySelector('img', table).src.match(/(\d+)\.[A-Za-z]+$/)[1],
    have,
    need,
  });
}

export function ingredients() {
  const ingredientTables = querySelectorArray(
    '#pCC td[background^="https://cdn2.fallensword.com/ui/inventory/"]',
  ).map((td) => td.parentElement.parentElement);
  return ingredientTables.map(parseIngredientTable);
}

export function findMaxInv() {
  const ingredientsArray = ingredients();
  return ingredientsArray.reduce(
    (max, ingred) => Math.min(max, Math.floor(ingred.have / ingred.need)),
    Infinity,
  );
}
