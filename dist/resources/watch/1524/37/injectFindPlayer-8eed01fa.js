import { d as doBuffLink, a as doBuffLinkClick } from './doBuffLinkClick-3aac620e.js';
import { D as searchPlayerUrl, f as insertHtmlBeforeEnd, E as querySelector, F as querySelectorArray, G as playerLinkSelector, p as pCC, o as onclick } from './calfSystem-6840a38e.js';
import { i as interceptSubmit } from './interceptSubmit-7a9128a3.js';
import { g as getLowerPvpLevel, a as getUpperPvpLevel, b as getLowerGvGLevel, c as getUpperGvgLevel } from './levelHighlight-04c7ea31.js';
import './openQuickBuffByName-2320ddfb.js';
import './fshOpen-3161ad53.js';
import './formToUrl-a4a392eb.js';
import './intValue-0e97c9b9.js';
import './valueText-6241396f.js';

function searchUrl(min, max, guild) {
  return `${searchPlayerUrl}&search_level_min=${
    min}&search_level_max=${
    max}&search_in_guild=${
    guild}`;
}

function shortcuts() {
  return `&nbsp;<a class="fshBlue" href="${
    searchUrl(getLowerPvpLevel(), getUpperPvpLevel(), '-1')
  }">Get PvP targets</a>&nbsp;<a class="fshBlue" href="${
    searchUrl(getLowerGvGLevel(), getUpperGvgLevel(), '1')}">Get GvG targets</a>`;
}

function doShortcuts(findPlayerButton) {
  insertHtmlBeforeEnd(findPlayerButton.parentNode, shortcuts());
}

function doFindPlayer() {
  const findPlayerButton = querySelector('input[value="Find Player"]');
  if (findPlayerButton) {
    doShortcuts(findPlayerButton);
  }
}

function doBuffLinks() {
  const playerLinks = querySelectorArray(playerLinkSelector, pCC);
  playerLinks.forEach(doBuffLink);
  onclick(pCC, doBuffLinkClick);
}

function injectFindPlayer() {
  doFindPlayer();
  doBuffLinks();
  interceptSubmit();
}

export default injectFindPlayer;
//# sourceMappingURL=injectFindPlayer-8eed01fa.js.map
