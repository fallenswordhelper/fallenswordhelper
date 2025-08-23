import sendEvent from '../analytics/sendEvent';
import arrayFrom from '../common/arrayFrom';
import createAnchor from '../common/cElement/createAnchor';
import getArrayByClassName from '../common/getArrayByClassName';
import insertElement from '../common/insertElement';
import insertElementBefore from '../common/insertElementBefore';
import onclick from '../common/onclick';
import querySelectorArray from '../common/querySelectorArray';
import regExpExec from '../common/regExpExec';
import regExpFirstCapture from '../common/regExpFirstCapture';
import { guideUrl, monsterIdRe } from '../support/constants';
import { pcc } from '../support/layout';

const titanSpottedRe = /(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/;
const realmSearchHref = (name) =>
  `${guideUrl}realms&search_name=${encodeURIComponent(name)}`;

const makeALink = (name) =>
  createAnchor({
    href: `${realmSearchHref(name)}`,
    textContent: name,
    target: '_blank',
  });

function ufsgMonsterLink(monsterId, anchor) {
  if (!anchor) {
    anchor = createAnchor({})
  }
  anchor.href = `${guideUrl}creatures&subcmd=view&creature_id=${monsterId}`;
  anchor.target = '_blank';
  onclick(anchor, () => sendEvent('news', 'Ufsg link'));
  return anchor;
}

function ufsgLinkFromImg(img) {
  const monsterId = regExpFirstCapture(monsterIdRe, img.src);
  if (!monsterId) return;
  const myLink = ufsgMonsterLink(monsterId);
  insertElementBefore(myLink, img);
  insertElement(myLink, img);
}

function titanSpotted(el) {
  return titanSpottedRe.test(el.lastChild.nodeValue); // Text Node
}

function isMonsterLink(anchor) {
  return monsterIdRe.test(anchor.dataset.tipped);
}

function titanRealmLink(el) {
  const [, titanAnchor, otherText] = arrayFrom(el.childNodes);
  const news = regExpExec(titanSpottedRe, otherText.nodeValue); // Text Node
  const locAnchor = makeALink(news[2]);
  el.replaceChildren(titanAnchor, news[1], locAnchor);
  onclick(locAnchor, () => sendEvent('news', 'Titan location link'));
}

export default function addUfsgLinks() {
  querySelectorArray('.news_body img[src*="/creatures/"]')
    .forEach(ufsgLinkFromImg);
  querySelectorArray(
      '.news_body a[data-tipped*="/creatures/"],' +
      '.news_body_tavern a[data-tipped*="/creatures/"]',
  )
    .filter(isMonsterLink)
    .forEach((anchor) => {
      const monsterId = regExpFirstCapture(monsterIdRe, anchor.dataset.tipped);
      ufsgMonsterLink(monsterId, anchor);
    });

  getArrayByClassName('news_body_tavern', pcc())
    .filter(titanSpotted)
    .forEach(titanRealmLink);
}
