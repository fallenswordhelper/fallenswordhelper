import indexAjaxData from '../../ajax/indexAjaxData';
import retryAjax from '../../ajax/retryAjax';
import all from '../../common/all';
import querySelectorAll from '../../common/querySelectorAll';
import querySelectorArray from '../../common/querySelectorArray';
import regExpGroups from '../../common/regExpGroups';
import sum from '../../common/sum';
import { fetchItemRe } from '../../support/constants';
import createDocument from '../../system/createDocument';

function details(a) {
  const { itemId, invId, vcode } = regExpGroups(fetchItemRe, a.children[0].dataset.tipped);
  return {
    a: Number(invId),
    b: Number(itemId),
    v: vcode,
  };
}

const ajax = (a) => retryAjax(a.href);
const getComponents = (doc) => querySelectorArray('a[href*="=destroycomponent&"]', doc).map(details);
const componentSlots = (doc) => querySelectorAll('td[background*="/1x1mini."]', doc).length;

function remainder(profileHtml) {
  const profileDoc = createDocument(profileHtml);
  const pages = querySelectorArray('a[href*="profile&component_page="]', profileDoc);
  return pages.slice(1).map(ajax);
}

function fakeHud(asDocs) {
  const p = Array(57); // skipcq: JS-C1002
  p[56] = { k: 56, v: asDocs.map(componentSlots).reduce(sum, 0) };
  return { p };
}

const returnJson = (asDocs) => ({
  h: fakeHud(asDocs),
  r: asDocs.flatMap(getComponents),
  s: true,
});

// Incomplete
export default async function components() {
  const profileHtml = await indexAjaxData({ cmd: 'profile' });
  const profiles = await all([profileHtml, ...remainder(profileHtml)]);
  return returnJson(profiles.map(createDocument));
}
