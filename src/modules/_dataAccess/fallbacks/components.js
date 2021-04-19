import allthen from '../../common/allthen';
import createDocument from '../../system/createDocument';
import indexAjaxData from '../../ajax/indexAjaxData';
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

const getSlots = (doc) => querySelectorArray('td[background*="1x1mini"]', doc).length;

function processPages(prm) {
  const asDocs = prm.map(createDocument);
  const perPage = asDocs.map(getComponents);
  const r = [].concat(...perPage);
  const cm = asDocs.map(getSlots).reduce(sum, 0);
  return { h: { cm }, r };
}

function firstPage(html) {
  const doc = createDocument(html);
  const pages = querySelectorArray('a[href*="profile&component_page="]', doc);
  const profiles = pages.map((a) => retryAjax(a.href));
  return allthen(profiles, processPages);
}

// Incomplete
export default function components() {
  return indexAjaxData({ cmd: 'profile' }).then(firstPage);
}
