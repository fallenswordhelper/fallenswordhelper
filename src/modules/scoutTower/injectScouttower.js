import {createAnchor} from '../common/cElement';
import displayTracker from './displayTracker';
import getForage from '../ajax/getForage';
import injectScouttowerBuffLinks from './injectScouttowerBuffLinks';
import insertElement from '../common/insertElement';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import jQueryNotPresent from '../common/jQueryNotPresent';
import {pCC} from '../support/layout';
import parseDateAsTimestamp from '../system/parseDateAsTimestamp';
import roundToString from '../common/roundToString';
import setForage from '../ajax/setForage';
import {guideUrl, now} from '../support/constants';

function getTitanName(aRow) {
  return aRow.cells[0].firstElementChild.getAttribute('oldtitle');
}

function cooldownTracker(aRow, theTitans) {
  var myName = getTitanName(aRow).replace(' (Titan)', '');
  if (!theTitans[myName]) {
    var cooldown = aRow.nextElementSibling.cells[0].textContent;
    var coolTime = 0;
    if (cooldown.indexOf('until') !== -1) {
      coolTime = parseDateAsTimestamp(
        cooldown.replace('Cooldown until: ', ''));
    }
    theTitans[myName] = {
      cooldownText: cooldown,
      coolTime: coolTime,
      seen: 'yes'
    };
  }
}

function addMissingTitansFromOld(oldTitans, newTitans) {
  if (!oldTitans) {return;}
  Object.keys(oldTitans).forEach(function(oldTitan) {
    if (newTitans[oldTitan]) {return;}
    if (oldTitans[oldTitan].coolTime <= now) {return;}
    newTitans[oldTitan] = {
      cooldownText: oldTitans[oldTitan].cooldownText,
      coolTime: oldTitans[oldTitan].coolTime,
      seen: 'no'
    };
  });
}

export function getTitanString(guildKills, totalHP, currentHP) {
  var numberOfKillsToSecure = Math.ceil(totalHP / 2 + 1);
  if (guildKills >= numberOfKillsToSecure) {
    return 'Secured';
  }
  var remainingKills = numberOfKillsToSecure - guildKills;
  if (remainingKills > currentHP) {
    return '<span class="fshRed">Cannot Secure</span>';
  }
  return '<span class="fshRed">' + remainingKills + '</span> to secure';
}

export function getKillsPct(currentNumberOfKills, guildKills) {
  if (currentNumberOfKills === 0) {return 0;}
  return guildKills * 100 / currentNumberOfKills;
}

function injectSummary(aRow, titanHP) {
  var guildKills = Number(aRow.cells[3].textContent);
  var titanHPArray = titanHP.split('/');
  var currentHP = Number(titanHPArray[0]);
  var totalHP = Number(titanHPArray[1]);
  insertHtmlBeforeEnd(aRow.cells[3],
    '<br><span class="fshBlue"> (' +
    roundToString(getKillsPct(totalHP - currentHP, guildKills), 2) +
    '% Current <br>' + roundToString(guildKills * 100 / totalHP, 2) +
    '% Total<br>' + getTitanString(guildKills, totalHP, currentHP) + ')');
}

function killsSummary(aRow) {
  var titanHP = aRow.cells[2].textContent;
  if (titanHP.indexOf('-') !== -1) {return;}
  injectSummary(aRow, titanHP);
}

function guideLink(aRow) {
  var myName = encodeURIComponent(getTitanName(aRow));
  var myImg = aRow.cells[0].firstElementChild;
  var myLink = createAnchor({
    href: guideUrl + 'creatures&search_name=' + myName,
    target: '_blank'
  });
  insertElement(myLink, myImg);
  insertElement(aRow.cells[0], myLink);

  var realmCell = aRow.cells[1];
  var realmName = realmCell.textContent;
  realmCell.innerHTML = '<a href="' + guideUrl + 'realms&search_name=' +
    realmName + '" target="_blank">' + realmName + '</a>';
}

function gotOldTitans(oldTitans) {
  var titanTables = pCC.getElementsByTagName('table');
  injectScouttowerBuffLinks(titanTables);
  var titanTable = titanTables[1];
  var newTitans = {};
  for (var i = 1; i < titanTable.rows.length - 1; i += 6) {
    var aRow = titanTable.rows[i];
    killsSummary(aRow);
    cooldownTracker(aRow, newTitans); // Pref
    guideLink(aRow);
  }
  addMissingTitansFromOld(oldTitans, newTitans); // Pref
  displayTracker(titanTables[0], newTitans); // Pref
  setForage('fsh_titans', newTitans); // Pref
}

export default function injectScouttower() { // jQuery.min
  if (jQueryNotPresent()) {return;}
  getForage('fsh_titans').done(gotOldTitans); // Pref
}
