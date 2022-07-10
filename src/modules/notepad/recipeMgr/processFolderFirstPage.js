import retryAjax from '../../ajax/retryAjax';
import all from '../../common/all';
import getArrayByTagName from '../../common/getArrayByTagName';
import getElementById from '../../common/getElementById';
import getElementsByClassName from '../../common/getElementsByClassName';
import partial from '../../common/partial';
import createDocument from '../../system/createDocument';
import getFolderImgs from './getFolderImgs';
import processFolderAnyPage from './processFolderAnyPage';

function thisInventFolder(el) {
  return /\/folder_on\./.test(el.getAttribute('src'));
}

function thisFolderHref(doc) {
  return getFolderImgs(doc).find(thisInventFolder).parentNode.href;
}

function notThisPage(el, i) { return i !== 0; }

function pageNumber(el) { return el.value; }

function otherPages(doc) {
  return getArrayByTagName(
    'option',
    getElementsByClassName('customselect', getElementById('pCC', doc))[0],
  )
    .filter(notThisPage).map(pageNumber);
}

function getPage(thisFolder, bindFolderAnyPage, i) {
  return retryAjax(`${thisFolder}&page=${i}`)
    .then(bindFolderAnyPage);
}

function ajaxOtherPages(doc, thisFolder, bindFolderAnyPage) {
  return otherPages(doc).map(partial(getPage, thisFolder, bindFolderAnyPage));
}

export default function processFolderFirstPage(output, recipebook, html) { // jQuery.min
  const doc = createDocument(html);
  const thisFolder = thisFolderHref(doc);
  const bindFolderAnyPage = partial(processFolderAnyPage, output, recipebook);
  const prm = ajaxOtherPages(doc, thisFolder, bindFolderAnyPage);
  prm.push(bindFolderAnyPage(html));
  return all(prm);
}
