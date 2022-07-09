import './buffmarket.css';
import createDocument from '../system/createDocument';
import daBuffMarketBuy from '../_dataAccess/daBuffMarketBuy';
import fromEntries from '../common/fromEntries';
import { getPcc } from '../support/layout';
import indexAjaxData from '../ajax/indexAjaxData';
import on from '../common/on';
import onclick from '../common/onclick';
import partial from '../common/partial';
import querySelector from '../common/querySelector';
import setInnerHtml from '../dom/setInnerHtml';

async function search(injector, e) {
  e.preventDefault();
  setInnerHtml('<div class="fshWaiting">Loading...</div>', injector);
  const data = fromEntries(new FormData(e.target));
  const doc = createDocument(await indexAjaxData(data));
  const newBuffResults = querySelector('#buff-results', doc).parentElement.innerHTML;
  setInnerHtml(newBuffResults, injector);
}

function injectSearch(buffResults) {
  const searchForm = document.forms[0];
  on(searchForm, 'submit', partial(search, buffResults.parentNode));
}

async function interceptBuy(e) {
  e.stopPropagation();
  const packageId = e.target.getAttribute('onclick').match(/id=(?<id>[0-9]+)/)?.[1];
  if (packageId) {
    const actionRow = e.target.parentNode;
    actionRow.className = 'fshActionRow';
    setInnerHtml('<div class="fshSpin"><span class="fshSpinner"></span></div>', actionRow);
    const response = await daBuffMarketBuy(packageId);
    if (response.s) {
      setInnerHtml('<span class="fshBuffSuccess">Buffs have been applied</span>', actionRow);
    } else {
      setInnerHtml(`<span class="fshBuffFail">${response.e.message}</span>`, actionRow);
    }
  }
}

function interceptClick(e) {
  if (e.target.tagName === 'INPUT' && e.target.value === 'Buy') {
    interceptBuy(e);
  }
}

export default function injectBuffmarket() {
  const buffResults = querySelector('#buff-results');
  if (!buffResults) { return; }
  injectSearch(buffResults);
  onclick(getPcc(), interceptClick, true);
}
