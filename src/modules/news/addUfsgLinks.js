import createAnchor from '../common/cElement/createAnchor';
import createSpan from '../common/cElement/createSpan';
import getArrayByClassName from '../common/getArrayByClassName';
import getTitle from '../common/getTitle';
import insertElement from '../common/insertElement';
import insertElementBefore from '../common/insertElementBefore';
import querySelectorArray from '../common/querySelectorArray';
import regExpExec from '../common/regExpExec';
import { guideUrl } from '../support/constants';
import { pcc } from '../support/layout';

const creatureSearchHref = (name) => `${guideUrl}creatures&search_name=${encodeURIComponent(name)}`;
const titanRe = /(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/;
const realmSearchHref = (name) => `${guideUrl}realms&search_name=${encodeURIComponent(name)}`;
const makeALink = (name) => `<a href="${realmSearchHref(name)}" target="_blank">${name}</a>`;

function makeUfsgLink(img) {
  const myLink = createAnchor({
    href: creatureSearchHref(getTitle(img).split('(')[0].trim()),
    target: '_blank',
  });
  insertElementBefore(myLink, img);
  insertElement(myLink, img);
}

function titanSpotted(el) {
  return titanRe.test(el.lastChild.nodeValue); // Text Node
}

function reformatNews(el) {
  const news = regExpExec(titanRe, el.lastChild.nodeValue); // Text Node
  news[2] = makeALink(news[2]);
  return news.slice(1).join('');
}

function updateTitanAnchor(el) {
  const anchor = el.children[0];
  anchor.href = creatureSearchHref(anchor.textContent);
  anchor.target = '_blank';
}

function titanLink(el) {
  updateTitanAnchor(el);
  const newSpan = createSpan({ innerHTML: reformatNews(el) });
  el.replaceChild(newSpan, el.lastChild); // Text Node
}

export default function addUfsgLinks() {
  querySelectorArray('.news_body img[src*="/creatures/"]')
    .forEach(makeUfsgLink);
  getArrayByClassName('news_body_tavern', pcc())
    .filter(titanSpotted).forEach(titanLink);
}
