import retryAjax from '../../ajax/retryAjax';
import all from '../../common/all';
import getText from '../../common/getText';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import partial from '../../common/partial';
import querySelectorArray from '../../common/querySelectorArray';
import createDocument from '../../system/createDocument';
import getCustomUrlParameter from '../../system/getCustomUrlParameter';
import processRecipe from './processRecipe';

function recipeAry(doc) {
  return querySelectorArray('#pCC a[href*="=viewrecipe&"]', doc);
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
