import isUndefined from '../common/isUndefined';
import loadScript from '../common/loadScript';
import playerId from '../common/playerId';
import calf from '../support/calf';
import isAuto from './isAuto';

const urlPatch = [
  [/&m=.*/],
  [/&subcmd=&.*/],
  [/&subcmd2=&.*/],
  [/&[a-z_]+_id=.+/],
  [/&id=.+/],
  [/&target_player=.+/],
  [/&[a-z]+_username=.+/],
  [/\?cmd=auctionhouse.+/, '?cmd=auctionhouse'],
  [/&subcmd=[0-9a-f]{32}/],
  [/&search_active=.+/],
  [/&letter=.+/],
  [/&guild_name=.+/],
  [/&user=.+/],
  [/&[a-z_]*page=.+/],
  [/&prestige=.+/],
  [/&withdraw_amount=.+/],
  [/&amount=.+/],
  [/&tickets=.+/],
  [/&search=.+/],
  [/&target=.+/],
  [/&xcv=[0-9a-f]{32}/],
  [/\?ref=\d+/],
];

function stripExtra(acc, curr) {
  return acc.replace(curr[0], curr[1] || '');
}

function fixupUrl() {
  const origPath = window.location.pathname + window.location.search;
  const page = urlPatch.reduce(stripExtra, origPath);
  ga('fshApp.set', 'screenName', page);
  ga('fsh.set', 'page', page);
}

function setPlayerId(cmd) {
  const pid = playerId();
  if (pid) { ga(cmd, 'userId', pid); }
}

function initApp() {
  ga('create', 'UA-76488113-1', 'auto', 'fshApp', { siteSpeedSampleRate: 10 });
  ga('fshApp.set', 'appName', 'fshApp');
  ga('fshApp.set', 'appVersion', `${calf.fshVer}(${calf.calfVer})`);
  setPlayerId('fshApp.set');
}

function initSite() {
  ga('create', 'UA-76488113-2', 'auto', 'fsh', { siteSpeedSampleRate: 10 });
  setPlayerId('fsh.set');
  fixupUrl();
  ga('fsh.send', 'pageview');
}

function analyticsSetup() {
  if (isAuto()) { return; }
  if (isUndefined(window.ga)) {
    loadScript('https://www.google-analytics.com/analytics.js');
    window.ga = window.ga || function gafn() {
      ga.q = ga.q || [];
      // eslint-disable-next-line prefer-rest-params
      ga.q.push(arguments);
    };
    ga.l = Number(new Date());
  }
  initApp();
  initSite();
}

function gtagSetup() {
  loadScript('https://www.googletagmanager.com/gtag/js?id=G-14Y99WX8XL');
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', 'G-14Y99WX8XL');
}

export default function setup() {
  analyticsSetup();
  gtagSetup();
}
