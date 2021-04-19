import { f as insertHtmlBeforeEnd, h as hasClass, H as getTextTrim } from './calfSystem-d5c49dc8.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-cf6100f7.js';

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
//# sourceMappingURL=doBuffLinkClick-14e52b6a.js.map
