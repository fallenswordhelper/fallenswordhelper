import doSortParams from '../../common/doSortParams';
import generateRecipeTable from './generateRecipeTable';
import { get } from '../../system/idb';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import onclick from '../../common/onclick';
import { pCC } from '../../support/layout';
import partial from '../../common/partial';
import stringSort from '../../system/stringSort';
import {
  gotRecipeBook,
  output,
  parseInventingStart,
  recipebook,
} from './parseInventing';

function sortRecipeTable(evt) { // Legacy
  doSortParams(evt.target);
  recipebook.recipe.sort(stringSort);
  generateRecipeTable(output, recipebook);
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
  const content = injector || pCC;
  get('fsh_recipeBook').then(partial(gotRecipeBook, content));
  onclick(content, rmEvtHdl);
}
