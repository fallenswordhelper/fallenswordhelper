import { getPcc } from '../../support/layout';
import { getTheInv } from './buildInv';
import { invManFilter } from './assets';
import setInnerHtml from '../../dom/setInnerHtml';

export default function headers() {
  let reportTitle = '';
  if (getTheInv().player_id) {
    reportTitle = `<b>&nbsp;Inventory Manager</b> ${
      getTheInv().items.length
    } items (green = worn, blue = backpack)`;
  } else {
    reportTitle = `<b>&nbsp;Guild Inventory Manager</b> ${
      getTheInv().items.length
    } items (maroon = in BP, blue=guild store)`;
  }
  setInnerHtml(invManFilter.replace('@@reportTitle@@', reportTitle), getPcc());
}
