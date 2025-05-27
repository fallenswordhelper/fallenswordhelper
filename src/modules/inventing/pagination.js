import cElement from '../common/cElement/cElement';
import createDiv from '../common/cElement/createDiv';
import sendEvent from '../analytics/sendEvent';
import createInput from '../common/cElement/createInput';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';
import indexAjaxDoc from '../ajax/indexAjaxDoc';
import closestTd from '../common/closestTd';
import closestTable from '../common/closestTable';
import insertElementBefore from '../common/insertElementBefore';
import getCurrentFolderId from './getCurrentFolderId';
import getCustomUrlParameter from '../system/getCustomUrlParameter';
import onclick from '../common/onclick';

const folderImgSrc = 'https://cdn2.fallensword.com/ui/misc/folder.png';
const folderOnImgSrc = 'https://cdn2.fallensword.com/ui/misc/folder_on.png';

const pageSelect = (context=document) =>
  querySelector('select[name=page]', context);

const navTd = (context=document) => closestTd(pageSelect(context)).nextElementSibling;

const folderTable = (context=document) =>
  closestTable(querySelector('img[src*=folder]', context));

let pageId = Number(pageSelect().value);
let folderId = getCurrentFolderId();

const lastPage = () =>
  Number(querySelector('option:last-child', pageSelect()).value);

function createSpinner() {
  const spinner = createDiv();
  spinner.style.cssText = `
    animation: fshSpinner 0.6s linear infinite;
    border: 2px solid #ccc;
    border-radius: 50%;
    border-top-color: #07d;
    height: 8px;
    width: 8px;
    margin: 0px 4px;
    display: none;
  `;
  return spinner;
}

const spinner = createSpinner();

async function gotoPage(page, folder) {
  if (page === pageId && folder === folderId) {
    return;
  }
  pageId = page;
  folderId = folder;

  pageSelect().value = page;
  spinner.style.display = 'inline-block';
  const doc = await indexAjaxDoc({
    cmd: 'inventing',
    page: pageId,
    folder_id: folderId,
  });
  navTd(doc).replaceWith(navTd());
  folderTable(doc).replaceWith(folderTable());
  insertElementBefore(spinner, pageSelect(doc));
  querySelector('#pCC').replaceWith(querySelector('#pCC', doc));
  spinner.style.display = 'none';
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

function createButtonsTd() {
  const inputTd = cElement('td');
  inputTd.append(
    createButton('Go', () => gotoPage(pageSelect().value)), ' ',
    createButton('<<', gotoFirstPage), ' ',
    createButton('<', gotoPrevPage), ' ',
    createButton('>', gotoNextPage), ' ',
    createButton('>>', gotoLastPage),
  );
  return inputTd;
}

export default function pagination() {
  navTd().replaceWith(createButtonsTd());
  insertElementBefore(spinner, pageSelect());
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
