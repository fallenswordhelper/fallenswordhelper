import indexAjaxData from '../../ajax/indexAjaxData';
import createDiv from '../../common/cElement/createDiv';
import insertElement from '../../common/insertElement';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import setInnerHtml from '../../dom/setInnerHtml';
import { set } from '../../system/idb';
import generateRecipeTable from './generateRecipeTable';
import processFirstPage from './processFirstPage';

let recipebook = 0;
let output = 0;

export const getRecipebook = () => recipebook;
export const getOutput = () => output;

function displayStuff() {
  insertHtmlBeforeEnd(output, 'Finished parsing ... formatting ...');
  set('fsh_recipeBook', recipebook);
  generateRecipeTable(output, recipebook);
}

export async function parseInventingStart() { // jQuery.min
  recipebook = {};
  recipebook.recipe = [];
  setInnerHtml('<br>Parsing inventing screen ...<br>', output);
  const html = await indexAjaxData({ cmd: 'inventing' });
  if (!html) return;
  await processFirstPage(output, recipebook, html);
  displayStuff();
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
