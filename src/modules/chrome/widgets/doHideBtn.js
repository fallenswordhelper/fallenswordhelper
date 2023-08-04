import arrayFrom from '../../common/arrayFrom';
import hideElement from '../../common/hideElement';
import querySelectorAll from '../../common/querySelectorAll';
import calf from '../../support/calf';

const hideBtn = [
  [
    'hideGuildInfoTrade',
    '#guild-minibox-action-trade',
    '#online-allies-action-trade',
  ],
  [
    'hideGuildInfoSecureTrade',
    '#guild-minibox-action-secure-trade',
    '#online-allies-action-secure-trade',
  ],
  [
    'hideGuildInfoBuff',
    '#guild-minibox-action-quickbuff',
    '#online-allies-action-quickbuff',
  ],
  [
    'hideGuildInfoMessage',
    '#guild-minibox-action-send-message',
    '#online-allies-action-send-message',
  ],
];

function hideNodeList(nodeList) {
  arrayFrom(nodeList).forEach(hideElement);
}

export default function doHideBtn(context, selector) {
  hideBtn.forEach((el) => {
    if (calf[el[0]]) hideNodeList(querySelectorAll(el[selector], context));
  });
}
