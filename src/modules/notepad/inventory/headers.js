import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import isArray from '../../common/isArray';
import setInnerHtml from '../../dom/setInnerHtml';
import { pcc } from '../../support/layout';
import { invManFilter } from './assets';
import { getTheInv } from './buildInv';
import { getInvFail, injectError } from './injectError';

export default function headers() {
  if (!isArray(getTheInv().items)) return;
  const reportTitle = getTheInv().player_id
    ? `<b>&nbsp;Inventory Manager</b> ${
      getTheInv().items.length} items (green = worn, blue = backpack)`
    : `<b>&nbsp;Guild Inventory Manager</b> ${
      getTheInv().items.length} items (maroon = in BP, blue=guild store)`;
  setInnerHtml('', pcc());
  if (getInvFail()) injectError();
  insertHtmlBeforeEnd(pcc(), invManFilter.replace('@@reportTitle@@', reportTitle));
}
