import doBuffLink from './common/doBuffLink';
import doBuffLinkClick from './common/doBuffLinkClick';
import insertHtmlBeforeEnd from './common/insertHtmlBeforeEnd';
import interceptSubmit from './common/interceptSubmit';
import {
  getLowerGvGLevel,
  getLowerPvpLevel,
  getUpperGvgLevel,
  getUpperPvpLevel,
} from './common/levelHighlight';
import onclick from './common/onclick';
import querySelector from './common/querySelector';
import querySelectorArray from './common/querySelectorArray';
import { playerLinkSelector, searchPlayerUrl } from './support/constants';
import { getPcc } from './support/layout';

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
  const playerLinks = querySelectorArray(playerLinkSelector, getPcc());
  playerLinks.forEach(doBuffLink);
  onclick(getPcc(), doBuffLinkClick);
}

export default function injectFindPlayer() {
  doFindPlayer();
  doBuffLinks();
  interceptSubmit();
}
