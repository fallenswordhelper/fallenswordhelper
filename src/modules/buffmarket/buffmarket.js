import BuyButton from './BuyButton.svelte';
import arrayFrom from '../common/arrayFrom';
import createDocument from '../system/createDocument';
import indexAjaxData from '../ajax/indexAjaxData';
import on from '../common/on';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorAll';
import setInnerHtml from '../dom/setInnerHtml';

function injectBuyButtons(ctx) {
  const re = /id=([0-9]+)/;
  arrayFrom(querySelectorArray('input[type=button][value=Buy]', ctx)).map((input) => {
    const td = input.parentNode;
    td.style.height = '23px';
    const packageId = td.innerHTML.match(re)[1];
    setInnerHtml('', td);

    return new BuyButton({
      target: td,
      props: { packageId },
    });
  });
}

async function searchBuffs(data) {
  const html = await indexAjaxData(data);
  const doc = createDocument(html);
  const buffResults = querySelector('#buff-results', doc).parentElement;
  return buffResults.innerHTML;
}

function injectSearch(resultsNode) {
  const searchForm = querySelector('#pCC input[name="search"][value="1"]').parentNode;
  on(searchForm, 'submit', (e) => {
    e.preventDefault();
    setInnerHtml('<div style="width: 290px;">Loading...</div>', resultsNode);
    // eslint-disable-next-line no-undef
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd);
    searchBuffs(data).then((r) => {
      setInnerHtml(r, resultsNode);
      injectBuyButtons(resultsNode);
    });
  });
}

export default function buffmarket() {
  const searchResults = querySelector('#buff-results').parentNode;
  injectSearch(searchResults);
  injectBuyButtons();
}
