import { d as doBuffLink, a as doBuffLinkClick } from './doBuffLinkClick-a77a2af2.js';
import { D as searchPlayerUrl, f as insertHtmlBeforeEnd, E as querySelector, F as querySelectorArray, G as playerLinkSelector, p as pCC, o as onclick } from './calfSystem-476ab75d.js';
import { i as interceptSubmit } from './interceptSubmit-1cc9bbe8.js';
import { g as getLowerPvpLevel, a as getUpperPvpLevel, b as getLowerGvGLevel, c as getUpperGvgLevel } from './levelHighlight-36b78f4d.js';
import './openQuickBuffByName-6e48651f.js';
import './fshOpen-72d27290.js';
import './formToUrl-3223a0cf.js';
import './asInt-7509a7c4.js';
import './intValue-fefb28df.js';
import './valueText-2986631a.js';

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
//# sourceMappingURL=injectFindPlayer-f978d5b8.js.map
