import './doQuickLinks.css';
import sendEvent from '../../analytics/sendEvent';
import createAnchor from '../../common/cElement/createAnchor';
import createDiv from '../../common/cElement/createDiv';
import createLi from '../../common/cElement/createLi';
import createUl from '../../common/cElement/createUl';
import draggable from '../../common/draggable';
import insertElement from '../../common/insertElement';
import onclick from '../../common/onclick';
import querySelector from '../../common/querySelector';
import calf from '../../support/calf';
import task from '../../support/task';
import getValue from '../../system/getValue';
import getValueJSON from '../../system/getValueJSON';

const createQuicklinksDiv = (offset) => createDiv({
  className: 'fshQuickLinks fshInnerBg',
  style: {
    left: `${getValue('quickLinksLeftPx')}px`,
    top: `${Number(getValue('quickLinksTopPx')) + offset}px`,
  },
});

const valid = (link) => ('newWindow' in link) && link.url && link.name;

function createLink(link) {
  const anchor = createAnchor({
    href: link.url,
    ...(link.newWindow && { target: 'new' }),
    text: link.name,
  });
  onclick(anchor, () => sendEvent('chrome', 'quick link', link.name));
  return anchor;
}

function addLinks(quickLinks, div) {
  const ul = insertElement(div, createUl());
  quickLinks.filter(valid).forEach((link) => {
    insertElement(insertElement(ul, createLi()), createLink(link));
  });
}

function newLinks(offset, quickLinks) {
  const div = createQuicklinksDiv(offset);
  div.classList.toggle('fshFixed', getValue('keepHelperMenuOnScreen'));
  if (getValue('draggableQuickLinks')) {
    div.classList.add('fshMove');
    draggable(div);
  }
  addLinks(quickLinks, div);
  insertElement(document.body, div);
}

function injectQuickLinks() {
  const mainbody = querySelector('.mainbody');
  if (!mainbody) return;
  const { top: mainBodyTop } = mainbody.getBoundingClientRect();
  const { top } = document.body.getBoundingClientRect();
  const quickLinks = getValueJSON('quickLinks') || [];
  if (quickLinks.length) newLinks(mainBodyTop - top, quickLinks);
}

export default function doQuickLinks() {
  if (!calf.huntingMode) task(3, injectQuickLinks);
}
