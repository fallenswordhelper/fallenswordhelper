import createAnchor from '../../common/cElement/createAnchor';
import insertElement from '../../common/insertElement';
import insertElementBefore from '../../common/insertElementBefore';
import querySelector from '../../common/querySelector';
import querySelectorArray from '../../common/querySelectorArray';
import regExpFirstCapture from '../../common/regExpFirstCapture';
import xPath from '../../common/xPath';
import { defSubcmd, guideUrl } from '../../support/constants';

function getItemId(el) {
  if (!el) return;
  const match = regExpFirstCapture(/\/items\/(?<id>\d+)\.gif/, el.src);
  if (match) return match;
}

function guideItemHref(itemId) {
  return `${guideUrl}items${defSubcmd}view&item_id=${itemId}`;
}

function makeGuideItemAnchor(itemId) {
  return createAnchor({
    href: guideItemHref(itemId),
    target: '_blank',
  });
}

function wrapInGuideLink(el, source) {
  const itemId = getItemId(source);
  if (!itemId) { return; }
  const myLink = makeGuideItemAnchor(itemId);
  insertElementBefore(myLink, el);
  insertElement(myLink, el);
}

function wrapImgInGuideLink(el) {
  wrapInGuideLink(el, el);
}

function makeNameLink() {
  const source = xPath(
    './/b[.="Target Invention"]/../../following-sibling::*[1]//img',
  );
  const recipe = querySelector('#pCC b');
  wrapInGuideLink(recipe, source);
}

function makeIngredientLinks() {
  const ingredients = querySelectorArray('#pCC img[src*="/items/"]');
  ingredients.forEach(wrapImgInGuideLink);
}

export default function injectViewRecipe() {
  makeNameLink();
  makeIngredientLinks();
}
