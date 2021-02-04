import { aC as containsText, D as querySelector, bb as ahSearchUrl, f as insertHtmlBeforeEnd, B as getText } from './calfSystem-cc2b30b5.js';
import { x as xPath } from './xPath-7d2e899c.js';

function isNotBound() {
  return !xPath('.//*[text() = "This item is bound"]');
}

function isNotComponent() {
  return !containsText('Component',
    xPath('.//tr[td/b/text() = "Type:"]/td[2]'));
}

function ahItemHref(name) {
  return `https://www.fallensword.com/${ahSearchUrl}${name}`;
}

function insertAhLink(target) {
  insertHtmlBeforeEnd(target.parentNode, ` [<a href="${
    ahItemHref(getText(target))
  }" target="_blank"><b class="fshBlue">AH</b></a>]`);
}

function itemsView() {
  if (isNotBound() && isNotComponent()) {
    insertAhLink(querySelector('.tHeader').children[0]);
  }
}

export default itemsView;
//# sourceMappingURL=itemsView-6c2581ba.js.map
