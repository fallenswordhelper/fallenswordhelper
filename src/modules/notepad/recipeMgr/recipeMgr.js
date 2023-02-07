import doSortParams from '../../common/doSortParams';
import idHandler from '../../common/idHandler';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import onclick from '../../common/onclick';
import { pcc } from '../../support/layout';
import { get } from '../../system/idb';
import stringSort from '../../system/stringSort';
import generateRecipeTable from './generateRecipeTable';
import {
  getOutput,
  getRecipebook,
  gotRecipeBook,
  parseInventingStart,
} from './parseInventing';

function sortRecipeTable(target) { // Legacy
  doSortParams(target);
  getRecipebook().recipe.sort(stringSort);
  generateRecipeTable(getOutput(), getRecipebook());
}

const rmHdl = [
  ['rfsh', parseInventingStart],
  ['sortName', sortRecipeTable],
];

export default async function recipeMgr(injector) {
  if (jQueryNotPresent()) { return; }
  const content = injector || pcc();
  const book = await get('fsh_recipeBook');
  gotRecipeBook(content, book);
  onclick(content, idHandler(rmHdl));
}
