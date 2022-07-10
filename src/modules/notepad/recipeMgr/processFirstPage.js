import retryAjax from '../../ajax/retryAjax';
import all from '../../common/all';
import getText from '../../common/getText';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import partial from '../../common/partial';
import createDocument from '../../system/createDocument';
import getCustomUrlParameter from '../../system/getCustomUrlParameter';
import getFolderImgs from './getFolderImgs';
import processFolderFirstPage from './processFolderFirstPage';

function notUnassigned(el) {
  return getCustomUrlParameter(el.parentNode.search, 'folder_id') !== '-1';
}

function noQuests(output, el) {
  const folderName = getText(
    el.parentNode.parentNode.nextElementSibling,
  );
  const hasQuest = /quest/i.test(folderName);
  if (hasQuest) {
    insertHtmlBeforeEnd(output, `Skipping folder "${
      folderName}"  as it has the word "quest" in folder name.<br>`);
  }
  return !hasQuest;
}

function doAjax(bindFolderFirstPage, el) {
  return retryAjax(el.parentNode.href).then(bindFolderFirstPage);
}

function buildPrm(output, html, bindFolderFirstPage) {
  const doc = createDocument(html);
  const folderImgs = getFolderImgs(doc);
  return folderImgs
    .filter(notUnassigned)
    .filter(partial(noQuests, output))
    .map(partial(doAjax, bindFolderFirstPage));
}

export default function processFirstPage(output, recipebook, html) { // jQuery.min
  const bindFolderFirstPage = partial(processFolderFirstPage, output, recipebook);
  const prm = buildPrm(output, html, bindFolderFirstPage);
  prm.push(bindFolderFirstPage(html));
  return all(prm);
}
