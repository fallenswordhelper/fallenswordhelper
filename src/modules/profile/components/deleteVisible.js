import getArrayByTagName from '../../common/getArrayByTagName';
import getInvTable from './getInvTable';
import { itemRE } from '../../support/constants';
import partial from '../../common/partial';
import setInnerHtml from '../../dom/setInnerHtml';

let visibleCache;

function getComponents(acc, x) {
  const matches = x.dataset.tipped.match(itemRE);
  acc[matches[2]] = x.parentNode.parentNode;
  return acc;
}

function getVisibleComponents() {
  if (!visibleCache) {
    const nodeList = getArrayByTagName('img', getInvTable());
    visibleCache = nodeList.reduce(getComponents, {});
  }
  return visibleCache;
}

function blatElement(visibleComponents, a) {
  if (visibleComponents[a]) { setInnerHtml('', visibleComponents[a]); }
}

export default function deleteVisible(ary) {
  console.log('deleteVisible', ary); // eslint-disable-line no-console
  ary.forEach(partial(blatElement, getVisibleComponents()));
}
