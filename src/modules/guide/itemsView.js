import sendEvent from '../analytics/sendEvent';
import createAnchor from '../common/cElement/createAnchor';
import containsText from '../common/containsText';
import getText from '../common/getText';
import insertElement from '../common/insertElement';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import onclick from '../common/onclick';
import querySelector from '../common/querySelector';
import xPath from '../common/xPath';
import { ahSearchUrl } from '../support/constants';

const isNotBound = () => !xPath('.//*[text() = "This item is bound"]');
const isNotComponent = () =>
  !containsText('Component', xPath('.//tr[td/b/text() = "Type:"]/td[2]'));
const ahItemHref = (name) =>
  `https://www.fallensword.com/${ahSearchUrl}${name}`;

function insertAhLink(target) {
  if (!target) return;
  const anchor = createAnchor({
    href: ahItemHref(getText(target)),
    innerHTML: '<b class="fshBlue">AH</b>',
    target: '_blank',
  });
  onclick(anchor, () => sendEvent('guide', 'Item AH Link'));
  insertHtmlBeforeEnd(target.parentNode, ' [');
  insertElement(target.parentNode, anchor);
  insertHtmlBeforeEnd(target.parentNode, ']');
}

export default function itemsView() {
  if (isNotBound() && isNotComponent())
    insertAhLink(querySelector('.tHeader')?.children?.[0]);
}
