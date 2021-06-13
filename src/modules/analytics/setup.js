import calf from '../support/calf';
import isAuto from './isAuto';
import isUndefined from '../common/isUndefined';
import loadScript from '../common/loadScript';
import playerId from '../common/playerId';

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
  [/\?ref=[0-9]+/],
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

export default function setup() {
  if (isAuto()) { return; }
  if (isUndefined(window.ga)) {
    loadScript('https://www.google-analytics.com/analytics.js');
    // eslint-disable-next-line
    window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
  }
  initApp();
  initSite();
}
