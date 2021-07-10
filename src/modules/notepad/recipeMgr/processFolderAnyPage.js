import all from '../../common/all';
import createDocument from '../../system/createDocument';
import getArrayByTagName from '../../common/getArrayByTagName';
import getCustomUrlParameter from '../../system/getCustomUrlParameter';
import getElementById from '../../common/getElementById';
import getText from '../../common/getText';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import partial from '../../common/partial';
import processRecipe from './processRecipe';
import retryAjax from '../../ajax/retryAjax';

function recipeAry(doc) {
  const innerPcc = getElementById('pCC', doc);
  const scope = innerPcc.children[0].rows[6].cells[0].children[0];
  return getArrayByTagName('a', scope);
}

function makeRecipe(el) {
  return {
    img: el.parentNode.previousElementSibling.children[0].getAttribute('src'),
    link: el.href,
    name: getText(el),
    id: getCustomUrlParameter(el.search, 'recipe_id'),
  };
}

function getRecipe(output, recipebook, el) {
  insertHtmlBeforeEnd(output, `Found blueprint "${getText(el)}".<br>`);
  const recipe = makeRecipe(el);
  return retryAjax(el.href)
    .then(partial(processRecipe, output, recipebook, recipe));
}

export default function processFolderAnyPage(output, recipebook, html) { // jQuery.min
  const doc = createDocument(html);
  const prm = recipeAry(doc).map(partial(getRecipe, output, recipebook));
  return all(prm);
}
