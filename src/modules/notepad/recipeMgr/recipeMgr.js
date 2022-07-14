import doSortParams from '../../common/doSortParams';
import idHandler from '../../common/idHandler';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import onclick from '../../common/onclick';
import partial from '../../common/partial';
import { getPcc } from '../../support/layout';
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

export default function recipeMgr(injector) { // jQuery.min
  if (jQueryNotPresent()) { return; }
  const content = injector || getPcc();
  get('fsh_recipeBook').then(partial(gotRecipeBook, content));
  onclick(content, idHandler(rmHdl));
}
