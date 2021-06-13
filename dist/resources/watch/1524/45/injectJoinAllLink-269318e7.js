import { m as getArrayByTagName, bR as pCL, C as getText, c as calf, b_ as joinallUrl, b$ as joinUnderUrl } from './calfSystem-02fd040d.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-6372af07.js';

function findNewGroup(el) {
  if (!getText(el).includes('New attack group created.')) { return; }
  let groupJoinHTML = '';
  if (!calf.enableMaxGroupSizeToJoin) {
    groupJoinHTML = `<a href="${joinallUrl}"><span `
      + 'class="notification-icon"></span><p class="notification-content">'
      + 'Join all attack groups.</p></a>';
  } else {
    groupJoinHTML = `<a href="${joinUnderUrl}"><span `
      + 'class="notification-icon"></span><p class="notification-content">'
      + `Join all attack groups less than size ${calf.maxGroupSizeToJoin
      }.</p></a>`;
  }
  insertHtmlAfterEnd(el, `<li class="notification">${groupJoinHTML}</li>`);
}

function injectJoinAllLink() {
  getArrayByTagName('li', pCL).forEach(findNewGroup);
}

export default injectJoinAllLink;
//# sourceMappingURL=injectJoinAllLink-269318e7.js.map
