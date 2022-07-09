import createDiv from '../../common/cElement/createDiv';
import generateRecipeTable from './generateRecipeTable';
import indexAjaxData from '../../ajax/indexAjaxData';
import insertElement from '../../common/insertElement';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import partial from '../../common/partial';
import processFirstPage from './processFirstPage';
import { set } from '../../system/idb';
import setInnerHtml from '../../dom/setInnerHtml';

let recipebook = 0;
let output = 0;

export const getRecipebook = () => recipebook;
export const getOutput = () => output;

function displayStuff() {
  insertHtmlBeforeEnd(output, 'Finished parsing ... formatting ...');
  set('fsh_recipeBook', recipebook);
  generateRecipeTable(output, recipebook);
}

export function parseInventingStart() { // jQuery.min
  recipebook = {};
  recipebook.recipe = [];
  setInnerHtml('<br>Parsing inventing screen ...<br>', output);
  indexAjaxData({ cmd: 'inventing' })
    .then(partial(processFirstPage, output, recipebook))
    .then(displayStuff);
}

export function gotRecipeBook(content, data) {
  recipebook = data;
  setInnerHtml('<table class="fshInvFilter"><thead><tr>'
    + '<th width="90%"><b>&nbsp;Recipe Manager</b></th>'
    + '<th width="10%" class="fshBtnBox">['
    + '<span id="rfsh" class="fshLink">'
    + 'Refresh</span>]</th>'
    + '</tr></thead></table>', content);
  output = createDiv();
  insertElement(content, output);
  if (!recipebook) {
    parseInventingStart();
  } else {
    generateRecipeTable(output, recipebook);
  }
}
