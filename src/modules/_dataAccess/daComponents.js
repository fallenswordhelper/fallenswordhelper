import indexAjaxDoc from '../ajax/indexAjaxDoc';
import retryAjax from '../ajax/retryAjax';
import loadComponents from '../app/profile/loadcomponents';
import all from '../common/all';
import querySelectorAll from '../common/querySelectorAll';
import querySelectorArray from '../common/querySelectorArray';
import regExpGroups from '../common/regExpGroups';
import sum from '../common/sum';
import { fetchItemRe } from '../support/constants';
import createDocument from '../system/createDocument';
import $dataAccess from './$dataAccess';

function details(a) {
  const { itemId, invId, vcode } = regExpGroups(
    fetchItemRe,
    a.children[0].dataset.tipped,
  );
  return {
    a: Number(invId),
    b: Number(itemId),
    v: vcode,
  };
}

const ajax = async (a) => createDocument(await retryAjax(a.href));
const getComponents = (doc) =>
  querySelectorArray('a[href*="=destroycomponent&"]', doc).map(details);
const componentSlots = (doc) =>
  querySelectorAll('td[background*="/1x1mini."]', doc).length;

function remainder(profileDoc) {
  const pages = querySelectorArray(
    'a[href*="profile&component_page="]',
    profileDoc,
  );
  return pages.slice(1).map(ajax);
}

function fakeHud(asDocs) {
  return { p: [{ k: 56, v: asDocs.map(componentSlots).reduce(sum, 0) }] };
}

const returnJson = (asDocs) => ({
  h: fakeHud(asDocs),
  r: asDocs.flatMap(getComponents),
  s: true,
});

// Incomplete
async function components() {
  const profileDoc = await indexAjaxDoc({ cmd: 'profile' });
  const profiles = await all([profileDoc, ...remainder(profileDoc)]);
  return returnJson(profiles);
}

export default function daComponents() {
  return $dataAccess(loadComponents, components);
}
