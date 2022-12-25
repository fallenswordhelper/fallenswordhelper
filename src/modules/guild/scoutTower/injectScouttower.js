import createAnchor from '../../common/cElement/createAnchor';
import dataRows from '../../common/dataRows';
import getElementsByTagName from '../../common/getElementsByTagName';
import getText from '../../common/getText';
import getTitle from '../../common/getTitle';
import insertElement from '../../common/insertElement';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import querySelector from '../../common/querySelector';
import trimTitanName from '../../common/trimTitanName';
import setInnerHtml from '../../dom/setInnerHtml';
import { defTable, guideUrl } from '../../support/constants';
import { pcc } from '../../support/layout';
import injectScouttowerBuffLinks from './injectScouttowerBuffLinks';
import killsSummary from './killsSummary';
import titanTracker from './titanTracker';

function imgLink(aRow) {
  const myName = encodeURIComponent(aRow.titanName);
  const [myImg] = aRow.tr.cells[0].children;
  const myLink = createAnchor({
    href: `${guideUrl}creatures&search_name=${myName}`,
    target: '_blank',
  });
  insertElement(myLink, myImg);
  insertElement(aRow.tr.cells[0], myLink);
}

function realmLink(aRow) {
  const [, realmCell] = aRow.tr.cells;
  const realmName = getText(realmCell);
  setInnerHtml(`<a href="${guideUrl}realms&search_name=${
    realmName}" target="_blank">${realmName}</a>`, realmCell);
}

function addTitanName(aRow) {
  insertHtmlBeforeEnd(aRow.tr.cells[0], aRow.titanName);
}

function guideLink(aRow) {
  imgLink(aRow);
  addTitanName(aRow);
}

function decorate(aRow) {
  killsSummary(aRow);
  guideLink(aRow);
  realmLink(aRow);
}

function getTitanName(aRow) {
  return getTitle(querySelector('img', aRow));
}

const meta = (tr) => ({
  guildKills: Number(getText(tr.cells[3])),
  hp: getText(tr.cells[2]),
  titanName: trimTitanName(getTitanName(tr)),
  tr,
  visible: true,
});
const active = (o) => ({
  ...o,
  active: !o.hp.includes('-'),
  titanHp: o.hp.split('/').map(Number),
});
const secure = (o) => ({
  ...o,
  securable: o.active && Math.ceil(o.titanHp[1] / 2 + 1) - o.guildKills <= o.titanHp[0],
});
const makeTitanRows = (titanTables) => dataRows(titanTables[1], 4, 0)
  ?.map(meta)
  .map(active)
  .map(secure);

export default function injectScouttower() {
  if (jQueryNotPresent()) return;
  const titanTables = getElementsByTagName(defTable, pcc());
  if (!titanTables?.length) return;
  injectScouttowerBuffLinks(titanTables);
  const titanRows = makeTitanRows(titanTables);
  if (titanRows) {
    titanRows.forEach(decorate);
    titanTracker(titanTables, titanRows);
  }
}
