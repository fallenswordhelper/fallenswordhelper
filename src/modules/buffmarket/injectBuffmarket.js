import './buffmarket.css';
import daBuffMarketBuy from '../_dataAccess/daBuffMarketBuy';
import indexAjaxDoc from '../ajax/indexAjaxDoc';
import fromEntries from '../common/fromEntries';
import on from '../common/on';
import onclick from '../common/onclick';
import partial from '../common/partial';
import querySelector from '../common/querySelector';
import regExpFirstCapture from '../common/regExpFirstCapture';
import setInnerHtml from '../dom/setInnerHtml';
import { pcc } from '../support/layout';

async function search(injector, e) {
  e.preventDefault();
  setInnerHtml('<div class="fshWaiting">Loading...</div>', injector);
  const data = fromEntries(new FormData(e.target));
  const doc = await indexAjaxDoc(data);
  const intermediateResult = querySelector('#buff-results', doc);
  if (!intermediateResult) return;
  const newBuffResults = intermediateResult.parentElement.innerHTML;
  setInnerHtml(newBuffResults, injector);
}

function injectSearch(buffResults) {
  const searchForm = document.forms[0];
  on(searchForm, 'submit', partial(search, buffResults.parentNode));
}

async function interceptBuy(e) {
  e.stopPropagation();
  const packageId = regExpFirstCapture(/id=(?<id>\d+)/, e.target.getAttribute('onclick'));
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
  onclick(pcc(), interceptClick, true);
}
