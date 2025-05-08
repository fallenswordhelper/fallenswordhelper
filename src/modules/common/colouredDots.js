import setInnerHtml from '../dom/setInnerHtml';
import getValue from '../system/getValue';
import batch from './batch';
import getPlayers from './getPlayers';
import lastActivity from './lastActivity';
import onlineDot from './onlineDot';

function changeOnlineDot(contactLink) {
  const { day, hour, min } = lastActivity(contactLink.dataset.tipped);
  setInnerHtml(onlineDot({ min, hour, day }), contactLink.parentNode.previousElementSibling);
}

export default function colouredDots() {
  if (!getValue('enhanceOnlineDots')) { return; }
  batch([
    3,
    getPlayers(),
    0,
    changeOnlineDot,
  ]);
}
