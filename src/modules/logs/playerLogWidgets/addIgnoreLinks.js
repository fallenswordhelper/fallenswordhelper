import closestTr from '../../common/closestTr';
import getTextTrim from '../../common/getTextTrim';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import querySelectorArray from '../../common/querySelectorArray';
import { doAddIgnore, playerLinkSelector } from '../../support/constants';

const pmClass = (privMsg) => (privMsg ? ' class="pmIgnoreUrl"' : '');

const ignoreLinkHtml = (privMsg, p) => `<a${pmClass(privMsg)} href="${doAddIgnore}${
  getTextTrim(p)}" data-tooltip="Add to Ignore List">Ignore</a>`;

function noMsg(privMsg, [p, r]) {
  insertHtmlBeforeEnd(r.cells[1], `<font size="1"><br>[ ${ignoreLinkHtml(privMsg, p)} ]</font>`);
}

export default function addIgnoreLinks(logTable, privMsg) {
  const playerLinks = querySelectorArray(playerLinkSelector, logTable);
  if (playerLinks.length === 0) { return; }
  const playerRows = playerLinks.map((p) => [p, closestTr(p)]);
  playerRows.forEach((pr) => noMsg(privMsg, pr));
}
