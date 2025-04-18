import './accordion.css';
import fromEntries from '../../common/fromEntries';
import getElementById from '../../common/getElementById';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import { pcl } from '../../support/layout';
import getValue from '../../system/getValue';
import injectItems from './injectItems';
import theLinks from './leftHandLinks.json';
import navMenu from './navMenu';
import preFlight from './preFlight';

function updateQuestLink() {
  const lastActiveQuestPage = getValue('lastActiveQuestPage');
  if (getValue('storeLastQuestPage') && lastActiveQuestPage.length > 0) {
    getElementById('nav-character-questbook').href = lastActiveQuestPage;
  }
}

function updateScavLink() {
  const lastScavPage = getValue('lastScavPage');
  if (getValue('storeLastScavPage') && lastScavPage.length > 0) {
    getElementById('nav-actions-artisanship-scavenging').href = lastScavPage;
  }
}

function updateLinks() {
  updateQuestLink();
  updateScavLink();
}

function getLinkConfig(theNav, myNav) {
  const linkConfig = theLinks.map((c) => [c, getValue(c)]);
  if (linkConfig.some(([, b]) => b)) {
    injectItems(theNav, myNav, fromEntries(linkConfig));
  }
}

async function doAccordion() {
  const { theNav, myNav } = await preFlight();
  if (theNav && myNav) {
    updateLinks();
    getLinkConfig(theNav, myNav);
    navMenu(myNav);
  }
}

export default function injectMenu() {
  if (!pcl() || jQueryNotPresent()) {
    return;
  }
  doAccordion();
}
