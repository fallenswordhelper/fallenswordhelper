import { f as insertHtmlBeforeEnd, h as hasClass, H as getTextTrim } from './calfSystem-02fd040d.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-2e9d4b7d.js';

function doBuffLink(playerLink) {
  insertHtmlBeforeEnd(playerLink.parentNode,
    ' <button class="fshBl fshBls">[b]</button>');
}

const isBuffLink = (target) => hasClass('fshBl', target)
  && target.previousElementSibling;

function doBuffLinkClick(e) {
  if (isBuffLink(e.target)) {
    openQuickBuffByName(getTextTrim(e.target.previousElementSibling));
  }
}

export { doBuffLinkClick as a, doBuffLink as d };
//# sourceMappingURL=doBuffLinkClick-c58696d9.js.map
