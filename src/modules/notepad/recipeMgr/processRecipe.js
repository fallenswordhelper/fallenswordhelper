import getArrayByTagName from '../../common/getArrayByTagName';
import getElementById from '../../common/getElementById';
import getText from '../../common/getText';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import partial from '../../common/partial';
import regExpGroups from '../../common/regExpGroups';
import { fetchItemRe } from '../../support/constants';
import createDocument from '../../system/createDocument';

function getTblCells(doc) {
  return getArrayByTagName('td', getElementById('pCC', doc));
}

function background(bgGif, el) {
  const bg = el.getAttribute('background');
  return bg && bg.includes(bgGif);
}

function buildResult(img) {
  const { itemId, vcode } = regExpGroups(fetchItemRe, img.dataset.tipped);
  return {
    img: img.getAttribute('src'),
    id: itemId,
    verify: vcode,
  };
}

function hasAmounts(result, amounts) {
  if (amounts) {
    const resultAmounts = getText(amounts).split('/');
    // eslint-disable-next-line no-param-reassign
    result.amountPresent = parseInt(resultAmounts[0], 10);
    // eslint-disable-next-line no-param-reassign
    result.amountNeeded = parseInt(resultAmounts[1], 10);
  }
}

function attribs(el) {
  const img = el.children[0].children[0];
  const result = buildResult(img);
  hasAmounts(result, el.parentNode.nextElementSibling);
  return result;
}

function parseRecipe(tblCells, bgGif) {
  return tblCells
    .filter(partial(background, bgGif))
    .map(attribs);
}

export default function processRecipe(output, recipebook, recipe, html) {
  const doc = createDocument(html);
  insertHtmlBeforeEnd(output, `Parsing blueprint ${recipe.name}...<br>`);
  const tblCells = getTblCells(doc);
  // eslint-disable-next-line no-param-reassign
  recipe.items = parseRecipe(tblCells, '/inventory/2x3.');
  // eslint-disable-next-line no-param-reassign
  recipe.components = parseRecipe(tblCells, '/inventory/1x1mini.');
  // eslint-disable-next-line no-param-reassign
  [recipe.target] = parseRecipe(tblCells, '/hellforge/2x3.');
  recipebook.recipe.push(recipe);
}
