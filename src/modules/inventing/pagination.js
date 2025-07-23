import cElement from '../common/cElement/cElement';
import createDiv from '../common/cElement/createDiv';
import sendEvent from '../analytics/sendEvent';
import createInput from '../common/cElement/createInput';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';
import indexAjaxDoc from '../ajax/indexAjaxDoc';
import closestTd from '../common/closestTd';
import closestTr from '../common/closestTr';
import closestTable from '../common/closestTable';
import getCurrentFolderId from './getCurrentFolderId';
import getCustomUrlParameter from '../system/getCustomUrlParameter';
import onclick from '../common/onclick';
import setText from '../dom/setText';

const folderImgSrc = 'https://cdn2.fallensword.com/ui/misc/folder.png';
const folderOnImgSrc = 'https://cdn2.fallensword.com/ui/misc/folder_on.png';

const pageSelect = (context=document) =>
  querySelectorArray('select[name=page]', context);

const navTd = (context=document) => pageSelect(context)
  .map((i) => closestTd(i).nextElementSibling);

const recipeTable = (context=document) =>
  closestTable(querySelector('#pCC a[href*=viewrecipe]', context))
    .parentElement
    .parentElement
    .parentElement;

let pageId = Number(pageSelect()[0].value);
let folderId = getCurrentFolderId();

const lastPage = (context=document) =>
  Number(querySelector('option:last-child', pageSelect(context)[0]).value);

function createSpinner() {
  const spinner = createDiv();
  spinner.className = 'fshSpinner fshSpinner64';
  spinner.style.display = 'none';
  return spinner;
}

const spinner = createSpinner();

function updatePageNumbers(newDoc) {
  const newLastPage = lastPage(newDoc);
  const options = Array.from(Array(newLastPage + 1).keys())
    .map((value) => {
      const option = cElement('option', { value });
      setText(value + 1, option);
      return option;
    });
  pageSelect().forEach((select) => {
    select.replaceChildren(...options.map((i) => i.cloneNode(true)));
    setText(` of ${newLastPage + 1} `, select.nextSibling);
    closestTd(select).style.paddingRight = '4px';
  });
}

async function gotoPage(page, folder) {
  if (page === pageId && folder === folderId) {
    return;
  }

  pageSelect().forEach((i) => { i.value = page });
  spinner.style.display = 'block';
  const doc = await indexAjaxDoc({
    cmd: 'inventing',
    page,
    folder_id: folder,
  });
  recipeTable().replaceWith(recipeTable(doc));

  if ( folder !== folderId ) {
    updatePageNumbers(doc);
  }
  spinner.style.display = 'none';

  pageId = page;
  folderId = folder;
}

function gotoFirstPage() {
  sendEvent('inventing', 'gotoFirstPage');
  gotoPage(0, folderId);
}

function gotoLastPage() {
  sendEvent('inventing', 'gotoLastPage');
  gotoPage(lastPage(), folderId);
}

function gotoPrevPage() {
  gotoPage(Math.max(0, pageId - 1), folderId);
}

function gotoNextPage() {
  gotoPage(Math.min(pageId + 1, lastPage()), folderId);
}

function createButton(value, clickFn) {
  return createInput({
    value,
    onclick: clickFn,
    type: 'button',
  });
}

function gotoSpecificPage(event) {
  const select = pageSelect(closestTr(event.target))[0];
  gotoPage(Number(select.value), folderId);
}

function createButtonsTd() {
  const inputTd = cElement('td');
  inputTd.append(
    createButton('Go', gotoSpecificPage), ' ',
    createButton('<<', gotoFirstPage), ' ',
    createButton('<', gotoPrevPage), ' ',
    createButton('>', gotoNextPage), ' ',
    createButton('>>', gotoLastPage),
  );
  return inputTd;
}

export default function pagination() {
  navTd().forEach((i) => i.replaceWith(createButtonsTd()));
  document.body.append(spinner);
  querySelectorArray('a[href*=folder_id]:first-child').forEach((a) => {
    const thisFolder = getCustomUrlParameter(a.href, 'folder_id');
    onclick(a, (event) => {
      event.preventDefault();
      querySelector('img[src*=folder_on]').src = folderImgSrc;
      querySelector('img', a).src = folderOnImgSrc;
      gotoPage(0, thisFolder);
    });
  });
}
