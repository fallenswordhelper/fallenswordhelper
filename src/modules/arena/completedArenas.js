import cElement from '../common/cElement/cElement';
import createDiv from '../common/cElement/createDiv';
import sendEvent from '../analytics/sendEvent';
import createInput from '../common/cElement/createInput';
import getText from '../common/getText';
import querySelector from '../common/querySelector';
import indexAjaxDoc from '../ajax/indexAjaxDoc';

let pageId = querySelector('#pCC #page').value;

const lastPage = getText(
    querySelector('#pCC input[value=Go]').parentNode.previousElementSibling,
  ).replace(/\D/g, '');

const inputTr = querySelector('#pCC #page').closest('tr');

async function gotoPage(page) {
  if (page === pageId) {
    return;
  }
  pageId = page;

  inputTr.querySelector('#page').value = page;
  spinner.style.display = 'inline-block';
  const doc = await indexAjaxDoc({
    cmd: 'arena',
    subcmd: 'completed',
    page: pageId,
  });
  getTarget(doc).replaceWith(inputTr);
  querySelector('#pCC').replaceWith(querySelector('#pCC', doc));
  spinner.style.display = 'none';
}

function gotoFirstPage() {
  sendEvent('arena completed', 'gotoFirstPage');
  gotoPage(1);
}

function gotoLastPage() {
  sendEvent('arena completed', 'gotoLastPage');
  gotoPage(lastPage);
}

function gotoPrevPage() {
  gotoPage(Math.max(1, pageId - 1));
}

function gotoNextPage() {
  gotoPage(Math.min(pageId + 1, lastPage));
}

const getTarget = (context=document) =>
  querySelector('#pCC input[value=Go]', context).closest('tr');

const createButton = (props) => createInput({ type: 'button', ...props });

function createButtonsTd() {
  const inputTd = cElement('td');
  inputTd.append(
    createButton({
      value: 'Go',
      onclick: () => gotoPage(querySelector('#page').value),
    }), ' ',
    createButton({
      value: '<<',
      onclick: gotoFirstPage,
    }), ' ',
    createButton({
      value: '<',
      onclick: gotoPrevPage,
    }), ' ',
    createButton({
      value: '>',
      onclick: gotoNextPage,
    }), ' ',
    createButton({
      value: '>>',
      onclick: gotoLastPage,
    }),
  );
  return inputTd;
}

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

export default function completedArenas() {
  getTarget().children[1].replaceWith(createButtonsTd());

  const td = querySelector('#pCC #page').closest('td');
  td.insertBefore(spinner, td.firstChild);
}
