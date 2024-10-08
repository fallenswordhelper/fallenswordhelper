import createDiv from '../../common/cElement/createDiv';
import getElementById from '../../common/getElementById';
import insertElement from '../../common/insertElement';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import isArray from '../../common/isArray';
import setInnerHtml from '../../dom/setInnerHtml';
import { pcc } from '../../support/layout';
import { invManFilter } from './assets';
import { getTheInv } from './buildInv';
import { getInvFail, injectError } from './injectError';

const makeTitle = () =>
  getTheInv().player_id
    ? `<b>&nbsp;Inventory Manager</b> ${
        getTheInv().items.length
      } items (green = worn, blue = backpack)`
    : `<b>&nbsp;Guild Inventory Manager</b> ${
        getTheInv().items.length
      } items (maroon = in BP, blue=guild store)`;

function showError() {
  if (!getInvFail()) return;
  const myDiv = insertElement(
    getElementById('pF'),
    createDiv({ style: { textAlign: 'center' } }),
  );
  injectError(myDiv);
}

function injectHeaders() {
  const reportTitle = makeTitle();
  setInnerHtml('', pcc());
  showError();
  insertHtmlBeforeEnd(
    pcc(),
    invManFilter.replace('@@reportTitle@@', reportTitle),
  );
}

export default function headers() {
  if (isArray(getTheInv().items)) injectHeaders();
}
