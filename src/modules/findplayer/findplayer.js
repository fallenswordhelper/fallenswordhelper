import './findplayer.css';
import sendEvent from '../analytics/sendEvent';
import createAnchor from '../common/cElement/createAnchor';
import createDiv from '../common/cElement/createDiv';
import closestForm from '../common/closestForm';
import closestTable from '../common/closestTable';
import doBuffLink from '../common/doBuffLink';
import doBuffLinkClick from '../common/doBuffLinkClick';
import insertElement from '../common/insertElement';
import interceptSubmit from '../common/interceptSubmit';
import {
  getLowerGvGLevel,
  getLowerPvpLevel,
  getUpperGvgLevel,
  getUpperPvpLevel,
} from '../common/levelHighlight';
import onclick from '../common/onclick';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';
import { playerLinkSelector, searchPlayerUrl } from '../support/constants';
import { pcc } from '../support/layout';

const searchUrl = (min, max, guild) => `${searchPlayerUrl}&search_level_min=${
  min}&search_level_max=${max}&search_in_guild=${guild}`;

function makeLink(min, max, guild, textContent) {
  const thisLink = createAnchor({
    className: 'fshBlue fsh-findplayer-link',
    href: searchUrl(min, max, guild),
    textContent,
  });
  onclick(thisLink, () => sendEvent('findplayer', textContent));
  return thisLink;
}

function doShortcuts(findPlayerButton) {
  const parent = closestForm(findPlayerButton);
  parent.classList.add('fshRelative');
  const containerDiv = createDiv({ className: 'fsh-findplayer-div' });
  const pvpLink = makeLink(getLowerPvpLevel(), getUpperPvpLevel(), '-1', 'Get PvP targets');
  const gvgLink = makeLink(getLowerGvGLevel(), getUpperGvgLevel(), '1', 'Get GvG targets');
  insertElement(containerDiv, pvpLink);
  insertElement(containerDiv, gvgLink);
  insertElement(parent, containerDiv);
}

function doFindPlayer() {
  const findPlayerButton = querySelector('input[value="Find Player"]');
  if (findPlayerButton) doShortcuts(findPlayerButton);
}

function doBuffLinks() {
  const playerLinks = querySelectorArray(playerLinkSelector, pcc());
  if (!playerLinks.length) return;
  closestTable(playerLinks[0]).classList.add('fsh-findplayer-table');
  playerLinks.forEach(doBuffLink);
  onclick(pcc(), doBuffLinkClick);
}

export default function findplayer() {
  doFindPlayer();
  doBuffLinks();
  interceptSubmit();
}
