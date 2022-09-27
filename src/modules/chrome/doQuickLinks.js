import './doQuickLinks.css';
import draggable from '../common/draggable';
import getElementById from '../common/getElementById';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import querySelector from '../common/querySelector';
import calf from '../support/calf';
import task from '../support/task';
import escapeHtml from '../system/escapeHtml';
import getValue from '../system/getValue';
import getValueJSON from '../system/getValueJSON';

function retBool(bool, ifTrue, ifFalse) {
  if (bool) {
    return ifTrue;
  }
  return ifFalse;
}

function retOption(option, ifTrue, ifFalse) {
  return retBool(getValue(option), ifTrue, ifFalse);
}

function isDraggable(draggableQuickLinks) {
  if (draggableQuickLinks) {
    draggable(getElementById('fshQuickLinks'));
  }
}

function invalid(link) {
  return !('newWindow' in link) || !link.url || !link.name;
}

function linkHtml(link) {
  if (invalid(link)) { return ''; }
  const newWindow = retBool(link.newWindow, ' target="new"', '');
  return `<li><a href="${escapeHtml(link.url)}"${
    newWindow}>${link.name}</a></li>`;
}

function makeQuickLinks(quickLinks) {
  return quickLinks.map(linkHtml).join('');
}

function haveLinks(top, quickLinks) {
  const draggableQuickLinks = getValue('draggableQuickLinks');
  const html = `<div style="top:${Number(getValue('quickLinksTopPx')) + top}px; left:${
    getValue('quickLinksLeftPx')}px;" id="fshQuickLinks" `
    + `class="fshQuickLinks fshInnerBg${
      retOption('keepHelperMenuOnScreen', ' fshFixed', '')
    }${retBool(draggableQuickLinks, ' fshMove', '')}">${
      makeQuickLinks(quickLinks)}</div>`;
  insertHtmlBeforeEnd(document.body, html);
  isDraggable(draggableQuickLinks);
}

function haveNode(node) {
  const { top } = node.getBoundingClientRect();
  const quickLinks = getValueJSON('quickLinks') || [];
  if (quickLinks.length > 0) haveLinks(top, quickLinks);
}

function injectQuickLinks() {
  const node = querySelector('.mainbody');
  if (node) haveNode(node);
}

export default function doQuickLinks() {
  if (!calf.huntingMode) {
    task(3, injectQuickLinks);
  }
}
