import containsText from '../common/containsText';
import getText from '../common/getText';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import querySelector from '../common/querySelector';
import xPath from '../common/xPath';
import { ahSearchUrl } from '../support/constants';

function isNotBound() {
  return !xPath('.//*[text() = "This item is bound"]');
}

function isNotComponent() {
  return !containsText('Component', xPath('.//tr[td/b/text() = "Type:"]/td[2]'));
}

function ahItemHref(name) {
  return `https://www.fallensword.com/${ahSearchUrl}${name}`;
}

function insertAhLink(target) {
  if (!target) { return; }
  insertHtmlBeforeEnd(target.parentNode, ` [<a href="${
    ahItemHref(getText(target))
  }" target="_blank"><b class="fshBlue">AH</b></a>]`);
}

export default function itemsView() {
  if (isNotBound() && isNotComponent()) {
    insertAhLink(querySelector('.tHeader').children[0]);
  }
}
