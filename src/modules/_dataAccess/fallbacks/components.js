import all from '../../common/all';
import createDocument from '../../system/createDocument';
import indexAjaxData from '../../ajax/indexAjaxData';
import querySelectorAll from '../../common/querySelectorAll';
import querySelectorArray from '../../common/querySelectorArray';
import retryAjax from '../../ajax/retryAjax';
import sum from '../../common/sum';

const componentRe = /\?item_id=(\d+)&inv_id=(\d+)&.*&vcode=([0-9a-f]+)/;

function details(a) {
  const pattern = a.children[0].dataset.tipped.match(componentRe);
  return {
    a: Number(pattern[2]),
    b: Number(pattern[1]),
    v: pattern[3],
  };
}

const getComponents = (doc) => querySelectorArray('a[href*="=destroycomponent&"]', doc).map(details);
const componentSlots = (doc) => querySelectorAll('td[background*="/1x1mini."]', doc).length;

function fakeHud(asDocs) {
  const p = Array(57);
  p[56] = { k: 56, v: asDocs.map(componentSlots).reduce(sum, 0) };
  return { p };
}

// Incomplete
export default async function components() {
  const profileHtml = await indexAjaxData({ cmd: 'profile' });
  const profileDoc = createDocument(profileHtml);
  const pages = querySelectorArray('a[href*="profile&component_page="]', profileDoc);
  const profiles = await all([profileHtml, ...pages.slice(1).map((a) => retryAjax(a.href))]);
  const asDocs = profiles.map(createDocument);
  return { h: fakeHud(asDocs), r: asDocs.flatMap(getComponents), s: true };
}
