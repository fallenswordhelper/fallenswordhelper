import doSortParams from '../../common/doSortParams';
import generateRecipeTable from './generateRecipeTable';
import { get } from '../../system/idb';
import { getPcc } from '../../support/layout';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import onclick from '../../common/onclick';
import partial from '../../common/partial';
import stringSort from '../../system/stringSort';
import {
  getOutput,
  getRecipebook,
  gotRecipeBook,
  parseInventingStart,
} from './parseInventing';

function sortRecipeTable(evt) { // Legacy
  doSortParams(evt.target);
  getRecipebook().recipe.sort(stringSort);
  generateRecipeTable(getOutput(), getRecipebook());
}

function rmEvtHdl(evt) {
  if (evt.target.id === 'rfsh') {
    parseInventingStart();
  }
  if (evt.target.id === 'sortName') {
    sortRecipeTable(evt);
  }
}

export default function recipeMgr(injector) { // jQuery.min
  if (jQueryNotPresent()) { return; }
  const content = injector || getPcc();
  get('fsh_recipeBook').then(partial(gotRecipeBook, content));
  onclick(content, rmEvtHdl);
}
