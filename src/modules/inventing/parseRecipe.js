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
  const componentTables = querySelectorArray(
    '#pCC > table:nth-child(1) >'
    + 'tbody:nth-child(1) > tr:nth-child(9) >'
    + 'td:nth-child(1) > table:nth-child(1) >'
    + 'tbody:nth-child(1) > tr:nth-child(7) >'
    + 'td:nth-child(1) > table:nth-child(1) table',
  );
  const components = componentTables.map((table) => parseIngredientTable(table));

  const itemTables = querySelectorArray(
    '#pCC > table:nth-child(1) >'
    + 'tbody:nth-child(1) > tr:nth-child(9) >'
    + 'td:nth-child(1) > table:nth-child(1) >'
    + 'tbody:nth-child(1) > tr:nth-child(4) >'
    + 'td:nth-child(1) > table:nth-child(1) table',
  );
  const items = itemTables.map((table) => parseIngredientTable(table));

  return { items, components };
}

export function findMaxInv() {
  const ingredientsObject = ingredients();
  const ingredientsArray = ingredientsObject.components.concat(ingredientsObject.items);
  return ingredientsArray.reduce(
    (max, ingred) => Math.min(max, Math.floor(ingred.have / ingred.need)),
    Infinity,
  );
}
