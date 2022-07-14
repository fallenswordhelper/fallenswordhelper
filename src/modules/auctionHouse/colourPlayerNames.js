import getElementById from '../common/getElementById';
import querySelectorArray from '../common/querySelectorArray';
import relatePlayer from '../logs/playerLogWidgets/relatePlayer';
import { playerLinkSelector } from '../support/constants';

const getPlayerLinks = () => querySelectorArray(playerLinkSelector, getElementById('resultRows'))
  .filter((a) => !a.href.endsWith('=null'));
const getPlayerTags = async (playerLinks) => (await Promise.all(playerLinks.map(relatePlayer)))
  .filter(([, type]) => type);
const lookup = {
  guild: 'fshGreen',
  ally: 'fshBlue',
  enemy: 'fshRed',
};

async function doColours() {
  const playerLinks = getPlayerLinks();
  if (!playerLinks.length) { return; }
  const playerTags = await getPlayerTags(playerLinks);
  if (!playerTags.length) { return; }
  playerTags.forEach(([a, type]) => {
    a.classList.add(lookup[type]);
  });
}

export default async function colourPlayerNames() {
  await doColours();
  $(document).ajaxSuccess((_e, _jqXHR, options) => {
    if (options.url.endsWith('=ajaxsearch')) {
      doColours();
    }
  });
}
