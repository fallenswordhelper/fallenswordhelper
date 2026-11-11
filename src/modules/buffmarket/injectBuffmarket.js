import './buffmarket.css';
import daBuffMarketBuy from '../_dataAccess/daBuffMarketBuy';
import indexAjaxDoc from '../ajax/indexAjaxDoc';
import sendEvent from '../analytics/sendEvent';
import fromEntries from '../common/fromEntries';
import on from '../common/on';
import onclick from '../common/onclick';
import partial from '../common/partial';
import querySelector from '../common/querySelector';
import setInnerHtml from '../dom/setInnerHtml';
import { pcc } from '../support/layout';
import getPackageId from './getPackageId';

async function search(injector, e) {
  sendEvent('buffmarket', 'search');
  e.preventDefault();
  setInnerHtml('<div class="fshWaiting">Loading...</div>', injector);
  const data = fromEntries(new FormData(e.target));
  const doc = await indexAjaxDoc(data);
  if (!doc) return;
  const intermediateResult = querySelector('#buff-results', doc);
  if (!intermediateResult) return;
  const newBuffResults = intermediateResult.parentElement.innerHTML;
  setInnerHtml(newBuffResults, injector);
}

function injectSearch(buffResults) {
  const searchForm = document.forms[0];
  on(searchForm, 'submit', partial(search, buffResults.parentNode));
}

async function doIntercept(e, packageId) {
  const actionRow = e.target.parentNode;
  actionRow.className = 'fshActionRow';
  setInnerHtml(
    '<div class="fshSpin"><span class="fshSpinner"></span></div>',
    actionRow,
  );
  const response = await daBuffMarketBuy(packageId);
  if (response?.s) {
    setInnerHtml(
      '<span class="fshBuffSuccess">Buffs have been applied</span>',
      actionRow,
    );
  } else {
    const msg = response?.e?.message ?? 'Failed';
    setInnerHtml(`<span class="fshBuffFail">${msg}</span>`, actionRow);
  }
}

function interceptBuy(e) {
  const packageId = getPackageId(e.target);
  // Without an id, leave the click to the game
  if (!packageId) return;
  sendEvent('buffmarket', 'interceptBuy');
  e.stopPropagation();
  void doIntercept(e, packageId); // skipcq: JS-0098
}

function interceptClick(e) {
  if (e.target.tagName === 'INPUT' && e.target.value === 'Buy') {
    interceptBuy(e);
  }
}

export default function injectBuffmarket() {
  const buffResults = querySelector('#buff-results');
  if (!buffResults) {
    return;
  }
  injectSearch(buffResults);
  onclick(pcc(), interceptClick, true);
}
