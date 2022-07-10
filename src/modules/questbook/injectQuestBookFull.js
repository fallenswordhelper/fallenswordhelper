import getElementsByTagName from '../common/getElementsByTagName';
import interceptSubmit from '../common/interceptSubmit';
import partial from '../common/partial';
import { defTable } from '../support/constants';
import { getPcc } from '../support/layout';
import getValue from '../system/getValue';
import setValue from '../system/setValue';
import injectQuestRow from './injectQuestRow';

let normalLink = 0;
let seasonLink = 0;
let activeLink = 0;
let completeLink = 0;
let notStartedLink = 0;
let currentPageValue = 0;

const currentLocationValue = [0, 3, 0, 1, 2];

const savePrefKey = [
  'lastNormalActiveQuestPage',
  'lastNormalCompletedQuestPage',
  'lastNormalNotStartedQuestPage',
  'lastSeasonalActiveQuestPage',
  'lastSeasonalCompletedQuestPage',
  'lastSeasonalNotStartedQuestPage',
];

function pageCombo(aLinks, acc, curr, i) {
  if (aLinks[i].children[0].getAttribute('color') === '#FF0000') {
    return acc + curr;
  }
  return acc;
}

function whereAmI() {
  const aLinks = getElementsByTagName('a', getPcc());
  [normalLink, seasonLink, activeLink, completeLink, notStartedLink] = aLinks;
  currentPageValue = currentLocationValue.reduce(partial(pageCombo, aLinks), 0);
}

function storeLoc() {
  const lastQBPage = window.location.search;
  setValue('lastActiveQuestPage', lastQBPage);
  setValue(savePrefKey[currentPageValue], lastQBPage);
}

function getPref(pref) { return getValue(pref); }

function getPrevVals() {
  return savePrefKey.map(getPref);
}

function oppositeType(lastPages) {
  return [
    lastPages[3],
    lastPages[4],
    lastPages[5],
    lastPages[0],
    lastPages[1],
    lastPages[2],
  ];
}

function setLink(aLink, url) {
  if (url.length > 0) {
    aLink.setAttribute('href', url);
  }
}

function subset(lastPages, i) {
  setLink(activeLink, lastPages[i]);
  setLink(completeLink, lastPages[i + 1]);
  setLink(notStartedLink, lastPages[i + 2]);
}

function updateLinks() {
  const lastPages = getPrevVals();
  const oppositeTypeUrl = oppositeType(lastPages);

  if (currentPageValue < 3) {
    setLink(seasonLink, oppositeTypeUrl[currentPageValue]);
    subset(lastPages, 0);
  } else {
    setLink(normalLink, oppositeTypeUrl[currentPageValue]);
    subset(lastPages, 3);
  }
}

function storeQuestPage() {
  if (getValue('storeLastQuestPage')) {
    whereAmI();
    storeLoc();
    updateLinks();
  }
}

export default function injectQuestBookFull() {
  interceptSubmit();
  storeQuestPage();
  const questTable = getElementsByTagName(defTable, getPcc())[5];
  if (!questTable) { return; }
  injectQuestRow(questTable);
}
