import sendEvent from '../analytics/sendEvent';
import arrayFrom from '../common/arrayFrom';
import createAnchor from '../common/cElement/createAnchor';
import getArrayByClassName from '../common/getArrayByClassName';
import getTextTrim from '../common/getTextTrim';
import getTitle from '../common/getTitle';
import insertElement from '../common/insertElement';
import insertElementBefore from '../common/insertElementBefore';
import onclick from '../common/onclick';
import querySelectorArray from '../common/querySelectorArray';
import regExpExec from '../common/regExpExec';
import { guideUrl } from '../support/constants';
import { pcc } from '../support/layout';

const creatureSearchHref = (name) =>
  `${guideUrl}creatures&search_name=${encodeURIComponent(name)}`;
const titanRe = /(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/;
const realmSearchHref = (name) =>
  `${guideUrl}realms&search_name=${encodeURIComponent(name)}`;
const makeALink = (name) =>
  createAnchor({
    href: `${realmSearchHref(name)}`,
    textContent: name,
    target: '_blank',
  });

function makeUfsgLink(img) {
  const title = getTitle(img);
  if (!title) return;
  const myLink = createAnchor({
    href: creatureSearchHref(title.split('(')[0].trim()),
    target: '_blank',
  });
  insertElementBefore(myLink, img);
  insertElement(myLink, img);
  onclick(myLink, () => sendEvent('news', 'Ufsg Link'));
}

function titanSpotted(el) {
  return titanRe.test(el.lastChild.nodeValue); // Text Node
}

function titanLink(el) {
  const [, titanAnchor, otherText] = arrayFrom(el.childNodes);
  titanAnchor.href = creatureSearchHref(getTextTrim(titanAnchor));
  titanAnchor.target = '_blank';
  const news = regExpExec(titanRe, otherText.nodeValue); // Text Node
  const locAnchor = makeALink(news[2]);
  el.replaceChildren(titanAnchor, news[1], locAnchor);
  onclick(titanAnchor, () => sendEvent('news', 'Titan link'));
  onclick(locAnchor, () => sendEvent('news', 'Titan location link'));
}

export default function addUfsgLinks() {
  querySelectorArray('.news_body img[src*="/creatures/"]').forEach(
    makeUfsgLink,
  );
  getArrayByClassName('news_body_tavern', pcc())
    .filter(titanSpotted)
    .forEach(titanLink);
}
