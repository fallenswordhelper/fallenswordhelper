import createAnchor from '../../common/cElement/createAnchor';
import dataRows from '../../common/dataRows';
import displayTracker from './displayTracker';
import entries from '../../common/entries';
import getElementsByTagName from '../../common/getElementsByTagName';
import getKillsPct from './getKillsPct';
import getText from '../../common/getText';
import getTitanString from './getTitanString';
import getTitle from '../../common/getTitle';
import injectScouttowerBuffLinks from './injectScouttowerBuffLinks';
import insertElement from '../../common/insertElement';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import { now } from '../../support/now';
import { pCC } from '../../support/layout';
import parseDateAsTimestamp from '../../system/parseDateAsTimestamp';
import partial from '../../common/partial';
import roundToString from '../../common/roundToString';
import setInnerHtml from '../../dom/setInnerHtml';
import { defTable, guideUrl } from '../../support/constants';
import { get, set } from '../../system/idb';

function getTitanName(aRow) {
  return getTitle(aRow.cells[0].children[0]);
}

function cooldownTracker(theTitans, aRow) {
  const myName = getTitanName(aRow).replace(' (Titan)', '');
  if (!theTitans[myName]) {
    const cooldown = getText(aRow.nextElementSibling.cells[0]);
    let coolTime = 0;
    if (cooldown.includes('until')) {
      coolTime = parseDateAsTimestamp(
        cooldown.replace('Cooldown until: ', ''),
      );
    }
    // eslint-disable-next-line no-param-reassign
    theTitans[myName] = {
      cooldownText: cooldown,
      coolTime,
      seen: 'yes',
    };
  }
}

function anyMissing(newTitans, pair) {
  if (newTitans[pair[0]]) { return; }
  if (pair[1].coolTime <= now) { return; }
  // eslint-disable-next-line no-param-reassign
  newTitans[pair[0]] = {
    cooldownText: pair[1].cooldownText,
    coolTime: pair[1].coolTime,
    seen: 'no',
  };
}

function addMissingTitansFromOld(oldTitans, newTitans) {
  if (!oldTitans) { return; }
  entries(oldTitans).forEach(partial(anyMissing, newTitans));
}

function summaryHtml(guildKills, currentHP, totalHP) {
  return `<br><span class="fshBlue"> (${
    roundToString(getKillsPct(totalHP - currentHP, guildKills), 2)
  }% Current <br>${roundToString((guildKills * 100) / totalHP, 2)
  }% Total<br>${getTitanString(guildKills, totalHP, currentHP)})`;
}

function injectSummary(aRow, titanHP) {
  const titanHPArray = titanHP.split('/');
  insertHtmlBeforeEnd(
    aRow.cells[3],
    summaryHtml(
      Number(getText(aRow.cells[3])),
      Number(titanHPArray[0]),
      Number(titanHPArray[1]),
    ),
  );
}

function killsSummary(aRow) {
  const titanHP = getText(aRow.cells[2]);
  if (titanHP.indexOf('-') !== -1) { return; }
  injectSummary(aRow, titanHP);
}

function imgLink(aRow, titanName) {
  const myName = encodeURIComponent(titanName);
  const myImg = aRow.cells[0].children[0];
  const myLink = createAnchor({
    href: `${guideUrl}creatures&search_name=${myName}`,
    target: '_blank',
  });
  insertElement(myLink, myImg);
  insertElement(aRow.cells[0], myLink);
}

function realmLink(aRow) {
  const realmCell = aRow.cells[1];
  const realmName = getText(realmCell);
  setInnerHtml(`<a href="${guideUrl}realms&search_name=${
    realmName}" target="_blank">${realmName}</a>`, realmCell);
}

function guideLink(aRow) {
  const titanName = getTitanName(aRow);
  imgLink(aRow, titanName);
  insertHtmlBeforeEnd(aRow.cells[0], titanName.replace(' (Titan)', ''));
  realmLink(aRow);
}

function decorate(newTitans, aRow) {
  killsSummary(aRow);
  cooldownTracker(newTitans, aRow); // Pref
  guideLink(aRow);
}

function doTooMuch(titanTable, newTitans) {
  dataRows(titanTable.rows, 4, 0).forEach(partial(decorate, newTitans));
}

function gotOldTitans(oldTitans) {
  const titanTables = getElementsByTagName(defTable, pCC);
  injectScouttowerBuffLinks(titanTables);
  const titanTable = titanTables[1];
  const newTitans = {};
  doTooMuch(titanTable, newTitans);
  addMissingTitansFromOld(oldTitans, newTitans); // Pref
  displayTracker(titanTables[0], newTitans); // Pref
  set('fsh_titans', newTitans); // Pref
}

export default function injectScouttower() { // jQuery.min
  if (jQueryNotPresent()) { return; }
  get('fsh_titans').then(gotOldTitans); // Pref
}
