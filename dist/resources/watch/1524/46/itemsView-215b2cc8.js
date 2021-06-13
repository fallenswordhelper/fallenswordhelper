import { aN as containsText, E as querySelector, bn as ahSearchUrl, f as insertHtmlBeforeEnd, C as getText } from './calfSystem-86663d02.js';
import { x as xPath } from './xPath-4050d799.js';

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
  if (!target) { return; }
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
//# sourceMappingURL=itemsView-215b2cc8.js.map
